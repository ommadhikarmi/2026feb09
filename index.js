import express from 'express'
const app = express();

import path from 'path';
import { VIEWS  } from './import/path.js';

app.get('/',(req,resp)=>{
    resp.sendFile(path.join(VIEWS,'home.html'))
});

app.get('/login',(req,resp)=>{
   
    resp.sendFile(path.join(VIEWS,'login.html'))
});

app.get('/about',(req,resp)=>{
  
    resp.sendFile(path.join(VIEWS,'about.html'))
});

app.use((req,resp)=>{
    
    resp.status(404).sendFile(path.join(VIEWS,'404.html'))
});

app.listen(1000, ()=>{
console.log('running server port is 1000')
});

