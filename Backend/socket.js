const socketIo=require('socket.io');
const userModel=require('./models/user.model');
const captainModel=require('./models/captin.model');

let io;

function initalizeSocket(server){
    io = socketIo(server,{
        cors:{
            origin: "*",
            methods: ["GET", "POST"],
        }
    });

    io.on('connection',(socket)=>{
        console.log(`a new client connected:${socket.id}`);
        socket.on('join',async(data)=>{
            const {userId,userType}=data;

            if(userType==="user"){
                await userModel.findByIdAndUpdate(
                     userId,{
                        socketId:socket.id
                    });
                
            }else{
                await captainModel.findByIdAndUpdate(
                    userId,{
                        socketId:socket.id
                    }
                )
            }

        })

        socket.on('update-location-captain', async (data) => {
            const { userId, location } = data;

            if (!location || !location.ltd || !location.lng) {
                return socket.emit('error', { message: 'Invalid location data' });
            }

            await captainModel.findByIdAndUpdate(userId, {
                location: {
                    ltd: location.ltd,
                    lng: location.lng
                }
            });
        });
        socket.on('disconnect',()=>{
            console.log(`a client disconnected:${socket.id}`);
        });

    });
}

const sendMessageToSocketId = (socketId, messageObject) => {

    console.log(messageObject);
    
        if (io) {
            console.log(socketId);
            io.to(socketId).emit(messageObject.event, messageObject.data);
            console.log("data send");
        } else {
            console.log('Socket.io not initialized.');
        }
    }

module.exports={initalizeSocket,sendMessageToSocketId}