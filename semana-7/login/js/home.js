//acceder a un avariable que esta en localStorage
const user= localStorage.getItem("user")
//cuando un elemento no existe en localstprage se define como "NULL"

console.log(user);

//si no existe, se envia de nuevo al login
if (!user) {
    location.href = "http://127.0.0.1:5500/semana-7/login/index.html";

}

const fullName = document.querySelector("#name");
const email = document.querySelector("#email");

//para convertir de string a un objeto: JSON.parse()
const userObj = JSON.parse(user);
fullName.textContent = `${userObj.name} ${userObj.lastname}`;
email.textContent = userObj.email;

//button para logout

 const btnLogout = document.querySelector("#btn-logout");

 btnLogout.onclick = function() {
    // Paso1: Vamos a mostrar un alerta para que el usuario confirme
    Swal.fire({
        title: "Are you sure?",
        text: "of close the session in Mini-Shop",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, I'm sure",
    //si no se confirma entonces:
        }).then(function (value) {
         if (!value.isConfirmed) {
            return;
        }
    // Paso1: Limpiamos localStorage
    // solo 1 elemento basado en el key
    // localStorage.removeItem("user");
    // elimina todo lo que este en localStorage
    localStorage.clear();

    location.href = "http://127.0.0.1:5500/semana-7/login/index.html";
  });
};