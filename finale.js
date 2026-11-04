/* Etapa 4: conserva intacta la coreografía anterior. */
(function(root){
 const M=root.Motion,S=root.Story,C=root.Choreography;
 const start=C.duration,end=22.1;
 const smooth=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);};
 function sample(t){t=Math.max(0,Math.min(end,t));
  if(t<=start)return {...C.sample(t),night:0,heart:0,dedication:0};
  const enter=smooth((t-start)/.998),stop=1-smooth((t-20.759)/.65);
  const sway=Math.sin(Math.PI*root.Music.beat(t))*.025*stop;
  const initial=C.sample(start).poses;
  const poses=[-1,1].map((side,i)=>{
   let p={...S.base(side*34),y:i?4:0,body:sway,head:i?-.16:0};
   p=S.reach(p,i?'l':'r',-side*47,-46);
   p=S.reach(p,i?'r':'l',-side*38,-27);
   return M.blend(initial[i],p,enter);
  });
  return {poses,flower:C.hand(poses[1],'l'),linked:false,
   scene:t<20.759?'Bailando abrazados':'Aquí, contigo',
   night:smooth((t-start)/1.997),heart:smooth((t-20.759)/.5),dedication:smooth((t-21.258)/.487)};
 }
 root.Experience={sample,duration:end};
})(typeof window==='undefined'?globalThis:window);
