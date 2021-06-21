const addTaskButton = document.querySelector('.btn_task');
const taskInput = document.querySelector('.input_task');
const ulList = document.querySelector('.task_list > ul');
const warning = document.querySelector('.task_list > .p_warning');

const PopUpWindow = document.querySelector('.editor');
const PopUpInput = document.querySelector('.edit_task_input');
const PopUpSubmit = document.querySelector('.edit_submit_btn');
const PopUpCancel = document.querySelector('.edit_cancel_btn');
const PopUpWarning = document.querySelector('.edit_warning');
const PopUpTextInfo = document.querySelector('.edit_task_menu > h2')

const regexp = /[0-9]/g

myStorage = window.localStorage;

let $listLength = myStorage.liStorageId || 0; // counts li in ul
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
        PopUpWindow.classList.add('hide');
    } else {
    pElements[indexLi].style.textDecoration = 'line-through';
    checkElements[indexLi].style.color = 'grey';
    PopUpWindow.classList.add('hide');
    }
}

const edit = (x) =>{

    const closeEdit = () =>{
        PopUpWindow.classList.add('hide');
        PopUpWarning.classList.add('hide');
        PopUpCancel.removeEventListener('click',closeEdit);
        PopUpSubmit.removeEventListener('click',submitEdit);
        taskInput.focus();
    }
    const submitEdit = () =>{
        if (PopUpInput.value == '' ){
        PopUpWarning.classList.remove('hide');
        PopUpWarning.textContent = ('Write your task....');
        } else {
        PopUpWarning.classList.add('hide');
        pElements[indexLi].innerHTML = PopUpInput.value;
        myStorage.setItem(`${indexLi}li`, PopUpInput.value);
        PopUpWindow.classList.add('hide');
        PopUpCancel.removeEventListener('click',closeEdit);
        PopUpSubmit.removeEventListener('click',submitEdit);
        PopUpInput.removeEventListener('keyup',editInputEnter);
        taskInput.focus();
        }
    }
    const editInputEnter = (event) => {
        if(event.code==='Enter'){
            submitEdit();
        }
    }
    let indexLi = Number(x.target.closest('button').classList[1].split('').filter(isNumber).join(''));
    PopUpWindow.classList.remove('hide'); 
    PopUpTextInfo.innerHTML = 'Edit your task: ';
    PopUpInput.classList.remove('hide');
    PopUpInput.value = pElements[indexLi].innerHTML;
    PopUpInput.focus();
    PopUpInput.addEventListener('keyup',editInputEnter);
    PopUpCancel.addEventListener('click',closeEdit);
    PopUpSubmit.addEventListener('click',submitEdit);
}

const remove = (x) => {
    const closeEdit = () =>{
        PopUpWindow.classList.add('hide');
        PopUpWarning.classList.add('hide');
        PopUpCancel.removeEventListener('click',closeEdit);
        PopUpSubmit.removeEventListener('click',submitEdit);
        PopUpSubmit.focus();
    }
    const submitEdit = () =>{
        ulList.removeChild(liList[indexLi]);
        myStorage.removeItem(`${indexLi}li`);

        PopUpWindow.classList.add('hide');
        PopUpCancel.removeEventListener('click',closeEdit);
        PopUpSubmit.removeEventListener('click',submitEdit);
        PopUpSubmit.focus();
                    
        let liExist = ulList.querySelector('li');
        if(liExist === null) {

            warning.classList.remove('hide');
            warning.textContent = ('No tasks in the list...');
            myStorage.clear();
            $listLength=0;

            } else {

                warning.classList.add('hide');
            }
    }
    let indexLi = Number(x.target.closest('button').classList[1].split('').filter(isNumber).join(''));
    // ulList.removeChild(liList[indexLi]);
    PopUpWindow.classList.remove('hide');
    PopUpTextInfo.innerHTML = 'Do you want to delete your task?';
    PopUpInput.classList.add('hide');
    

    PopUpCancel.addEventListener('click',closeEdit);
    PopUpSubmit.addEventListener('click',submitEdit);

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

    myStorage.liStorageId = $listLength; 
    myStorage.setItem(`${$listLength}li`, taskInput.value);


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

for(let i=0;i<=myStorage.liStorageId;i++){

    if(myStorage.getItem(`${i}li`) != null){

    liList[i] = document.createElement('li');
    liList[i].innerHTML = `
    <p class="task${i}">Test task</p>
    <div class="task_buttons">
                        <button class="btn_check task_check${i}"><i class="fas fa-check"></i></button>
                        <button class="btn_edit task_edit${i}">EDIT</button>
                        <button class="btn_remove task_remove${i}"><i class="fas fa-times"></i></button>
    </div>
    `;

    ulList.appendChild(liList[i]);

    pElements[i] =  liList[i].querySelector(`.task${i}`);
    checkElements[i] =  liList[i].querySelector(`.task_check${i}`);
    editElements[i] =  liList[i].querySelector(`.task_edit${i}`);
    removeElements[i] =  liList[i].querySelector(`.task_remove${i}`);

    pElements[i].textContent = myStorage.getItem(`${i}li`);

    removeElements[i].addEventListener('click',remove);
    checkElements[i].addEventListener('click',check);
    editElements[i].addEventListener('click',edit);

    }
    if (i == myStorage.liStorageId ){
        $listLength++;
    }
}

let liExist = ulList.querySelector('li');
        if(liExist === null) {

            warning.classList.remove('hide');
            warning.textContent = ('No tasks in the list...');

            } else {

                warning.classList.add('hide');
}