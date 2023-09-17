
import { productServices } from "../service/productos-service.js";
import { itemProducto } from "./item-producto.js";

(() => {

    /* OBTENER ELEMENTS */
    const html = {
        listaStarWars: document.querySelector("[data-starwars]"),
        listaConsola: document.querySelector('[data-consolas]'),
        listaDiverso: document.querySelector('[data-diversos]'),
    }

    /* MOSTRAR PRODUCTOS POR CATEGORIA */
    productServices.listaProductos().then((data) => {
        data.forEach(({ categoria, name, imageUrl, price, id }) => {
            const nuevoProducto_ = itemProducto(categoria, name, imageUrl, price, id);
            switch (categoria) {
                case 'StarWars':
                    html.listaStarWars.appendChild(nuevoProducto_);
                    break;
                case 'Consolas':
                    html.listaConsola.appendChild(nuevoProducto_);
                    break;
                case 'Diversos':
                    html.listaDiverso.appendChild(nuevoProducto_);
                    break;
            }

        });
    }).catch((error) => console.log(error));

})();
