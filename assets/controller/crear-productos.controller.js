
import { productServices } from "../service/productos-service.js";

(() => {

    /* OBTENER ELEMENTS */
    const html = {
        form: document.querySelector("[data-nuevoProducto]"),
        precio: document.querySelector("input[name='precio']"),
        url: document.querySelector('[data-fileImage]'),
        categoria: document.querySelector('[data-categoria]'),
        nombre: document.querySelector('[data-nombreProducto]'), 
    }

    /* VALIDACION | INPUT PRECIO */
    function dollar(string) {
        return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    html.precio.addEventListener("blur", function (e) {
        let val = parseFloat(e.target.value.replace(",", ".")).toFixed(2);
        if (val === 'NaN') {
            val = '0.00'
        } else { val = dollar(val); }
        e.target.value = val;
    })

    /* VALIDACION | FORM */ 
    html.form.addEventListener('submit', (event) => {
        event.preventDefault();

        const url = html.url.value;
        const categoria = html.categoria.value;
        const nombre = html.nombre.value;
        const valPrecio = html.precio.value;
        const precio = '$' + valPrecio;

        productServices.crearProducto(url, categoria, nombre, precio).then(() => {
            window.location.href = 'Alura-Geek/pages/productos.html'
        }).catch(error => console.log(error));

    })

})();
