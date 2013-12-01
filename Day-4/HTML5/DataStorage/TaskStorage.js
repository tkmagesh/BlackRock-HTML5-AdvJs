function TaskStorage(){
	this.storage = window.localStorage;
}
TaskStorage.prototype.addTask = function(taskName){
	var newId = new Date().getTime().toString();
	this.storage.setItem(newId,taskName);
	return {id : newId, name : taskName};
};
TaskStorage.prototype.removeTask = function(taskId){
	this.storage.removeItem(taskId);
};
TaskStorage.prototype.getAllTasks = function(){
	var allTasks = [];
	for(var id in this.storage)
		allTasks.push({id : id, name : this.storage.getItem(id)});
	return allTasks;
};