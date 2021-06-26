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

const submitRemove = (event,Task) => {
    const taskList = document.querySelector('ul');
    const removeTask = Task.item;
    taskList.removeChild(removeTask);
    Task.taskArrayClear(Task.id); 
}

// popup show util function

const popupShow = Task =>{
    const submit = document.querySelector('.popup__submit-btn');
    const cancel = document.querySelector('.popup__cancel-btn');

    cancel.removeEventListener('click',event => popupCancel(event,Task));

    submit.addEventListener('click',event => popupSubmit(event,Task),{once:true});
    cancel.addEventListener('click',event => popupCancel(event,Task),{once:true});

    
    const show = document.querySelector('.popup');
    show.classList.remove('is-hidden');
}

 //popup hide util function

const popupHide = () =>{
    const show = document.querySelector('.popup');
    show.classList.add('is-hidden');
}

 // popup submit util function

const popupSubmit = (event,Task) =>{
    console.log(`submit`);
    popupHide();
    submitRemove(event,Task);
}

 // popup cancel util function

const popupCancel = (event,Task) =>{
    console.log(`cancel`);
    popupHide();
}