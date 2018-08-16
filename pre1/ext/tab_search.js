//elsl.ext.tab.search
TabSearch = function(apply) {
	let text = apply.replace("?", "");
	if (text == undefined) {
		let text = location.search.replace("?", "");
	}
	console.log(text);
	let form = [];
	let output = {};
	form = text.split("&");
	console.warn(form);
	let count = 0;
	while (count < form.length) {
		form[count] = form[count].split("=");
		while (form[count].length > 2) {
			form[count].pop();
		}
		console.log("[elsl.ext.tab.search] Assigned item " + form[count][0] + " with value " + decodeURI(form[count][1]) + " inside table.");
		count++;
	}
	console.warn(form);
	if (_ecma6_) {
		count = 0;
		while (count < form.length) {
			output[decodeURI(form[count][0])] = decodeURI(form[count][1]);
			count++;
		}
	} else {
		console.error("[elsl.ext.tab.search] Does not support ECMA6.");
		output = new Error();
		output.message = "[elsl.ext.tab.search] Unsupported browser.";
	}
	console.warn(output);
	return output;
};
