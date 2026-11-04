const assert=require('node:assert/strict');
require('../motion.js');require('../story.js');require('../music.js');require('../choreography.js');
let prev;
for(let t=0;t<Choreography.duration;t+=1/120){const s=Choreography.sample(t);assert(s.poses.every(p=>Object.values(p).every(Number.isFinite)));if(s.linked){const a=Choreography.hand(s.poses[0],'r'),b=Choreography.hand(s.poses[1],'l');assert(Math.hypot(a[0]-b[0],a[1]-b[1])<1e-7,'Manos separadas');}if(prev){for(let i=0;i<2;i++)for(const k of Object.keys(s.poses[i]))assert(Math.abs(s.poses[i][k]-prev.poses[i][k])<(k==='x'||k==='y'?3:.15),`Salto ${t} ${k}`);}prev=s;}
for(const t of [...Music.narrativeTimes,11.784,12.783,13.293,13.781,14.78,15.279,17.763,18.262]){const a=Choreography.sample(t-1e-7),b=Choreography.sample(t+1e-7);assert(Math.hypot(...a.flower.map((v,i)=>v-b.flower[i]))<.01,`Flor ${t}`);}
assert.deepEqual(Choreography.sample(50),Choreography.sample(Choreography.duration));
const pose=Choreography.sample(14);Choreography.sample(17);assert.deepEqual(Choreography.sample(14),pose,'Búsqueda determinista');
console.log('OK: continuidad musical, manos unidas, giro, flor, búsqueda y final.');
