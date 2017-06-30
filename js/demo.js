var oBtn = document.getElementById("btn");
var timer = null;
var isTop = true;
var clientHeight = document.documentElement.clientHeight;

// var bodyHeight = document.body.clientHeight;
// alert(clientHeight);
// alert(bodyHeight);
window.onscroll = function() {
	var osTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (!isTop) {
		clearInterval(timer);
	}
	isTop = false;
	// document.write('osTop');
	if (osTop >= clientHeight) {
		oBtn.style.display = 'block';
	} else {
		oBtn.style.display = 'none';
	}
};



oBtn.onclick = function() {
	timer = setInterval(function() {

		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		var speed = Math.ceil(osTop / 10);
		isTop = true;
		document.documentElement.scrollTop = document.body.scrollTop = osTop - speed;
		if (osTop == 0) {
			clearInterval(timer);
		}

	}, 30);



};