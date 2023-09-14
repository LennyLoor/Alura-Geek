
import { productServices } from "../service/productos-service.js";
import { itemProducto } from "./item-producto.js";

(()=>{

    const listaStarWars = document.querySelector('[data-starwars]');
    const listaConsola = document.querySelector('[data-consolas]');
    const listaDiverso = document.querySelector('[data-diversos]');
    
    productServices.listaProductos().then((data) => {
        data.forEach(({ categoria, nombre, precio, id }) => {
            const nuevoProducto_ = itemProducto(categoria, nombre, precio, id);
            switch (categoria) {
                case 'StarWars':
                    listaStarWars.appendChild(nuevoProducto_);
                    break;
                case 'consola':
                    listaConsola.appendChild(nuevoProducto_);
                    break;
                case 'diverso':
                    listaDiverso.appendChild(nuevoProducto_);
                    break;
            }
        });
    })/* .catch((error) => alert('Ocurrió un error dfsdfsd')); */

})();
