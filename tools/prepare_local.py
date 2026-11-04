"""Build an ignored local preview containing the supplied audio; never publish it."""
from pathlib import Path
import shutil, sys, json, subprocess
root=Path(__file__).resolve().parents[1]
source=Path(sys.argv[1]).resolve()
if not source.is_file(): raise SystemExit('Audio file not found')
metadata=json.loads(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','json',str(source)]))
duration=float(metadata['format']['duration'])
if abs(duration-22.151837)>.3: raise SystemExit('Expected the 22.15-second reference fragment')
out=root/'.local-preview'
(out/'assets').mkdir(parents=True,exist_ok=True)
for file in [root/'index.html',*root.glob('*.js'),*root.glob('*.css')]: shutil.copy2(file,out/file.name)
shutil.copy2(source,out/'assets'/'reference.mp3')
config=(out/'config.js').read_text()
config=config.replace("audioUrl: ''", "audioUrl: 'assets/reference.mp3'")
(out/'config.js').write_text(config)
print('Local preview prepared:',out)
print('Audio duration:',duration,'seconds. Do not publish this folder.')
