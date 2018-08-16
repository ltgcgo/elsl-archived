function useCanvas() {
	let canvas = document.getElementsByTagName("canvas")[0] || document.createElement("canvas");
	canvas.style = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; box-shadow: inset 0px 0px 4px 2px #111";
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.appendChild(canvas);
	let output = {};
	output.pic = canvas.getContext("2d");
	output.ele = canvas;
	return output;
}
