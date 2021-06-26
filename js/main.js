import Task from './task_managment.js';

const addTaskInput = document.querySelector('.add-task-block__input');
const addTaskButton = document.querySelector('.add-task-block__btn');
const taskList = document.querySelector('.task-list');

let taskId = 0;
let taskArray = [];

const addTask = () => {
    taskArray[taskId] = new Task(taskId,addTaskInput.value,taskList,taskArray);
    addTaskInput.value = '';
    taskId++;
}

addTaskInput.focus();
addTaskButton.addEventListener('click',addTask);

addTaskInput.addEventListener('keydown', event =>{
    event.key == 'Enter' ? addTask() : null;
});