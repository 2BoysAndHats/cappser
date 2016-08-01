var socket = io()

socket.on('rloadapp',function  (url) {
    window.location = (window.location.origin + url)
});