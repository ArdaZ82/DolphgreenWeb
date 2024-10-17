const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart-items');
const totalPriceElement = document.querySelector('.total-price');
const checkoutButton = document.querySelector('.checkout');
let total = 0;

function updateTotal(price) {
    total = total + price;
    totalPriceElement.textContent = `Total: $${total}`;
}

function removeFromCart(event) {
    const cartItem = event.target.closest('li');
    const productPrice = parseFloat(cartItem.getAttribute('data-price'));
    updateTotal(-productPrice);
    cartItem.remove();
}

function addToCart(event) {
    const product = event.target.closest('.product');
    const productName = product.getAttribute('data-name');
    const productPrice = parseFloat(product.getAttribute('data-price'));

    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - $${productPrice}`;
    cartItem.setAttribute('data-price', productPrice);
  
    const removeButton = document.createElement('button'); // crea un elemento boton
    removeButton.textContent = "Eliminar"; // le da el texto de eliminar
    removeButton.classList.add('remove-item'); // le da la clase de "remove-item"
    removeButton.addEventListener('click', removeFromCart); // le da un evento que al clickear, llame a la funcion removeFromCart

    cartItem.appendChild(removeButton); // a cart item le agrega el elemento removebutton (osea el boton)
    cartItemsList.appendChild(cartItem); // a la lista de items, le agrega el elemento cart item

    updateTotal(productPrice); // reinicia el precio haciendo la suma 
}

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

checkoutButton.addEventListener('click', () => {
    cartItemsList.innerHTML = '';
    total = 0;
    updateTotal(0);
});
