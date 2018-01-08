
function addEvent(obj, ev, fn) {
	if (document.addEventListener) {
		obj.addEventListener(ev, fn, false);
	} else {
		obj.attachEvent("on" + ev, fn);
	}
}
function render(code) {
	var codeElem = document.createElement('div');
	codeElem.setAttribute('class', 'code');
	codeElem.innerHTML = code;
	wrap.innerHTML = null;
	wrap.appendChild(codeElem);
}
var wrap = null;

window.onload = function () {
	wrap = document.getElementById('wrap');
	addEvent(document, 'keydown', function(evnet) {
		console.log(event)
		render(event.keyCode);
	})
}