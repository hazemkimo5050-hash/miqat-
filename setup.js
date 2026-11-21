const fs=require("fs"),cp=require("child_process");
try{cp.execSync("unzip -oq content.zip -d www",{stdio:"inherit"})}catch(e){console.log("content.zip: unzip failed or file missing")}
fs.mkdirSync("www/lib",{recursive:true});
for(const f of ["pdf.min.js","pdf.worker.min.js"]){let ok=false;
  for(const d of ["legacy/build/","build/"]){try{fs.copyFileSync("node_modules/pdfjs-dist/"+d+f,"www/lib/"+f);ok=true;break}catch(e){}}
  if(!ok)console.log("pdfjs file missing: "+f)}
