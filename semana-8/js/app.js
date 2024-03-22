//Variables para form e input
const form = document.querySelector('#form');
const inputTask = document.querySelector('#input-task');
const error = document.querySelector('#error');
const containerTasks = document.querySelector("#container-tasks")

// Si quiero obtener algo de localStorage y eso no existe este retorna null
// Pasa que esta variable puede un string o un null
const validateTasksFromLocalStorage = localStorage.getItem("tasks");

let tasks = validateTasksFromLocalStorage
  ? [...JSON.parse(validateTasksFromLocalStorage)]
  : [];

function validateIfInputIsEmpty(){
    
        //validar que el input este lleno
    if (inputTask.value === "") {
        inputTask.classList.add("border", "border-red-500");
        error.textContent = "Debe completar este campo"
        return false;
    } else {
        inputTask.classList.remove("border", "border-red-500");
        error.textContent = "";
        return true;
    
     }
    
    };

    function saveTasksInLocalStorage(){
        //JSON.stringfy convierte un object a un string
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    inputTask.onkeyup = (event) => validateIfInputIsEmpty();

//Vamos a capturar el evento onsubmit de form
//como recomendacion es bueno usar el nombre event o e
//estado de evento 1= creado, 2= terminado, 3=eliminado
form.onsubmit = (event) => {
    //evitar que nuestra pagina se recargue, es importante
    event.preventDefault();
//Validar que el input este lleno
if (!validateIfInputIsEmpty()) return;

//creacion del objeto de tarea(task)
const task= {
    id: tasks.length + 1,
    text: inputTask.value,
    status: 1,
    //clase que da fecha y hora actual
    created_at: new Date(),
 };
 // a nuestro array(tasks) agregar nuestro objeto(task)
 tasks.push(task);
 //limpiar el input
 inputTask.value = "";
 //guardar en localstorage
 saveTasksInLocalStorage();

 //cuando se termine de agregar la variable se hara el render de las tareas
 renderTasks();
};

function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    // guardar en localStorage
    saveTasksInLocalStorage();
    // render para que vuelva a pintar las tareas
    renderTasks();
  }

function renderTasks() {
    //1.Limpiar el container
    containerTasks.innerHTML = "";
    //2.iterar a tasks
    tasks.forEach((task) => {
    //cuando estamos iterando queremos adicionar elemento a containerTasks
    //se usa +=(operador de adicion)
    // para concatenar string y variable se llama Template-String y se usa ``
        containerTasks.innerHTML += `
        <div class="flex justify-between px-4 py-3 bg-white roundes-md">
        <p>${task.text}</p>
        <div class="flex gap-4">
         <button>✅</button>
         <button>✍️</button>
         <button onclick="deleteTask(${task.id})">🚮</button>
        </div>
    </div>` 

    })

}
renderTasks();