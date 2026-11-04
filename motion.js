/* Ángulos interpolables; cada segmento conserva su longitud. */
(function(root){
 const lerp=(a,b,t)=>a+(b-a)*t;
 function pose(mode,t,side){
  const s=Math.sin(t*3.8), p={x:side*77,y:0,head:0,body:0,la:-.38,lf:-.12,ra:.38,rf:.12,ll:-.16,lk:0,rl:.16,rk:0};
  if(mode==='walk'){p.x+=Math.sin(t*.65)*17;p.y=-Math.abs(s)*2;p.ll=s*.36;p.rl=-s*.36;p.lk=Math.max(0,-s)*.48;p.rk=Math.max(0,s)*.48;p.la=-.38-s*.25;p.ra=.38+s*.25;}
  if(mode==='wave'){p.ra=1.9;p.rf=.65+Math.sin(t*4)*.22;p.head=-.09;p.y=Math.sin(t*2)*1.2;}
  if(mode==='tilt'){p.head=-side*(.13+.09*Math.sin(t*1.8));p.body=-side*.035;}
  if(mode==='sway'){p.body=Math.sin(t*2)*.07;p.head=-p.body*.5;p.la=-.65;p.ra=.65;p.lf=-.25;p.rf=.25;p.y=Math.cos(t*4);}
  return p;
 }
 function blend(a,b,t){return Object.fromEntries(Object.keys(a).map(k=>[k,lerp(a[k],b[k],t)]));}
 function joint(x,y,angle,length){return [x+Math.sin(angle)*length,y+Math.cos(angle)*length];}
 root.Motion={pose,blend,joint};
})(typeof window==='undefined'?globalThis:window);
