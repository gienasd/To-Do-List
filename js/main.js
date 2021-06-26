import Task from './task_managment.js';

const addTaskInput = document.querySelector('.add-task-block__input');
const addTaskButton = document.querySelector('.add-task-block__btn');
const taskList = document.querySelector('.task-list');
const addTaskWarning = document.querySelector('.show-task-block__warning');


let taskId = localStorage.id | 0;
let taskArray = [];

 // adding new task

const addTask = () => {
    if(addTaskInput.value != ''){
        addTaskWarning.classList.add('is-hidden');
        taskArray[taskId] = new Task(taskId,addTaskInput.value,taskList,taskArray);

        window.localStorage.id = taskId;
        window.localStorage.setItem(`Item${taskId}`,addTaskInput.value);

        addTaskInput.value = '';
        taskId++;
        

    } else {
        addTaskWarning.classList.remove('is-hidden');
        addTaskWarning.textContent = 'Your task is empty....';
    }
}

 // app starts here

for(let i = 0; i<=localStorage.id;i++){
    if(window.localStorage.getItem(`Item${i}`)!=''){
    taskArray[i] = new Task(i,window.localStorage.getItem(`Item${i}`),taskList,taskArray);
    }
}

if (taskId > 0){
    addTaskWarning.classList.add('is-hidden');
    taskId++;
}
addTaskInput.focus();
addTaskButton.addEventListener('click',addTask);

addTaskInput.addEventListener('keydown', event =>{
    event.key == 'Enter' ? addTask() : null;
});