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
        <li class="task">
            <input type="checkbox" class="task__complete-button">
            <span class="task__name">${task.name}</span>
            <a href="#" class="task__remove-button"></a>
        </li>
        `    
        );
        element.innerHTML = tasks.reduce((a,b) => a +b);
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
   console.log(e.key);
}

addTaskElement.addEventListener('keyup',addDOMTask);

//keydown es cuando se presiona una tecla
//keyup es cuando se suelta la tecla

//eliminar tarea desde el DOM
function removeDOMTask(e){
    console.log('remove');
}

tasksContainerElement.addEventListener('click', removeDOMTask);