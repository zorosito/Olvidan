const assert=require('node:assert/strict');
require('../motion.js');require('../story.js');
for(let t=0;t<=Story.duration;t+=1/60){const s=Story.sample(t);assert(s.poses.every(p=>Object.values(p).every(Number.isFinite)));assert(s.flower.every(Number.isFinite));for(const p of s.poses)for(const arm of ['l','r']){const j=Motion.joint(0,-57,p[arm+'a'],33),e=Motion.joint(...j,p[arm+'a']+p[arm+'f'],30);assert(Math.abs(Math.hypot(j[0],j[1]+57)-33)<1e-8);assert(Math.abs(Math.hypot(e[0]-j[0],e[1]-j[1])-30)<1e-8);}}
for(const [t] of Story.keys.slice(1)){const a=Story.sample(t-1e-6),b=Story.sample(t);for(let i=0;i<2;i++)for(const k of Object.keys(a.poses[i]))assert(Math.abs(a.poses[i][k]-b.poses[i][k])<.001,`${t}: ${k}`);assert(Math.hypot(...a.flower.map((v,i)=>v-b.flower[i]))<.001);}
assert.deepEqual(Story.sample(5.4).flower,[145,295]);assert.deepEqual(Story.sample(7.5).flower,[200,224]);
assert.deepEqual(Story.sample(10).poses,Story.sample(11.2).poses);
assert.deepEqual(Story.sample(12),Story.sample(50));
console.log('OK: poses, longitudes, continuidad, recogida, entrega, abrazo y final deterministas.');
