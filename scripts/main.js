var pageCount = 10;

function init() {
	document.getElementById("logo").src = "images/pages/" + Math.floor(Math.random() * (pageCount - 1) + 1) + ".png";
}
