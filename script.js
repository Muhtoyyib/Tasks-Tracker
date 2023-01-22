let inputBox = document.getElementById('input-box');
let addButton = document.getElementById('add-button');
let errorMessage = document.getElementById('error-message');
let taskTodo = document.getElementsByClassName('myTodos');



function newTask(){

    let newTodo = {
        value: '',
        done: false,
    }

    let newTask = document.createElement('li');
    let toDoList = document.getElementById('to-do-list');
    let check = document.createElement('input');

    newTodo = {...newTodo, value: inputBox.value};


    newTask.appendChild(document.createTextNode(newTodo.value));
    check.classList.add('form-check-input','myClass');
    check.setAttribute('type', 'checkbox');
    newTask.classList.add('myTodos');
    newTask.appendChild(check);
    toDoList.appendChild(newTask);

    inputBox.value = "";

    function completedTask(){
        newTask.addEventListener('click', ()=>{
            newTodo = {...newTodo, done: true};
            const completedTasks = document.getElementById('completed-list');
    
            if(newTodo.done === true){
                completedTasks.appendChild(newTask);
            }
        })
    }

    completedTask();


}




function addTask(){
    if(inputBox.value.length > 0){
        newTask();
        errorMessage.innerHTML = '';
    } else if(inputBox.value.length === 0) {
        errorMessage.innerHTML = 'Please Add a List!';
    } 
    
}

function addTaskAfterKeypress(event) {
	if (inputBox.value.length > 0 && event.keyCode === 13) {
		newTask();
	} else if(inputBox.value.length === 0 && event.keyCode === 13) {
        errorMessage.innerHTML = 'Please Add a Task!';
    } 
}



function completedTask(){
    console.log(tasks)
}


addButton.addEventListener('click', addTask);
inputBox.addEventListener("keypress", addTaskAfterKeypress);

