
//Fetch API
const listaProductos = () => fetch('http://localhost:3000/productos').then(respuesta => respuesta.json())


//POST 
const crearProducto = (imageUrl, categoria, name, price )=>{
    return fetch('http://localhost:3000/productos',{
        method: "POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({imageUrl, categoria, name, price, id: uuid.v4()})
    })
} 

const eliminarProducto = (id) => { 
    return fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE",
    })
}



export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto
}

