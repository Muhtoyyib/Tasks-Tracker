let inputBox = document.getElementById('input-box');
let addButton = document.getElementById('add-button');
let errorMessage = document.getElementById('error-message');


function newTask(){
    let newTask = document.createElement('li');
    let toDoList = document.getElementById('to-do-list');
    let check = document.createElement('input');
    let div= document.createElement('div');



    newTask.appendChild(document.createTextNode(inputBox.value));
    check.classList.add('form-check-input', 'me-5');
    check.setAttribute('type', 'checkbox');
    newTask.appendChild(check);
    toDoList.appendChild(newTask);
    inputBox.value = " ";
};

function addTask(){
    if(inputBox.value.length > 0){
        newTask();
        errorMessage.innerHTML = '';
    } else if(inputBox.value.length === 0) {
        errorMessage.innerHTML = 'Please Add a List!';
    }
}



addButton.addEventListener('click', addTask);

