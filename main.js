function _import(osrc, mime){
	let src = osrc;
	let loader = document.createElement("script");
	if (!(mime == undefined || mime == null)) {
		if (mime.__proto__.constructor == String) {
			loader.type = mime;
		} else {
			loader.type = "text/javascript";
		}
	}
	switch (src) {
		case ":jquery" :
			loader.src = "https://elsl.mwashcdn.ml/predef/jquery.js";
			break;
		case ":bootstrap" :
			loader.src = "https://elsl.mwashcdn.ml/predef/bootstrap.js";
			break;
		default :
			loader.src = src;
	}
	document.head.appendChild(loader);
}

_import("https://elsl.mwashcdn.ml/pre1/main.js");
