import {BASE_URL} from "./config";

export async function getTasks(){
    const response = await fetch(BASE_URL);
    const tasks = await response.json();

    return tasks;

}

export async function createTask(task){
    const response = await fetch(BASE_URL,
    {method: "POST",
     body: JSON.stringify(task),
     headers:{
        "Content-Type": "application/json",
     },
    });

     const data= await response.json();
     return data;
}

export async function updateTask(task) {
    const response = await fetch(`${BASE_URL}/${task.id}`,{
     method:"PUT",
     body: JSON.stringify(task),
     headers:{
        "Content-Type": "application/json",
    }

    });

    const data= await response.json();
    return data;
}
//body solo se utiliza cuando se va actualizar o crear por eso para delete no se usa
export async function deleteTask(task) {
    const response = await fetch(`${BASE_URL}/${task.id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
        },

    });
    const data= await response.json();
    return data;


}