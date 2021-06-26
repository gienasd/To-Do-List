import Task from './task_managment.js';

const addTaskInput = document.querySelector('.add-task-block__input');
const addTaskButton = document.querySelector('.add-task-block__btn');
const taskList = document.querySelector('.task-list');

let taskId = 0;
let task = [];

const addTask = () => {

    task[taskId] = new Task(taskId,addTaskInput.value,taskList,task);
    addTaskInput.value = '';
    taskId++;
}


addTaskButton.addEventListener('click',addTask)

