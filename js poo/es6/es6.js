class Task{
    constructor(name){
        this.name = name;
        this.isComplete = false;
    }

    complete(){
        this.isComplete = !this.isComplete;
    }
}

class TaskList{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    addTask(task,element){
        this.tasks.push(task);
        this.renderTasks(element);
    }

    removeTask(i,element){
        this.tasks.splice(i,1);
        this.renderTasks(element);
    }

    renderTasks(element){
        let tasks = this.tasks.map( task =>`
        <li class="task  ${task.isComplete ? 'complete' : ''}">
            <input type="checkbox" 
            class="task__complete-button" ${task.isComplete ? 'checked' : ''}>
            <span class="task__name">${task.name}</span>
            <a href="#" class="task__remove-button close"></a>
        </li>
        `    
        );
        element.innerHTML = tasks.reduce((a,b) => a +b, '');
    }
}

// trabajar con el DOM
const addTaskElement = document.getElementById('add-task');
const tasksContainerElement = document.getElementById('tasks-container');
const inbox = new TaskList('inbox');

// Añadir tarea desde el DOM
function addDOMTask(e, list = inbox){
   // obtener el texto del input
   if(e.key ==='Enter'){
       let task = new Task(this.value);
       //añadir la tarea a la lista
       list.addTask(task,tasksContainerElement);
       //borrar el texto del input 
        this.value = '';
    }
   // crear la tarea instanciando la clase
   // añadir la tarea a la lista
   //console.log(e.key);
}

addTaskElement.addEventListener('keyup',addDOMTask);

//keydown es cuando se presiona una tecla
//keyup es cuando se suelta la tecla

// obtener indice de la tarea actual
function getTaskIndex(e){
    let taskItem = e.target.parentElement,
        tasksItems = [...tasksContainerElement.querySelectorAll('li')];
        return tasksItems.indexOf(taskItem);
}

//eliminar tarea desde el DOM
function removeDOMTask(e, list = inbox){
    // detectar que se hizo click en el enlace
    if(e.target.tagName === 'A'){
        
        //remover tarea de la lista (se necesita el índice)
        list.removeTask(getTaskIndex(e), tasksContainerElement);
    }
}

tasksContainerElement.addEventListener('click', removeDOMTask);

// completar la tarea
function completeDOMTask(e, list = inbox){
    // detectar que se hizo click en el input
    if(e.target.tagName === 'INPUT'){
        
        //completar tarea de la lista (se necesita el índice)
        list.tasks[getTaskIndex(e)].complete();
        e.target.parentElement.classList.toggle('complete');
        console.table(list.tasks);
    }
}

tasksContainerElement.addEventListener('click', completeDOMTask);