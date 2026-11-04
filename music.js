/* Análisis offline de la pista adjunta. No contiene audio. */
(function(root){
 const period=.497988,origin=.83662;
 const narrativeTimes=[0,2.826,3.324,3.822,4.32,5.074,6.049,6.815,7.314,7.814,8.057,8.313,8.8,9.3,9.799];
 function narrativeTime(t){const k=root.Story.keys;let i=1;while(i<narrativeTimes.length-1&&t>narrativeTimes[i])i++;const u=Math.max(0,Math.min(1,(t-narrativeTimes[i-1])/(narrativeTimes[i]-narrativeTimes[i-1])));return k[i-1][0]+u*(k[i][0]-k[i-1][0]);}
 root.Music={period,origin,narrativeTimes,narrativeTime,beat:t=>(t-origin)/period,danceStart:9.799,danceEnd:18.762};
})(typeof window==='undefined'?globalThis:window);
