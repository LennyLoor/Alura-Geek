
//Fetch API
const listaProductos = () => fetch('http://localhost:3000/productos').then(respuesta => respuesta.json())

const crearProducto = (nombre,precio)=>{
    return fetch('http://localhost:3000/productos',{
        method: "POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({nombre, precio, id: uuid.v4()})
    })
}

const eliminarProducto = (id) => { 
    return fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE",
    })
}

const detalleProducto =(id)=>{
    return fetch(`http://localhost:3000/productos/${id}`).then((resp) => resp.json());
}

const actualizarProducto = (nombre,precio,id) => {
    return fetch(`http://localhost:3000/productos/${id}`,{
        method: "PUT",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({nombre, precio, id})
    })
    .then(resp => resp)
    .catch(error => console.log(error))
}

export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
}

