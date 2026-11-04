const $=id=>document.getElementById(id),audio=$('music'),M=window.Motion;
let mode='story',running=false,started=false,time=0,last=0,transition=1,from=null,poses=Experience.sample(0).poses,objectUrl,playRequest=0,pending=false;
if(LOVE_CONFIG.audioUrl)audio.src=LOVE_CONFIG.audioUrl;
const ns='http://www.w3.org/2000/svg';
function node(tag,attrs,parent){const n=document.createElementNS(ns,tag);for(const k in attrs)n.setAttribute(k,attrs[k]);parent.appendChild(n);return n;}
function character(id){const g=$(id),body=node('g',{'stroke':'#403333','stroke-width':6,'stroke-linecap':'round','stroke-linejoin':'round',fill:'none'},g);const limbs=Array.from({length:5},()=>node('path',{},body));const head=node('g',{stroke:'#403333'},body);node('circle',{cx:0,cy:-103,r:30,fill:'#fffaf4','stroke-width':5},head);[-10,10].forEach(x=>{node('ellipse',{cx:x,cy:-100,rx:3,ry:4,fill:'#403333',stroke:'none'},head);node('ellipse',{cx:x*1.5,cy:-91,rx:5,ry:3,fill:'#e7a5ad',stroke:'none'},head)});node('path',{d:'M-8 -88 Q0 -81 8 -88','stroke-width':3},head);return {g,body,head,limbs};}
const chars=[character('a'),character('b')];
// Fixed positions: pausing or seeking never regenerates the sky.
for(let i=0;i<24;i++)node('circle',{cx:22+(i*73)%356,cy:22+(i*47)%285,r:i%4===0?1.7:1,opacity:.5+(i%3)*.2},$('stars'));
$('dedication').textContent=LOVE_CONFIG.dedication;
function drawEnding(state){
 const s=state||{night:0,heart:0,dedication:0};
 $('night').setAttribute('opacity',s.night);
 $('heart').setAttribute('opacity',s.heart);
 $('dedication').style.opacity=s.dedication;
 $('dedication').setAttribute('aria-hidden',String(s.dedication===0));
 chars.forEach(c=>c.body.setAttribute('stroke',`rgb(${Math.round(64+175*s.night)},${Math.round(51+178*s.night)},${Math.round(51+166*s.night)})`));
}

const flower=node('g',{'aria-label':'Una pequeña flor'},$('scene'));
node('path',{d:'M0 0 L0 -20 M0 -5 Q-10 -14 -8 -8',stroke:'#7c956d','stroke-width':2,fill:'none'},flower);
for(let i=0;i<5;i++){const a=i*Math.PI*2/5;node('circle',{cx:Math.cos(a)*5,cy:-22+Math.sin(a)*5,r:4,fill:'#ca7388'},flower);}
node('circle',{cx:0,cy:-22,r:3,fill:'#efc575'},flower);
function drawFlower(state){flower.style.display=mode==='story'?'':'none';if(mode==='story'){const f=state.flower;flower.setAttribute('transform',`translate(${f[0]} ${f[1]})`);}}

function draw(c,p){c.g.setAttribute('transform',`translate(${200+p.x} ${269+p.y})`);c.body.setAttribute('transform',`rotate(${p.body*180/Math.PI} 0 0)`);c.head.setAttribute('transform',`rotate(${p.head*180/Math.PI} 0 -73)`);c.limbs[0].setAttribute('d','M0 -72 L0 0');[[0,-57,p.la,p.lf,33,30],[0,-57,p.ra,p.rf,33,30],[0,0,p.ll,p.lk,32,30],[0,0,p.rl,p.rk,32,30]].forEach((v,i)=>{const [x,y,a,b,l1,l2]=v,j=M.joint(x,y,a,l1),e=M.joint(...j,a+b,l2);c.limbs[i+1].setAttribute('d',`M${x} ${y} L${j} L${e}`)});}

function render(state){
 chars.forEach((c,i)=>draw(c,poses[i]));drawFlower(state);drawEnding(state);
 if(state&&$('status').textContent!==state.scene)$('status').textContent=state.scene;
}
function refresh(){const state=mode==='story'?Experience.sample(time):null;if(state)poses=state.poses;render(state);}
function schedule(){if(!pending){pending=true;requestAnimationFrame(now=>{pending=false;frame(now);});}}
function playbackEnd(){return audio.src&&Number.isFinite(audio.duration)&&Math.abs(audio.duration-LOVE_CONFIG.referenceDuration)<=.3?audio.duration:Experience.duration;}
function frame(now){
 if(!running)return;
 const dt=last===null?0:Math.min((now-last)/1000,.05);last=now;
 time=audio.src?audio.currentTime:time+dt;
 const state=mode==='story'?Experience.sample(time):null;
 if(state)poses=state.poses;
 else{transition=Math.min(1,transition+dt/.45);const ease=transition*transition*(3-2*transition);poses=chars.map((c,i)=>{const p=M.pose(mode,time,i?1:-1);return from?M.blend(from[i],p,ease):p;});}
 render(state);
 if(mode==='story'&&time>=playbackEnd())pause();
 if(running)schedule();
}
async function play(){
 const request=++playRequest;
 try{
  if((mode==='story'&&time>=Experience.duration)||audio.ended){time=0;if(audio.src)audio.currentTime=0;}
  if(audio.src)await audio.play();
  if(request!==playRequest)return;
  running=true;started=true;last=null;$('intro').hidden=true;$('pause').disabled=false;$('pause').textContent='Pausar';refresh();schedule();
 }catch(e){if(request===playRequest){running=false;$('status').textContent='No se pudo reproducir. Elige un archivo de audio compatible.';}}
}
function pause(){++playRequest;running=false;audio.pause();$('pause').textContent=(mode==='story'&&time>=Experience.duration)||audio.ended?'Volver a reproducir':'Reanudar';}
$('start').onclick=play;$('pause').onclick=()=>running?pause():play();
$('reset').onclick=()=>{pause();time=0;if(audio.src)audio.currentTime=0;poses=[M.pose(mode,0,-1),M.pose(mode,0,1)];from=null;transition=1;started=false;$('intro').hidden=false;$('pause').disabled=true;refresh();};
document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{
 from=poses.map(p=>({...p}));transition=0;mode=b.dataset.mode;
 if(mode==='story'){time=0;if(audio.src)audio.currentTime=0;}
 else if(!running){poses=[M.pose(mode,time,-1),M.pose(mode,time,1)];}
 $('status').textContent='Estudio de movimiento';
 document.querySelectorAll('[data-mode]').forEach(n=>n.setAttribute('aria-pressed',String(n===b)));refresh();
});
$('file').onchange=()=>{const file=$('file').files[0];if(!file)return;pause();if(objectUrl)URL.revokeObjectURL(objectUrl);objectUrl=URL.createObjectURL(file);audio.src=objectUrl;time=0;poses=[M.pose(mode,0,-1),M.pose(mode,0,1)];refresh();$('audio-status').textContent='Audio local listo. Pulsa Comenzar o Reanudar.';};
audio.onended=()=>{time=Math.min(audio.currentTime,Experience.duration);refresh();pause();};
audio.onpause=()=>{if(running)pause();};
audio.onseeked=()=>{if(audio.src){time=audio.currentTime;refresh();}};
audio.onerror=()=>{pause();$('audio-status').textContent='No se pudo leer el audio. Elige otro archivo compatible.';};
document.addEventListener('visibilitychange',()=>{if(document.hidden){pause();}});
audio.onloadedmetadata=()=>{$('audio-status').textContent=Number.isFinite(audio.duration)&&Math.abs(audio.duration-LOVE_CONFIG.referenceDuration)>.3?'Esta coreografía usa el fragmento de 22,15 s; otro audio puede no coincidir.':'Audio listo para reproducir.';};
refresh();
