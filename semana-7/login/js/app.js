const form= document.querySelector("form");

//capturar el evento subnit del form, usaremos el evento onsubmit

form.onsubmit = function(event){
    //los formularios tienden a recargar la pagina, para evitarlo hacemos lo siguiente:
    event.preventDefault();
    //toda la info esta en event, se comprueba con console.log(event);
   //target= info del formulario
const formInfo= Array.from(event.target)
//filter para saber que el valor existe, en este caso solo los que tienen o son(input.value)
.filter(function(input) {
    return input.value;
})
//map= crear un array en base de lo que creo filter
.map(function(input){
    return input.value;
});
const [email, password]= formInfo;
//debemos de buscar dentro del array de users la info basada en email y password

const result = users.find(function(user){
    return user.email === email && user.password === password;
});
if (!result) {
//Mostrar alerta de error en este caso
Swal.fire({
    title: "Hubo un error!",
    text: "Email y/o password incorrectos",
    icon: "error",

})
  return;
}
//Vamos a guardar al usuario en localStorage(solo acepta string)
//JSON.stringfy(result)= para convertir un objecct a un string osea el result en string
localStorage.setItem("user", JSON.stringify(result));
//enviar a otro pagina
location.href = "http://127.0.0.1:5500/semana-7/login/home.html";
};