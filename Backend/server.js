const http=require('http');
const app=require('./app');
const {initalizeSocket}=require('./socket');
const port=process.env.PORT

const server=http.createServer(app);
initalizeSocket(server);

server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});



