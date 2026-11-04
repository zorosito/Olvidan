const assert=require('node:assert/strict');
for(const f of ['motion','story','music','choreography','finale'])require('../'+f+'.js');
for(let t=0;t<=Choreography.duration;t+=.03){const a=Experience.sample(t),b=Choreography.sample(t);assert.deepEqual(a.poses,b.poses);assert.deepEqual(a.flower,b.flower);}
let prev=Experience.sample(Choreography.duration);
for(let t=Choreography.duration+.001;t<=22.1;t+=.001){const a=Experience.sample(t);for(let i=0;i<2;i++)for(const k in a.poses[i]){assert(Number.isFinite(a.poses[i][k]));assert(Math.abs(a.poses[i][k]-prev.poses[i][k])<.1,`Salto ${t} ${k}`);}assert(Math.hypot(...a.flower.map((v,i)=>v-prev.flower[i]))<.2);prev=a;}
assert.deepEqual(Experience.sample(22.1),Experience.sample(40));
assert.deepEqual(Experience.sample(21.745).poses,Experience.sample(22.1).poses);
assert.equal(Experience.sample(22.1).dedication,1);
console.log('OK: escenas anteriores intactas, transición al abrazo, flor y final estable.');
