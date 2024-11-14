function addtask() {
		let userinput = document.getElementById("userinput");
		let tasktext = userinput.value;
		
		let newtask = document.createElement('li');
		newtask.textContent = tasktext;
		
		let complete_button = document.createElement('button');
		complete_button.textContent = "Complete";
		complete_button.addEventListener("click", function() {
			newtask.classList.toggle('completed');
		});
		
		let remove_button = document.createElement('button');
		remove_button.textContent = "Remove";
		remove_button.addEventListener("click", function() {
			newtask.remove();
		});
		
		newtask.appendChild(complete_button);
		newtask.appendChild(remove_button);
		
		document.getElementById('todolist').appendChild(newtask);
		userinput.value = "";
	}
	

document.querySelector("#addtask").addEventListener("click", addtask);
document.querySelector("#userinput").addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		addtask();
	}
});

function search_tasks() {
	let searchInput = document.getElementById("search-user-input");
	let searchtext = searchInput.value.toLowerCase(); 
	let tasks = document.querySelectorAll("#todolist li");

	tasks.forEach(task => {
		let taskText = task.textContent.toLowerCase();
		if (taskText.includes(searchtext)) { 
			task.classList.remove("hidden");
		} else {
			task.classList.add("hidden");
		}
	});

	searchInput.value = "";
}


document.querySelector("#search-button").addEventListener("click", search_tasks);
document.querySelector("#search-user-input").addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		search_tasks();
	}
});

function show_all_tasks() { 
	let tasks = document.querySelectorAll("#todolist li"); 
	tasks.forEach(task => { task.classList.remove("hidden");
}); 

} 

document.querySelector("#show-list-button").addEventListener("click", show_all_tasks);