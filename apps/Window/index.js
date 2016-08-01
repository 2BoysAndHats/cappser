var imgX;
var imgY;
var orgX;
var orgY;
var docW;
var docH;
var nw;
var nh;

var img;
var ctx;
var c;

//Init headtracking

 var videoInput = document.getElementById('inputVideo');
  var canvasInput = document.getElementById('inputCanvas');

  var htracker = new headtrackr.Tracker({ui:false});
  htracker.init(videoInput, canvasInput);
  htracker.start();


document.addEventListener("headtrackingEvent",function  (e) {
	ctx.clearRect(0, 0, c.width, c.height);

	e.x /= (2.54 / 96)
	e.y /= (2.54 / 96)

	var offsetX = (e.x - (docW / 2));
	var offsetY = (e.y - (docH / 2));

	imgX = (orgX - offsetX)
	imgY = (orgY  - offsetY)

	console.log(docW + ":" + imgY)


	/*//Do zooming
	//h = a/d

	e.z /= (2.54 / 96)

	newHeight = nh / e.z
	newWidth = nw / e.zS

	img.height = newHeigSSht
	img.width = newWidth*/

	ctx.drawImage(img,imgX,imgY)


});


$(document).ready(function  () {
	console.log(123)

	img = new Image();

	img.src = "img.jpg"

	img.width = $(document).width() * 3
	img.height = $(document).height() * 3

	nw = img.width
	nh = img.height

	imgX = -($(document).width())
	imgY = -($(document).height())

	orgX = imgX;
	orgY = imgY;

	docW = $(document).width()
	docH = $(document).height()

	c = document.getElementById("mainCanvas")
	ctx = c.getContext("2d")

	ctx.drawImage(img,imgX,imgY)
});