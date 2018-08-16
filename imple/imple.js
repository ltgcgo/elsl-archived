function useCanvas() {
	let canvas = document.getElementsByTagName("canvas")[0] || document.createElement("canvas");
	canvas.style = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; box-shadow: inset 0px 0px 4px 2px #111";
	canvas.width = window.outerWidth;
	canvas.height = window.outerHeight;
	document.body.appendChild(canvas);
	return canvas.getContext("2d");
}
