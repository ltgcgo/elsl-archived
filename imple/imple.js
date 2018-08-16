function useCanvas() {
	let canvas = docudocument.getElementsByTagName("canvas")[0] || document.createElement("canvas");
	canvas.style = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; box-shadow: 0 0 1px 1px #ddd;";
	document.body.appendChild(canvas);
	return canvas.getContext("2d");
}
