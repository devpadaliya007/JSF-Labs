const express=require('express');
const app=express();
let students=[
    {rollNo:1,name:"Taksh",age:18},
    {rollNo:2,name:"Deep",age:18},
    {rollNo:3,name:"Naimish",age:18},
]
app.delete("/student/:rollNo",(req,res)=>{
    let rollNo=parseInt(req.params.rollNo);
    let index=students.findIndex((std)=>std.rollNo==rollNo);
    if(index==-1){
        res.status(404).send("Roll No not found")
    }
    let deltedStudent=students.splice(index,1);
    res.status(200).json(deltedStudent[0]);
})
app.listen(3000,()=>console.log("Express server running on port 3000")) 