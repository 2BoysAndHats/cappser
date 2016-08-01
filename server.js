var express = require('express')

var app = express()

var server = require('http').Server(app)
var io = require('socket.io')(server)

var utils = require("./utils")

app.use('/',express.static('viewer'))
app.use('/controller',express.static('controller'))
app.use("/apps",express.static("apps"))

io.on('connection',function (socket) {
    socket.on('loadapp',function  (data) {
        io.emit('rloadapp',data)
    });
    socket.on("appArray",function  () {
       socket.emit("rappArray",utils.loadApps())
    });
});

server.listen(8088)