// TCP demo
const net = require("net")

const server = net.createServer(socket=>{
    socket.write("Hello")
    socket.on("data", data=>{
        console.log(data.toString())
    })
})


server.listen(8080);


// UDP Demo

const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.on("message", (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`)
})

socket.bind(8081);