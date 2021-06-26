import Task from './task_managment.js';

const addTaskInput = document.querySelector('.add-task-block__input');
const addTaskButton = document.querySelector('.add-task-block__btn');
const taskList = document.querySelector('.task-list');
const addTaskWarning = document.querySelector('.show-task-block__warning');

let taskId = 0;
let taskArray = [];

 // adding new task

const addTask = () => {
    if(addTaskInput.value != ''){

        addTaskWarning.classList.add('is-hidden');
        taskArray[taskId] = new Task(taskId,addTaskInput.value,taskList,taskArray);
        addTaskInput.value = '';
        taskId++;

    } else {
        addTaskWarning.classList.remove('is-hidden');
        addTaskWarning.textContent = 'Your task is empty....';
    }
}

 // app starts here

addTaskInput.focus();
addTaskButton.addEventListener('click',addTask);

addTaskInput.addEventListener('keydown', event =>{
    event.key == 'Enter' ? addTask() : null;
});