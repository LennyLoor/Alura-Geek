export const itemProducto = (categoria, name, imageUrl, price, id) => {
    const item_ = document.createElement('li');
    item_.setAttribute('class', 'product__list__item');
    const content_ = `<div class="list__item--imagen">  
                            <img alt="imagen-${categoria}" src="${imageUrl}">
                        </div>
                        <span class="list__item--nombre">${name}</span>
                        <span class="list__item--precio"> ${price} </span>
                        <a class="list__item--boton ag__button--Text" href="../pages/productos.html?id=${id}">Ver producto</a>`;
    item_.innerHTML = content_;
    item_.dataset.id = id;
    return item_
}