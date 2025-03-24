import http from "http";
  


const server=http.createServer((req,res) =>{
    res.end("Hello. This is your server")
});


server.listen(8000,()=>{
    console.log('listening is port 8000');
    
});