/* Línea de tiempo provisional: el ajuste a acentos musicales pertenece a Etapa 3. */
(function(root){
 const M=root.Motion, clamp=x=>Math.max(0,Math.min(1,x));
 const ease=x=>{x=clamp(x);return x*x*(3-2*x);};
 const base=(x)=>({...M.pose('idle',0,1),x});
 function reach(p,arm,x,y){
  const dx=x,dy=y+57,d=Math.min(62.999,Math.max(3.001,Math.hypot(dx,dy)));
  const bend=(arm==='l'?-1:1)*Math.acos((d*d-33*33-30*30)/(2*33*30));
  p[arm+'a']=Math.atan2(dx,dy)-Math.atan2(30*Math.sin(bend),33+30*Math.cos(bend));p[arm+'f']=bend;return p;
 }
 function hand(p,arm){const j=M.joint(0,-57,p[arm+'a'],33),e=M.joint(...j,p[arm+'a']+p[arm+'f'],30);return [200+p.x+e[0],269+p.y+e[1]];}
 const crouch=reach({...base(-76),y:30,ll:-.95,lk:1.65,rl:.95,rk:-1.65,head:-.18},'r',21,-4);
 const offer=reach(base(-48),'r',48,-45),receive=reach(base(48),'l',-48,-45);
 const keys=[
  [0,base(-230),base(230)],
  [2.8,base(-76),base(76)],
  [3.4,{...base(-76),head:-.18},base(76)],
  [4.1,{...base(-76),head:-.12},{...base(76),head:.18}],
  [4.6,{...base(-76),head:-.25},base(76)],
  [5.4,crouch,{...base(76),head:.12}],
  [6.1,reach(base(-76),'r',21,-45),base(76)],
  [7.1,offer,receive],
  [7.5,offer,receive],
  [8.2,base(-48),reach({...base(48),head:.18},'l',-23,-58)],
  [8.7,base(-48),reach({...base(48),head:.12},'l',-23,-58)]
 ];
 function sample(t){t=Math.max(0,t);let i=1;while(i<keys.length-1&&t>keys[i][0])i++;const a=keys[i-1],b=keys[i],u=ease((t-a[0])/(b[0]-a[0]));const poses=[M.blend(a[1],b[1],u),M.blend(a[2],b[2],u)];if(t<2.8){const weight=Math.sin(Math.PI*clamp(t/2.8));poses.forEach((p,i)=>{const w=M.pose('walk',t,i?1:-1);for(const k of ['la','ra','ll','lk','rl','rk','y'])p[k]+= (w[k]-base(0)[k])*weight;});}const flower=t<5.4?[145,295]:hand(poses[t<7.5?0:1],t<7.5?'r':'l');return {poses,scene:t<4.6?'El encuentro':'Una flor para ti',flower};}
 root.Story={sample,duration:8.7,keys,hand,reach,base};
})(typeof window==='undefined'?globalThis:window);
