export const itemProducto = (categoria, nombre, precio, id) => {
    const item_ = document.createElement('li');
    item_.setAttribute('class', 'product__list__item');
    const content_ =    `<div class="list__item--imagen">
                            <div class="imagen__btn--acciones" data-productoAcciones>
                                <a><i class="fa-solid fa-trash"></i></a>
                                <a><i class="fa-solid fa-pen"></i></a>
                            </div>
                            <img src="/assets/image/productos/${categoria}-${id}.png">
                        </div>
                        <span class="list__item--nombre">${nombre} XYZ</span>
                        <span class="list__item--precio"> ${precio} </span>
                        <a class="list__item--boton ag__button__Text">Ver producto</a>`;
    item_.innerHTML = content_;
    return item_
}