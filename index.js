const fs =require('fs');
const express=require('express');
const app=express();
app.use(express.json());

// app.get('/',(req,res)=>{
//     res.status(200).json({message:'hello from the server side!',
// app:'Nirajan'});

// });
// app.post('/',(req,res)=>{
//     res.send('you can post this endpoint');
// });
const tours=JSON.parse(
    fs.readFileSync('./dev-data/data/tours-simple.json')
    );
app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({
        status:'success',
        results:tours.length,
        data:{
            tours

        }
    });

});
app.post('/api/v1/tours',(req,res)=>{
// console.log(req.body);
const newID=tours[tours.length-1].id+1;
const newTour=Object.assign({id:newID},req.body);
tours.push(newTour);
fs.writeFile('./dev-data/data/tours-simple.json',JSON.stringify(tours),err=>{
    res.status(201).json({
        status:'success',
        data:{
            tour:newTour
        }
    });

});
// res.send('Done');
});
const port=3000;
app.listen(port,()=>{ 
    console.log(`server is running on port ${port}`);
});