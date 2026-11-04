"""Offline analysis; requires ffmpeg, numpy and scipy. Audio is never copied."""
import sys, subprocess, json
import numpy as np
from scipy.signal import stft, find_peaks
x=np.frombuffer(subprocess.check_output(['ffmpeg','-v','error','-i',sys.argv[1],'-f','f32le','-ac','1','-ar','22050','-']),dtype='<f4')
f,t,z=stft(x,22050,nperseg=1024,noverlap=768)
a=np.abs(z); flux=np.maximum(0,np.diff(np.log1p(a*100),axis=1)).mean(axis=0)
t=t[1:];dt=t[1]-t[0]; flux-=np.mean(flux)
corr=np.correlate(flux,flux,'full')[len(flux)-1:]
lo,hi=int(60/160/dt),int(60/65/dt)
peaks,_=find_peaks(corr[lo:hi]); ranked=sorted(peaks+lo,key=lambda k:corr[k],reverse=True)[:5]
onsets,_=find_peaks(flux,distance=int(.25/dt),prominence=np.std(flux)*.6)
period=ranked[0]*dt
# Fit a pulse grid to nearby detected attacks; phase is a choreographic choice.
phase=.836
for _ in range(3):
    times=t[onsets]; n=np.round((times-phase)/period); mask=np.abs(times-(phase+n*period))<.08
    period,phase=np.polyfit(n[mask],times[mask],1)
bands=[]
for start in range(0,22,2):
    mask=(np.arange(a.shape[1])*dt>=start)&(np.arange(a.shape[1])*dt<start+2)
    bands.append({'start':start,**{name:round(float(np.mean(a[band][:,mask]**2)),7) for name,band in [('bass',f<250),('mid',(f>=250)&(f<2000)),('high',f>=2000)]}})
print(json.dumps({'decoded_duration':len(x)/22050,'tempo_candidates_bpm':[round(60/(k*dt),2) for k in ranked],'fitted_bpm':round(60/period,3),'pulse_origin':round(phase,5),'period':round(period,6),'onsets':[round(float(t[i]),3) for i in onsets],'strongest_accents':[round(float(t[i]),3) for i in sorted(onsets,key=lambda i:flux[i],reverse=True)[:12]],'bands_by_2_seconds':bands},indent=2))
