/* Línea de tiempo provisional: el ajuste a acentos musicales pertenece a Etapa 3. */
(function(root){
 const M=root.Motion, clamp=x=>Math.max(0,Math.min(1,x));
 const ease=x=>{x=clamp(x);return x*x*(3-2*x);};
 const base=(x)=>({...M.pose('idle',0,1),x});
 const keys=[
  [0,base(-230),base(230)],
  [2.8,base(-76),base(76)],
  [3.4,{...base(-76),head:-.18},base(76)],
  [4.1,{...base(-76),head:-.12},{...base(76),head:.18}],
  [4.6,base(-76),base(76)]
 ];
 function sample(t){t=Math.max(0,t);let i=1;while(i<keys.length-1&&t>keys[i][0])i++;const a=keys[i-1],b=keys[i],u=ease((t-a[0])/(b[0]-a[0]));const poses=[M.blend(a[1],b[1],u),M.blend(a[2],b[2],u)];if(t<2.8){const weight=Math.sin(Math.PI*clamp(t/2.8));poses.forEach((p,i)=>{const w=M.pose('walk',t,i?1:-1);for(const k of ['la','ra','ll','lk','rl','rk','y'])p[k]+= (w[k]-base(0)[k])*weight;});}return {poses,scene:'El encuentro',flower:null};}
 root.Story={sample,duration:4.6,keys};
})(typeof window==='undefined'?globalThis:window);
