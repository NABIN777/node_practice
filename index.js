const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.status(200).json({message:'hello from the server side!',
app:'Nirajan'});

});
app.post('/',(req,res)=>{
    res.send('you can post this endpoint');
});

const port=3000;
app.listen(port,()=>{ 
    console.log(`server is running on port ${port}`);
});