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

	
