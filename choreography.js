/* Poses puras: dependen solo del reloj del audio, nunca de frames acumulados. */
(function(root){
 const M=root.Motion,S=root.Story,U=root.Music;
 const smooth=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);};
 function hand(p,arm){const h=S.hand(p,arm),x=h[0]-200-p.x,y=h[1]-269-p.y,c=Math.cos(p.body),s=Math.sin(p.body);return [200+p.x+c*x-s*y,269+p.y+s*x+c*y];}
 function reachWorld(p,arm,target){const x=target[0]-200-p.x,y=target[1]-269-p.y,c=Math.cos(p.body),s=Math.sin(p.body);return S.reach(p,arm,c*x+s*y,-s*x+c*y);}
 function sample(t){
  t=Math.max(0,Math.min(U.danceEnd,t));
  if(t<=U.danceStart){const old=U.narrativeTime(t),state=S.sample(old);
   // Caminar con alternancia de piernas cada pulso real.
   if(t<2.826){const w=Math.sin(Math.PI*t/2.826),phase=Math.PI*U.beat(t);state.poses.forEach(p=>{p.ll=-.16+Math.sin(phase)*.32*w;p.rl=.16-Math.sin(phase)*.32*w;p.lk=Math.max(0,-Math.sin(phase))*.35*w;p.rk=Math.max(0,Math.sin(phase))*.35*w;});}
   return {...state,scene:t===U.danceStart?'Nuestros primeros pasos':state.scene,linked:false};
  }
  const beat=U.beat(t),wave=Math.sin(Math.PI*beat),bounce=1-Math.cos(2*Math.PI*beat);
  const entry=smooth((t-U.danceStart)/.8),join=smooth((t-11.784)/.999);
  const lift=smooth((t-13.293)/.488)*(1-smooth((t-14.78)/.5));
  const pivot=smooth((t-15.279)/.499)*(1-smooth((t-17.763)/.499));
  const settle=1-smooth((t-18.262)/.5),shift=9*wave*settle;
  const poses=[-1,1].map((side,i)=>{
   const p=S.base(side*(50-7*join)+shift*join+side*4*wave*(1-join));
   p.y=-bounce*1.5*settle;p.head=-side*.08+wave*.04*settle;
   p.body=side*.1*Math.sin(Math.PI*(t-15.279)/1.242)*pivot;
   p.ll=-.16+wave*.18*settle;p.rl=.16-wave*.18*settle;
   p.lk=Math.max(0,-wave)*.16*settle;p.rk=Math.max(0,wave)*.16*settle;
   p.la=-.5-wave*.12;p.ra=.5+wave*.12;
   if(i===1)S.reach(p,'l',-25,-40);return p;
  });
  const target=[200+shift,230-39*lift];
  poses.forEach((p,i)=>{const linked=reachWorld({...p},i?'l':'r',target);poses[i]=M.blend(p,linked,join);});
  const initial=S.sample(12).poses;
  for(let i=0;i<2;i++)poses[i]=M.blend(initial[i],poses[i],entry);
  return {poses,flower:hand(poses[1],'l'),linked:join===1&&entry===1,scene:t<11.784?'Nuestros primeros pasos':t<13.293?'De la mano':t<15.279?'Una vuelta pequeña':t<U.danceEnd?'A tu compás':'Continuará… abrazados'};
 }
 root.Choreography={sample,duration:U.danceEnd,hand};
})(typeof window==='undefined'?globalThis:window);
