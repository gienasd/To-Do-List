export default class Task{
    constructor(id,value,taskList){

        this.id = id;
        this.value = value;
        // creating li element
        
        this.item = document.createElement('li');
        this.item.classList.add(`task-list__item`);
        this.item.classList.add(`task${this.id}`);

        taskList.appendChild(this.item);

        // creating p element inside li

        this.item.text = document.createElement('p');
        this.item.text.classList.add('task-list__text');
        this.item.text.textContent = this.value;

        this.item.appendChild(this.item.text);

        // creating div element inside li

        this.item.div = document.createElement('div');
        this.item.div.classList.add('task-list__task-buttons');

        this.item.appendChild(this.item.div)

        // creating buttons insite div element

        // check button 

        this.item.check = document.createElement('button');
        this.item.check.classList.add('task-list__btn-check');

        this.item.div.appendChild(this.item.check);

        // adding icon for check button

        this.item.checkIcon = document.createElement('i');
        this.item.checkIcon.classList.add('fas');
        this.item.checkIcon.classList.add('fa-check');
        this.item.check.appendChild(this.item.checkIcon);

        // edit button

        this.item.edit = document.createElement('button');
        this.item.edit.classList.add('task-list__btn-edit');
        this.item.edit.textContent = 'EDIT';

        this.item.div.appendChild(this.item.edit);

        // remove button

        this.item.remove = document.createElement('button');
        this.item.remove.classList.add('task-list__btn-remove');

        this.item.div.appendChild(this.item.remove);

        // adding icon for remove button 

        this.item.removeIcon = document.createElement('i');
        this.item.removeIcon.classList.add('fas');
        this.item.removeIcon.classList.add('fa-times');
        this.item.remove.appendChild(this.item.removeIcon);

        // adding listeners for buttons

        this.item.check.addEventListener('click', (x) => console.log(x));
        this.item.edit.addEventListener('click', (x) => console.log(x));
        this.item.remove.addEventListener('click', (x) => console.log(x));
        
    }
}