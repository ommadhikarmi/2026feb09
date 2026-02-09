import express from 'express'
const app = express();

import path from 'path';

app.get('/',(req,resp)=>{
    let absolute_path =path.resolve('view/home.html')
    resp.sendFile(absolute_path)
});

app.get('/login',(req,resp)=>{
    let absolute_path =path.resolve('view/login.html')
    resp.sendFile(absolute_path)
});

app.get('/about',(req,resp)=>{
    let absolute_path =path.resolve('view/about.html')
    resp.sendFile(absolute_path)
});

app.listen(1000, ()=>{
console.log('running server port is 1000')
});

