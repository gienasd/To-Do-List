export function check(event,Task){
    console.log('check');
}

export function edit(event,Task){
    console.log('edit');
}

// remove button logic

export function remove(event,Task){
    Task.action = 'remove';
    popupShow(Task);   
}

const submitRemove = Task => {
    console.log(Task);
    const taskList = document.querySelector('ul');
    const removeTask = Task.item;
    taskList.removeChild(removeTask);
    Task.taskArrayClear(Task.id); 
}

// check popup submit action function

const checkSubmitAction = Task => {

    switch(Task.action){

        case 'remove':
            submitRemove(Task);
            break;
            
        default:
            console.log(error);
    }
}
// popup show util function

const popupShow = Task =>{

        // popup submit util function

        const popupSubmit = () =>{
            console.log(`submit`);
            popupHide();
            checkSubmitAction(Task);
            submit.removeEventListener('click', popupSubmit);
            cancel.removeEventListener('click', popupCancel);
        }

         // popup cancel util function

        const popupCancel = () =>{
            console.log(`cancel`);
            popupHide();
            submit.removeEventListener('click', popupSubmit);
            cancel.removeEventListener('click', popupCancel);
        }

    const submit = document.querySelector('.popup__submit-btn');
    const cancel = document.querySelector('.popup__cancel-btn');

    submit.addEventListener('click', popupSubmit);
    cancel.addEventListener('click', popupCancel);

    const show = document.querySelector('.popup');
    show.classList.remove('is-hidden');
}

 //popup hide util function

const popupHide = () =>{
    const show = document.querySelector('.popup');
    show.classList.add('is-hidden');
}