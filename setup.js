const fs=require("fs"),cp=require("child_process");
for(const f of fs.readdirSync(".").filter(f=>/^content.*\.zip$/.test(f)))
  try{cp.execSync('unzip -oq "'+f+'" -d www',{stdio:"inherit"})}catch(e){console.log("unzip failed: "+f)}
