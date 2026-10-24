const fs= require("fs");
fs.readFile("file.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error :",err);
    }
    else{
        console.log("Data :",data);
    }
});
fs.appendFile("file.txt"," World",(err)=>{
    if(err){
        console.log("Error :",err);
    }
    else{
        console.log("Data Appended Successfully");
    }
});