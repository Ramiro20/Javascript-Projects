'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task(name) {
        _classCallCheck(this, Task);

        this.name = name;
        this.isComplete = false;
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.isComplete = !this.isComplete;
        }
    }]);

    return Task;
}();

var TaskList = function () {
    function TaskList(name) {
        _classCallCheck(this, TaskList);

        this.name = name;
        this.tasks = [];
    }

    _createClass(TaskList, [{
        key: 'addTask',
        value: function addTask(task, element) {
            this.tasks.push(task);
            this.renderTasks(element);
        }
    }, {
        key: 'removeTask',
        value: function removeTask(i, element) {
            this.tasks.splice(i, 1);
            this.renderTasks(element);
        }
    }, {
        key: 'renderTasks',
        value: function renderTasks(element) {
            var tasks = this.tasks.map(function (task) {
                return '\n        <li class="task  ' + (task.isComplete ? 'complete' : '') + '">\n            <input type="checkbox" \n            class="task__complete-button" ' + (task.isComplete ? 'checked' : '') + '>\n            <span class="task__name">' + task.name + '</span>\n            <a href="#" class="task__remove-button close"></a>\n        </li>\n        ';
            });
            element.innerHTML = tasks.reduce(function (a, b) {
                return a + b;
            }, '');
        }
    }]);

    return TaskList;
}();

// trabajar con el DOM


var addTaskElement = document.getElementById('add-task');
var tasksContainerElement = document.getElementById('tasks-container');
var inbox = new TaskList('inbox');

// Añadir tarea desde el DOM
function addDOMTask(e) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

    // obtener el texto del input
    if (e.key === 'Enter') {
        var task = new Task(this.value);
        //añadir la tarea a la lista
        list.addTask(task, tasksContainerElement);
        //borrar el texto del input 
        this.value = '';
    }
    // crear la tarea instanciando la clase
    // añadir la tarea a la lista
    //console.log(e.key);
}

addTaskElement.addEventListener('keyup', addDOMTask);

//keydown es cuando se presiona una tecla
//keyup es cuando se suelta la tecla

// obtener indice de la tarea actual
function getTaskIndex(e) {
    var taskItem = e.target.parentElement,
        tasksItems = [].concat(_toConsumableArray(tasksContainerElement.querySelectorAll('li')));
    return tasksItems.indexOf(taskItem);
}

//eliminar tarea desde el DOM
function removeDOMTask(e) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

    // detectar que se hizo click en el enlace
    if (e.target.tagName === 'A') {

        //remover tarea de la lista (se necesita el índice)
        list.removeTask(getTaskIndex(e), tasksContainerElement);
    }
}

tasksContainerElement.addEventListener('click', removeDOMTask);

// completar la tarea
function completeDOMTask(e) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

    // detectar que se hizo click en el input
    if (e.target.tagName === 'INPUT') {

        //completar tarea de la lista (se necesita el índice)
        list.tasks[getTaskIndex(e)].complete();
        e.target.parentElement.classList.toggle('complete');
        console.table(list.tasks);
    }
}

tasksContainerElement.addEventListener('click', completeDOMTask);