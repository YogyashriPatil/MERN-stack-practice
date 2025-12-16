import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port: 8080})

// event handler
wss.on("connection", function(socket){
    console.log("user connected")

    setInterval(() => {
        socket.send("hello"+Math.random());
    },500)
    

})