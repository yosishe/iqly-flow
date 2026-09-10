'use strict';
const data = JSON.parse(document.getElementById('deck-data').textContent);
const slidesHost = document.getElementById('slides');
const picker = document.getElementById('slide-picker');
const notes = document.getElementById('notes');
const reading = document.getElementById('reading');
const pickerGroups = new Map();
function node(tag, attrs = {}, text) {
  const e = document.createElement(tag);
  for (const [k,v] of Object.entries(attrs)) e.setAttribute(k,v);
  if (text !== undefined) e.textContent = text;
  return e;
}
function place(e, x) {
  Object.assign(e.style, { left:x.x+'px',top:x.y+'px',width:x.w+'px',height:x.h+'px' });
}
function sources(items) {
  const list = node('ul',{class:'source-list'});
  for (const x of items) {
    const li=node('li');
    li.append(node('a',{href:x.url,target:'_blank',rel:'noopener'},x.label));
    list.append(li);
  }
  return list;
}
for (const s of data.slides) {
  const section=node('section',{class:'slide',id:'slide-'+s.number,'aria-label':s.number+'. '+s.title});
  section.style.background=s.background;
  for (const x of s.elements) {
    if(x.type==='text'){
      const e=node(x.url?'a':'div',{class:'text'},x.text);
      if(x.url){e.href=x.url;e.target='_blank';e.rel='noopener';}
      place(e,x);
      Object.assign(e.style,{fontSize:x.size+'px',color:x.color,fontWeight:x.bold?'700':'400',textAlign:x.align||'left'});
      if(x.underline)e.style.textDecoration='underline';
      section.append(e);
    }else if(x.type==='image'){
      const e=node('img',{src:'assets/'+x.file,alt:x.alt,loading:s.number===1?'eager':'lazy'});
      place(e,x);section.append(e);
    }else if(x.type==='table'){
      const table=node('table');place(table,x);table.style.fontSize=x.size+'px';
      const colgroup=node('colgroup');
      for(const w of x.widths){const col=node('col');col.style.width=w+'px';colgroup.append(col);}
      table.append(colgroup);
      for(let r=0;r<x.values.length;r++){
        const row=node('tr');row.style.height=x.rowHeights[r]+'px';
        for(const value of x.values[r])row.append(node(r===0?'th':'td',r===0?{scope:'col'}:{},value));
        table.append(row);
      }
      section.append(table);
    }
  }
  slidesHost.append(section);
  const groupName=s.section||'Presentation';
  if(!pickerGroups.has(groupName)){
    const group=node('optgroup',{label:groupName});
    pickerGroups.set(groupName,group);picker.append(group);
  }
  pickerGroups.get(groupName).append(node('option',{value:String(s.number-1)},s.number+' / '+data.slides.length+'  '+s.title));
  const article=node('article',{id:'reading-'+s.number});
  article.append(node('h2',{},s.number+'. '+s.title),node('p',{},s.notes),sources(s.sources));
  if(s.number===data.slides.length)article.append(sources(data.links));
  reading.append(article);
}
const sections=[...slidesHost.children];
let current=0;
function hashIndex(){const match=location.hash.match(/^#slide-(\d+)$/);return match?Number(match[1])-1:0;}
function show(index,updateHash=true){
  current=Math.max(0,Math.min(sections.length-1,Number.isFinite(index)?index:0));
  sections.forEach((s,i)=>s.hidden=i!==current);
  picker.value=String(current);
  document.getElementById('previous').disabled=current===0;
  document.getElementById('next').disabled=current===sections.length-1;
  const s=data.slides[current];notes.replaceChildren(node('p',{},s.notes),sources(s.sources));
  document.title='IQly: '+s.title+' ('+(current+1)+'/'+sections.length+')';
  if(updateHash)history.replaceState(null,'','#slide-'+(current+1));
}
function resize(){
  const toolbar=document.querySelector('.toolbar').getBoundingClientRect().height;
  const mobile=innerWidth<780;
  document.querySelector('.keyboard-hint').textContent=mobile
    ? 'Swipe or use Next. Choose Reading view for larger text.'
    : 'Use the arrow keys to move between slides. Choose a section in the slide menu.';
  const availableWidth=Math.min(innerWidth-(mobile?16:40),1500);
  const availableHeight=Math.max(260,innerHeight-toolbar-(mobile?155:205));
  const scale=Math.min(availableWidth/1280,availableHeight/720,1.16);
  document.documentElement.style.setProperty('--scale',String(scale));
}
document.getElementById('previous').addEventListener('click',()=>show(current-1));
document.getElementById('next').addEventListener('click',()=>show(current+1));
picker.addEventListener('change',()=>show(Number(picker.value)));
addEventListener('hashchange',()=>show(hashIndex(),false));
addEventListener('resize',resize);
addEventListener('keydown',e=>{
  if(e.altKey||e.ctrlKey||e.metaKey||e.target.matches('input,textarea,select')||document.body.classList.contains('reading'))return;
  if(e.key==='ArrowRight'||e.key==='PageDown'){e.preventDefault();show(current+1);}
  if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();show(current-1);}
  if(e.key==='Home'){e.preventDefault();show(0);}
  if(e.key==='End'){e.preventDefault();show(sections.length-1);}
});
document.getElementById('reading-toggle').addEventListener('click',e=>{
  const active=document.body.classList.toggle('reading');
  e.currentTarget.setAttribute('aria-pressed',String(active));
  e.currentTarget.textContent=active?'Slide view':'Reading view';
  reading.hidden=!active;
});
const fullscreen=document.getElementById('fullscreen');
if(!document.documentElement.requestFullscreen)fullscreen.hidden=true;
fullscreen.addEventListener('click',async()=>{
  try{
    if(document.fullscreenElement)await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
    resize();
  }catch{}
});
let start=null;
slidesHost.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'&&!e.target.closest('a'))start={x:e.clientX,y:e.clientY};});
slidesHost.addEventListener('pointerup',e=>{
  if(!start)return;
  const dx=e.clientX-start.x,dy=e.clientY-start.y;start=null;
  if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)show(current+(dx<0?1:-1));
});
show(hashIndex(),false);resize();
