import Task from './task_utils.mjs';

const addTaskInput = document.querySelector('.add-task-block__input');
const addTaskButton = document.querySelector('.add-task-block__btn');
const taskList = document.querySelector('.task-list');

let taskId = 0;
let task = [];

const addTask = () => {

    task[taskId] = new Task(taskId,addTaskInput.value,taskList);
    addTaskInput.value = '';
    taskId++;
    
    console.log(task);
}


addTaskButton.addEventListener('click',addTask)

