import { useState, useEffect } from "react";
import { DeleteForm, InputTask, Modal, UpdateForm, CheckForm } from "./components";
import {getTasks, createTask, updateTask,deleteTask } from "./services/httpAPI";

export default function App(){
   // Es el estado de la lista de tareas
   const [listTasks, setListTask] = useState([]);
   // Es el estado del input
   const [task, setTask] = useState("");
   //para manejar estado del modal
   //const [isOpen, setIsOpen] = useState(false);
   //const [isOpenDelete, setIsOpenDelete] = useState(false);
   //creamos variable para saber a que tarea le dimos click
   const [currentTask, setCurrentTask] = useState(null);
   const [isOpen, setIsOpen] = useState({
    edit: false,
    delete: false,
    check: false,
  });
  const handleOpen = (modalType) => {
    setIsOpen({
      ...isOpen,
      [modalType]: !isOpen[modalType],
    });
  };
   
 
   // Funcion que se encarga de capturar el valor del input
   const handleInputTask = (event) => {
     setTask(event.target.value);
   };
 
   //async= transforma una funcion a asincrona,(como obtener datos de una API) 
   //se usa junto a un await
   const handleListTask = async (task) => {
     const newTask= await createTask(task);
     const newTasks = [...listTasks, newTask];
     //modifica listtask, lo que tenia previamente mas las nuevas tareas
     setListTask(newTasks);
     setTask("");
     
   };
   const handleCurrentTask = (task) => {
    // Paso 1: abrir el modal
    handleOpen("edit");
    setCurrentTask(task);
  };
   const handleDeleteCurrentTask = (task) => {
    setCurrentTask(task);
    handleOpen("delete");
  };

  const handleCurrentCheckTask = (task) => {
    setCurrentTask(task);
    handleOpen("check");
  };

   const handleUpdateTask = (task, newText) => {
    //buscar la tarea en la lista
    const searchTask = listTasks.find((element) => element.id === task.id);
    //actualizando el valor
    searchTask.text = newText;
    handleOpen("edit");
    

  };
//darle check o estado a una tarea
  const handleCheckTask = async (task) => {
    const searchTask = listTasks.find((element) => element.id === task.id);
    searchTask.status = 2;

    await updateTask(searchTask);

    handleOpen("check");
  };

  
  //para eliminar de la lista
  const handleDeleteTask = async (task) => {
    const filteredTask =listTasks.filter((element) => element.id !== task.id);
    setListTask(filteredTask);
    await deleteTask(task)
    handleOpen("delete");
  };

  const fetchTasks = async () => {
    const response = await getTasks();
    setListTask(response);
  };

  useEffect(function  () {
    fetchTasks();
  }, []);


  return (
    <>
      <main className="max-w-md mx-auto p-6">
        <InputTask 
         task={task}
         handleInputTask={handleInputTask}
         handleListTask={handleListTask}
         />
      
        <section id="container-tasks" className="mt-10">
        {listTasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between px-4 mb-3 py-3 bg-white rounded-md"
              id="task-$"
            >
              
              <p>{task.text}</p>
              {task.status === 1 && (
                <div className="flex gap-5">
                <button onClick={() => handleCurrentCheckTask(task)}>✅</button>
                <button onClick={() => handleCurrentTask(task)} >✏️</button> 
                <button onClick={() => handleDeleteCurrentTask(task)}>🗑️</button>
              </div>
                ) }

            </div>
          ))}
        </section>
        {currentTask && (
          <Modal
            open={isOpen.edit}
            handleClose={() => handleOpen("edit")}
            title="Editar tarea"
          >
            <UpdateForm
              currentTask={currentTask}
              handleUpdateTask={handleUpdateTask}
            />
          </Modal>
        )}
        {currentTask && (
          <Modal
            open={isOpen.delete}
            handleClose={() => handleOpen("delete")}
            title="Eliminar tarea"
          >
            <DeleteForm
              currentTask={currentTask}
              handleDeleteTask={handleDeleteTask}
              handleDeleteCancel={() => handleOpen("delete")}
            />
          </Modal>
        )}
        {currentTask && (
          <Modal
            open={isOpen.check}
            handleClose={() => handleOpen("check")}
            title="Ver tarea"
          >
            <CheckForm
              currentTask={currentTask}
              handleCheckTask={handleCheckTask}
              handleCheckCancel={() => handleOpen("check")}
            />
          </Modal>
        )}
      </main>
    </>
  );
}