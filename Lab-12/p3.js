const fs= require("fs");
fs.unlink("demo.txt",(err)=>{
    if(err){
        console.log("Error :",err);
    }
    else{
        console.log("File Deleted Successfully.");
    }
});