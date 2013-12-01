(function(){
	var storage = new TaskStorage();
	function addTask(){
		var taskName = $("#txtTask").val();
		var newTask = storage.addTask(taskName);
		addTaskToList(newTask);
	}
	function addTaskToList(task){
		$("<li>")
			.attr("task-id",task.id)
			.text(task.name)
			.hide()
			.appendTo("#ulTaskList")
			.fadeIn('slow');
		displayMessage("A new task is added");
	}
	$(function(){
		$("#btnAddTask").click(addTask);
		$("#btnRemoveCompleted").click(removeCompletedTasks);
		$("#ulTaskList").on('click','li',onTaskItemClick);
		loadAllTasksFromStorage();
	});

	function loadAllTasksFromStorage(){
		var allTasks = storage.getAllTasks();
		for(var i=0;i<allTasks.length;i++){
			addTaskToList(allTasks[i]);
		}
	}
	
	function onTaskItemClick(){
		$(this).toggleClass("completed");
	}
	function removeCompletedTasks(){
		$("#ulTaskList > li.completed").slideUp(function(){
			storage.removeTask($(this).attr("task-id"));
			$(this).remove();
		});
		displayMessage("Zero or more completed tasks are removed");
	}
	function displayMessage(msg){
		$("#divMessage").show().text(msg).delay(3000).fadeOut('slow');
	}
}());	
