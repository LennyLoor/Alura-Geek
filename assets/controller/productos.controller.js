
import { productServices } from "../service/productos-service.js";
import { itemProducto } from "./item-producto.js";

(() => {

    /* OBTENER ELEMENTS */
    const html = {
        listaProductos: document.querySelector("[data-productos]"),
        modBtnDelete: document.querySelector(".modBtn-elemininar"),
        modBtnCancelar: document.querySelector(".modBtn-cancelar"),
        modalDelete: document.querySelector("[data-modal]"),
    }

    productServices.listaProductos().then((data) => {
        data.forEach(({ categoria, name, imageUrl, price, id }) => {
            const nuevoProducto = itemProducto(categoria, name, imageUrl, price, id);
            html.listaProductos.appendChild(nuevoProducto);

            //BOTONES DE EDICION
            const list_image = document.querySelectorAll('.list__item--imagen');

            const btnAcciones = document.createElement('div');
            btnAcciones.setAttribute('class', 'imagen__btn--acciones');

            //BOTON ELIMINAR
            const btnDelete = document.createElement('a');
            btnDelete.setAttribute('class', 'data-delete');
            btnDelete.setAttribute('title', 'Eliminar producto');
            btnDelete.setAttribute('id', id);
            btnDelete.innerHTML = '<i class="fa-solid fa-trash" ></i>';

            //BOTON EDITAR
            const btnEdit = document.createElement('a');
            btnEdit.setAttribute('class', 'data-edit');
            btnEdit.setAttribute('title', 'Editar producto');
            btnEdit.setAttribute('id', id);
            btnEdit.innerHTML = '<i class="fa-solid fa-pen"></i>';

            btnAcciones.append(btnDelete, btnEdit);

            list_image.forEach((data) => {
                data.appendChild(btnAcciones);
            });

            // IDPRODUCTO;
            var id_;

            //BOTON ELIMINAR
            btnDelete.addEventListener('click', () => {
                html.modalDelete.style.display = "flex";
                id_ = btnDelete.id;
            });

            //BOTON CONFIRMAR ELIMINACION
            html.modBtnDelete.addEventListener('click', () => {
                if (id_ != undefined) {
                    html.modBtnDelete.setAttribute('id', id_);
                    productServices.eliminarProducto(id_).then(resp => {
                        html.modalDelete.style.display = "none";
                    }).catch(error => console.log(error))
                }
            });
            //BOTON CANCELAR
            html.modBtnCancelar.addEventListener('click', () => {
                html.modalDelete.style.display = "none";
            });

        });
    })

})();