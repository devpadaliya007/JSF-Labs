const fs= require("fs");
fs.writeFile("file1.txt","Hii",(err)=>{
    if(err){
        console.log("Error :",err);
    }
    else{
        console.log("File Written Successfully");
    }
});