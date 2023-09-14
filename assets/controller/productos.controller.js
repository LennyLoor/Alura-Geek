
import { productServices } from "../service/productos-service.js";
import { itemProducto } from "./item-producto.js";

(()=>{
 
    const listaProductos = document.querySelector('[data-productos]');
    
    productServices.listaProductos().then((data) => {
        data.forEach(({ categoria, nombre, precio, id }) => {
            const nuevoProducto_ = itemProducto(categoria, nombre, precio, id);
            listaProductos.appendChild(nuevoProducto_);
            console.log(categoria)
        });
    })     

})();