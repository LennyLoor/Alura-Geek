
//Fetch API
const listaProductos = () => fetch('https://mocki.io/v1/8eca9abe-8ddd-41d9-8ea3-c21320e494de').then(respuesta => respuesta.json())


//POST 
const crearProducto = (imageUrl, categoria, name, price )=>{
    return fetch('https://mocki.io/v1/8eca9abe-8ddd-41d9-8ea3-c21320e494de',{
        method: "POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({imageUrl, categoria, name, price, id: uuid.v4()})
    })
} 

const eliminarProducto = (id) => { 
    return fetch(`https://mocki.io/v1/8eca9abe-8ddd-41d9-8ea3-c21320e494de/${id}`,{
        method: "DELETE",
    })
}



export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto
}

