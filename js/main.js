const addTaskButton = document.querySelector('.btn_task');
const taskInput = document.querySelector('.input_task');
const ulList = document.querySelector('.task_list > ul');
const warning = document.querySelector('.task_list > .p_warning');

const editWindow = document.querySelector('.editor');
const editInput = document.querySelector('.edit_task_input');
const editSubmit = document.querySelector('.edit_submit_btn');
const editCancel = document.querySelector('.edit_cancel_btn');
const editWarning = document.querySelector('.edit_warning');

const regexp = /[0-9]/g

let $listLength = 0; // counts li in ul
let liList = []; // array of li elements
let pElements = []; // p elements of li
let checkElements = []; // check button elements of li
let editElements = []; // edit button elements of li
let removeElements = []; // remove button elements of li

const isNumber = (number) =>{
    if(number.match(regexp))
    return number;
}

const check = (x) => {
    let indexLi = Number(x.target.closest('button').classList[1].split('').filter(isNumber).join(''));

    if(pElements[indexLi].style.textDecoration.includes('line-through')) {
        pElements[indexLi].style.textDecoration = '';
        checkElements[indexLi].style.color = '';
        editWindow.classList.add('hide');
    } else {
    pElements[indexLi].style.textDecoration = 'line-through';
    checkElements[indexLi].style.color = 'grey';
    editWindow.classList.add('hide');
    }
}

const edit = (x) =>{

    const closeEdit = () =>{
        editWindow.classList.add('hide');
        editWarning.classList.add('hide');
        editCancel.removeEventListener('click',closeEdit);
        editSubmit.removeEventListener('click',submitEdit);
        taskInput.focus();
    }
    const submitEdit = () =>{
        if (editInput.value == '' ){
        editWarning.classList.remove('hide');
        editWarning.textContent = ('Write your task....');
        } else {
        editWarning.classList.add('hide');
        pElements[indexLi].innerHTML = editInput.value;
        editWindow.classList.add('hide');
        editCancel.removeEventListener('click',closeEdit);
        editSubmit.removeEventListener('click',submitEdit);
        editInput.removeEventListener('keyup',editInputEnter);
        taskInput.focus();
        }
    }
    const editInputEnter = (event) => {
        if(event.code==='Enter'){
            submitEdit();
        }
    }
    let indexLi = Number(x.target.closest('button').classList[1].split('').filter(isNumber).join(''));
    editWindow.classList.remove('hide'); 
    editInput.value = pElements[indexLi].innerHTML;
    editInput.focus();
    editInput.addEventListener('keyup',editInputEnter);
    editCancel.addEventListener('click',closeEdit);
    editSubmit.addEventListener('click',submitEdit);
}

const remove = (x) => {
    let indexLi = Number(x.target.closest('button').classList[1].split('').filter(isNumber).join(''));
    ulList.removeChild(liList[indexLi]);
    editWindow.classList.add('hide');
    let liExist = ulList.querySelector('li');
    console.log(liExist);
    if(liExist === null) {
    warning.classList.remove('hide');
    warning.textContent = ('No tasks in the list...');
} else {
    warning.classList.add('hide');
}
}

const addLi = () =>{
    if(taskInput.value == '') {
        warning.classList.remove('hide');
        warning.textContent = ('Write your task....');
    } else {
    warning.classList.add('hide');

    liList[$listLength] = document.createElement('li');
    liList[$listLength].innerHTML = `
    <p class="task${$listLength}">Test task</p>
    <div class="task_buttons">
                        <button class="btn_check task_check${$listLength}"><i class="fas fa-check"></i></button>
                        <button class="btn_edit task_edit${$listLength}">EDIT</button>
                        <button class="btn_remove task_remove${$listLength}"><i class="fas fa-times"></i></button>
    </div>
    `;

    ulList.appendChild(liList[$listLength]);
    
    pElements[$listLength] =  liList[$listLength].querySelector(`.task${$listLength}`);
    checkElements[$listLength] =  liList[$listLength].querySelector(`.task_check${$listLength}`);
    editElements[$listLength] =  liList[$listLength].querySelector(`.task_edit${$listLength}`);
    removeElements[$listLength] =  liList[$listLength].querySelector(`.task_remove${$listLength}`);

    pElements[$listLength].textContent = taskInput.value;
    taskInput.value = '';  

    removeElements[$listLength].addEventListener('click',remove);
    checkElements[$listLength].addEventListener('click',check);
    editElements[$listLength].addEventListener('click',edit);

    $listLength++;
    }
}
const taskInputEnter = (event) => {
    if(event.code==='Enter'){
        addLi();
    }
}
taskInput.focus();
addTaskButton.addEventListener('click',addLi);
taskInput.addEventListener('keyup',taskInputEnter);