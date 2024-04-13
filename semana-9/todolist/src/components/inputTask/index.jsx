export default function InputTask(props) {
    // dentro de un componente puedo crear funciones
    //evento para validar contenido en el form
    const handleFormSubmit = (event) => {
      event.preventDefault();
      const task = {
        text: props.task,
        status: 1,
        created_at: new Date(),
      };
      props.handleListTask(task);
    };
  
    return (
      <>
      
        <form 
            onSubmit={handleFormSubmit}
            action="" //action como esta vacio redirige hacia la misma pagina, osea ahi se pone la direccion a donde queremos que se rediriga
            id="form" className="flex justify-between">
          <input
            id="input-task"
            type="text"
            value={props.task}
            //hadleInputTask modifica valor de setTask
            onChange={props.handleInputTask}
            className="w-full border py-2 px-4 rounded-l-md outline-none"
            placeholder="Escribe el titulo de tu tarea "
          />
          <span id="error" className="text-xs text-red-500 mt-1"></span>
          <button className="bg-green-400 px-4 rounded-r-md">Crear</button>
        </form>
      </>
    );
  
};