export function check(event,Task){
    console.log('check');
}

export function edit(event,Task){
    console.log('edit');
}

export function remove(event,Task){
    const taskList = document.querySelector('ul');
    const removeTask = event.target.closest('li');
    taskList.removeChild(removeTask);
    Task.taskArrayClear(Task.id);
}