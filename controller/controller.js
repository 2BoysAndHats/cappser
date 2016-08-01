socket = io()

var source   = $("#table-template").html();
var template = Handlebars.compile(source);


socket.on("rappArray",function  (apps) {
   var table = template(apps);
   $("#table-div").html(table)
});

$(document).ready(function  () {
    socket.emit("appArray");
});

function rowClick(ele){
    socket.emit("loadapp","/apps/" + $(ele).text().trim())
}