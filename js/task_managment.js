import * as util from './utils.js';

export default class Task{
    constructor(id,value,taskList,taskArray){

        this.taskArray = taskArray;
        this.id = id;
        this.value = value;
        // creating li element
        this.item = document.createElement('li');
        this.item.classList.add(`task-list__item`);
        this.item.classList.add(`task${this.id}`);
        taskList.appendChild(this.item);
        // creating p element inside li

        this.itemText = document.createElement('p');
        this.itemText.classList.add('task-list__text');
        this.itemText.textContent = this.value;

        this.item.appendChild(this.itemText);

        // creating div element inside li

        this.itemDiv = document.createElement('div');
        this.itemDiv.classList.add('task-list__task-buttons');

        this.item.appendChild(this.itemDiv)

        // creating buttons insite div element

        // check button 

        this.itemCheck = document.createElement('button');
        this.itemCheck.classList.add('task-list__btn-check');

        this.itemDiv.appendChild(this.itemCheck);

        // adding icon for check button

        this.itemCheckIcon = document.createElement('i');
        this.itemCheckIcon.classList.add('fas');
        this.itemCheckIcon.classList.add('fa-check');
        this.itemCheck.appendChild(this.itemCheckIcon);

        // edit button

        this.itemEdit = document.createElement('button');
        this.itemEdit.classList.add('task-list__btn-edit');
        this.itemEdit.textContent = 'EDIT';

        this.itemDiv.appendChild(this.itemEdit);

        // remove button

        this.itemRemove = document.createElement('button');
        this.itemRemove.classList.add('task-list__btn-remove');

        this.itemDiv.appendChild(this.itemRemove);

        // adding icon for remove button 

        this.itemRemoveIcon = document.createElement('i');
        this.itemRemoveIcon.classList.add('fas');
        this.itemRemoveIcon.classList.add('fa-times');
        this.itemRemove.appendChild(this.itemRemoveIcon);

        // adding listeners for buttons

        this.itemCheck.addEventListener('click', (event) => util.check(event,this));
        this.itemEdit.addEventListener('click', (event) => util.edit(event,this));
        this.itemRemove.addEventListener('click', (event) => util.remove(event,this));
        
    }
    taskArrayClear = (id) =>{
        this.taskArray[id] = '';
    }

}