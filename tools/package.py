"""Deterministic explicit-allowlist release; works in a checkout or extracted ZIP.
No Git, network, private files or third-party Python dependency is needed.
"""
from pathlib import Path, PurePosixPath
import hashlib
import tempfile
import zipfile
ROOT = Path(__file__).resolve().parent.parent
names = (ROOT / 'tools/release-files.txt').read_text().splitlines()
assert names == sorted(set(names)), 'Release allowlist must be sorted and unique'
payload = {}
for name in names:
    rel = PurePosixPath(name)
    assert not rel.is_absolute() and '..' not in rel.parts
    source = ROOT / name
    assert source.is_file() and not source.is_symlink(), f'Missing or linked release file: {name}'
    payload[name] = source.read_bytes()
manifest = ''.join(f'{hashlib.sha256(payload[n]).hexdigest()}  {n}\n' for n in names).encode()
(ROOT / 'MANIFEST.sha256').write_bytes(manifest)
payload['MANIFEST.sha256'] = manifest
target = ROOT / 'iqly-submission.zip'
with zipfile.ZipFile(target, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
    for name, content in sorted(payload.items()):
        info = zipfile.ZipInfo(name, (2020, 1, 1, 0, 0, 0))
        info.compress_type = zipfile.ZIP_DEFLATED
        info.external_attr = (0o100755 if name.endswith('.sh') else 0o100644) << 16
        archive.writestr(info, content)
with tempfile.TemporaryDirectory(prefix='iqly release ') as temp:
    with zipfile.ZipFile(target) as archive:
        assert set(archive.namelist()) == set(payload)
        archive.extractall(temp)
    for name, content in payload.items():
        assert (Path(temp) / name).read_bytes() == content == (ROOT / name).read_bytes(), name
print(f'PASS: public tree == ZIP == fresh extraction: {len(payload)} files; {len(names)} manifest entries')
print(f'{hashlib.sha256(target.read_bytes()).hexdigest()}  {target.name} ({target.stat().st_size} bytes)')
