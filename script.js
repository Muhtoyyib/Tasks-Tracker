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
    let button = document.createElement('button');

    newTodo = {...newTodo, value: inputBox.value};


    newTask.appendChild(document.createTextNode(newTodo.value));
    button.classList.add('btn','btn-sm','ready', 'my-class');
    button.appendChild(document.createTextNode('Mark as done'));
    newTask.appendChild(button);
    toDoList.appendChild(newTask);

    inputBox.value = "";

    function completedTask(){
        button.addEventListener('click', ()=>{
            newTodo = {...newTodo, done: true};
            button.classList.remove('ready');
            button.classList.add('btn-success');
            button.innerHTML = '';
            newTask.style.color = 'white';
            button.appendChild(document.createTextNode('Remove'));
            const completedTasks = document.getElementById('completed-list');
    
            if(newTodo.done === true){
                completedTasks.appendChild(newTask);
            }
        })
    }

    completedTask();

    function removeTask(){
        button.addEventListener('dblclick', ()=>{
            newTodo = {...newTodo, done: false};
            button.classList.remove('btn-success');
            button.classList.add('btn-ready');
            button.classList.add('btn','btn-sm','ready', 'my-class');
            button.innerHTML = '';
            button.appendChild(document.createTextNode('Mark as done'));
           
    
            if(newTodo.done === false){
                newTask.style.color = '#ee9f27';
                toDoList.appendChild(newTask);
            }
        })
    }

    removeTask();


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
        errorMessage.innerHTML = '';
	} else if(inputBox.value.length === 0 && event.keyCode === 13) {
        errorMessage.innerHTML = 'Please Add a Task!';
    } 
}


addButton.addEventListener('click', addTask);
inputBox.addEventListener("keypress", addTaskAfterKeypress);

