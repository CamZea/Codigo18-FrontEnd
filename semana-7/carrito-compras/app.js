const items = document.getElementById('items');
const templateCard= document.getElementById('template-card').content
const fragment = document.createDocumentFragment();

//para ejecutar el fetchData
 // Se agrega un "addEvenetListener" al documento que espera el evento 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', () => {
//FetchData se ejecuta después de que el DOM esté completamente cargado
    fetchData()
})

//fetchData, funcion asincrona de JS
//Utilizamos fetch para hacer una solicitud GET a una URL específica.
const fetchData = async () => {
    //usamos try y catch para pintar el error en consola cuando sea necesario
    try {
        // Aquí colocas el código que quieres ejecutar y potencialmente puede lanzar un error
        //await, para esperar que se resuelva otra promesa (api.json)
        const res = await fetch('api.json') 
        //res hace referencia al objeto Response devuelto por la función fetch().
        const data = await res.json()
        //console.log(data)
        pintarCards(data)
    
    } catch (error){
        // Este bloque se ejecutará si ocurre un error dentro del bloque try
            console.log(error)
        }
    }

    const pintarCards = data => {
       data.forEach(producto => {
    //querySelector= Este método de JavaScript se utiliza para buscar dentro del contenido de templateCard un 
    //elemento HTML que coincida con el selector CSS especificado. En este caso, el selector CSS es 'h5'
        templateCard.querySelector('h5').textContent = producto.title //establece el contenido de texto del elemento como el título del producto actual 
        templateCard.querySelector('p').textContent= producto.precio
        templateCard.querySelector('img').setAttribute("src",producto.thumbnailUrl)
        //crea una copia exacta de la plantilla, incluidos todos sus elementos y atributos.
        const clone = templateCard.cloneNode(true)
      // con esto y la parte de items.appendChild, evitamos el reflow, para 
      //evitar múltiples modificaciones del DOM, lo que mejora el rendimiento.
        fragment.appendChild(clone)
        
       });
       items.appendChild(fragment)
    }

