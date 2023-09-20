
//Fetch API
const listaProductos = () => fetch('https://lennyloor.github.io/Alura-Geek/assets/data/productos.json').then(respuesta => respuesta.json())


//POST 
const crearProducto = (imageUrl, categoria, name, price )=>{
    return fetch('https://lennyloor.github.io/Alura-Geek/assets/data/productos.json',{
        method: "POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({imageUrl, categoria, name, price, id: uuid.v4()})
    })
} 

const eliminarProducto = (id) => { 
    return fetch(`https://lennyloor.github.io/Alura-Geek/assets/data/productos.json/${id}`,{
        method: "DELETE",
    })
}



export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto
}

