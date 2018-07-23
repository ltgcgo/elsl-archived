function DefinedObject(description) {
	this.id = Math.floor(Math.random() * 65536) + 1;
	this.description = description;
}

function _do(desc) {
	return new PreDefinedValue(desc);
}
