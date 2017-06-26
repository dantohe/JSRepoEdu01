var project = function(){
	this.projectName='defaultProjectName';
}

project.prototype.get() = function(){
	return this.projectName;
}

module.exports = project();