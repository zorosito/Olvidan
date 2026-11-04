const {execFileSync}=require('node:child_process');
const {readdirSync,readFileSync,existsSync}=require('node:fs');
const path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
for(const file of readdirSync(root).filter(f=>f.endsWith('.js')))execFileSync(process.execPath,['--check',path.join(root,file)],{stdio:'inherit'});
for(const file of readdirSync(__dirname).filter(f=>f.endsWith('.test.cjs')))execFileSync(process.execPath,[path.join(__dirname,file)],{stdio:'inherit'});
const html=readFileSync(path.join(root,'index.html'),'utf8');
for(const [,url] of html.matchAll(/(?:src|href)="([^"]+)"/g)){assert(!/^https?:|^\//.test(url),'Recursos locales relativos');assert(existsSync(path.join(root,url)),`Falta ${url}`);}
for(const id of ['scene','a','b','stars','night','heart','dedication','music','intro','start','pause','reset','file','status','audio-status'])assert.equal([...html.matchAll(new RegExp(`id="${id}"`,'g'))].length,1,`ID ${id}`);
console.log('OK: recursos relativos, identificadores de interfaz y sintaxis.');
