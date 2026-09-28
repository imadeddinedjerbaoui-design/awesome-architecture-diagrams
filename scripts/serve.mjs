import {resolve,sep} from 'node:path';
const root=resolve(import.meta.dir,'../site');
Bun.serve({hostname:'127.0.0.1',port:4178,async fetch(req){
 const path=resolve(root,'.'+decodeURIComponent(new URL(req.url).pathname));
 if(path!==root&&!path.startsWith(root+sep))return new Response('Forbidden',{status:403});
 const file=Bun.file(path===root?resolve(root,'index.html'):path);
 return await file.exists()?new Response(file):new Response('Not found',{status:404});
}});
console.log('Preview http://127.0.0.1:4178');
