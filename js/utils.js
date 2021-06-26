// check button logic

export function check(task){
    task.itemText.classList.toggle('is-checked');
    task.itemCheckIcon.classList.toggle('icon-checked');
}

// edit button logic

export function edit(task){
    task.action = 'edit';
    document.querySelector('.popup__input').value = '';
    document.querySelector('.popup__title').textContent = 'Edit your Task';
    document.querySelector('.popup__input').classList.remove('is-hidden');
    popupShow(task);
    document.querySelector('.popup__input').focus();
}

const submitEdit = task => {
    task.itemText.textContent = document.querySelector('.popup__input').value;
}

// remove button logic

export function remove(task){
    task.action = 'remove';
    document.querySelector('.popup__title').textContent = 'Do you realy want to delete this task?';
    document.querySelector('.popup__input').classList.add('is-hidden');
    document.querySelector('.popup__warning').classList.add('is-hidden');
    popupShow(task);
    document.querySelector('.popup__submit-btn').focus();
}

const submitRemove = task => {
    const taskList = document.querySelector('ul');
    const removeTask = task.item;
    taskList.removeChild(removeTask);
    task.taskArrayClear(task.id); 
}

// check popup submit action function

const checkSubmitAction = task => {

    switch(task.action){

        case 'remove':
            submitRemove(task);
            break;

        case 'edit':
            submitEdit(task);
            break;

        default:
            console.log('error');
            break;
    }
}
// popup show util function

const popupShow = task =>{

        // checking if enter was pressed in input

        const checkEnter = event => {
            event.key == 'Enter' ? popupSubmit() : null;
        }

        // popup submit util function

        const popupSubmit = () =>{
            popupHide();
            checkSubmitAction(task);
            submit.removeEventListener('click', popupSubmit);
            cancel.removeEventListener('click', popupCancel);
            keydown.removeEventListener('keydown', checkEnter);
        }

         // popup cancel util function

        const popupCancel = () =>{
            popupHide();
            submit.removeEventListener('click', popupSubmit);
            cancel.removeEventListener('click', popupCancel);
            keydown.removeEventListener('keydown', checkenter);
        }

    const submit = document.querySelector('.popup__submit-btn');
    const cancel = document.querySelector('.popup__cancel-btn');
    const keydown = document.querySelector('.popup__input');

    submit.addEventListener('click', popupSubmit);
    cancel.addEventListener('click', popupCancel);
    keydown.addEventListener('keydown', checkEnter);

    const show = document.querySelector('.popup');
    show.classList.remove('is-hidden');
}

 //popup hide util function

const popupHide = () =>{
    const show = document.querySelector('.popup');
    show.classList.add('is-hidden');
}