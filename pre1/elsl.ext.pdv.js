function PreDefinedValue(description) {
	this.id = Math.floor(Math.random() * 65536) + 1;
	this.description = description;
}

function _pdv(desc) {
	return new PreDefinedValue(desc);
}
