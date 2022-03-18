const carro = document.querySelector('#carro');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment();
const botones = document.querySelectorAll('.card .btn');

const carroObjeto = {};

//Le pasamos "e" y en la constante producto le añadimos target.dataset.fruta que esta relacionado con el data-fruta
//que le hemos pasado al button y que nos sirve de identificativo.
const agregarAlCarro = (e) => {
    const producto = {
        titulo : e.target.dataset.fruta,
        id : e.target.dataset.fruta,
        cantidad : 1,
    };

    if(carroObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carroObjeto[producto.titulo].cantidad + 1
    }

    carroObjeto[producto.titulo] = producto;
    mostrarCarro();
};

const mostrarCarro = (producto) => {

    carro.textContent = "";

    Object.values(carroObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })

    carro.appendChild(fragment);
}

botones.forEach((btn) => btn.addEventListener("click", agregarAlCarro))
