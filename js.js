<script>

    const products = [
      {
        name: 'Smartphone',
        price: 999.99,
        image: 'smartphone.png'
      },
      {
        name: 'Notebook',
        price: 1999.99,
        image: 'notebook.png'
      },
      {
        name: 'Fone de Ouvido',
        price: 149.99,
        image: 'fone.png'
      }
    ];

    function openPopup() {
      document.getElementById("popup").style.display = "block";
      displayPopupCartItems();
    }

    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }

    function displayProducts() {
      const productsList = document.getElementById('products-list');

      products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Preço: R$ ${product.price.toFixed(2)}</p>
          <button onclick="addToCart('${product.name}', ${product.price})">Adicionar ao Carrinho</button>
        `;
        productsList.appendChild(productElement);
      });
    }

    function addToCart(name, price) {
      const cartItems = document.getElementById('cart-items');
      const existingItem = Array.from(cartItems.children).find(item => item.dataset.name === name);

      if (existingItem) {
        const quantityElement = existingItem.querySelector('.quantity');
        const quantity = parseInt(quantityElement.innerText) + 1;
        quantityElement.innerText = quantity;
      } else {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.dataset.name = name;
        cartItem.innerHTML = `
          <p>${name} - R$ ${price.toFixed(2)}</p>
          <span class="quantity">1</span>
          <button class="remove-item-btn" onclick="removeFromCart(this)">Remover</button>
        `;
        cartItems.appendChild(cartItem);
      }

      displayPopupCartItems();
    }

    function removeFromCart(button) {
      const cartItems = document.getElementById('cart-items');
      const cartItem = button.parentNode;
      cartItems.removeChild(cartItem);

      displayPopupCartItems();
    }

    function displayPopupCartItems() {
      const cartItems = document.getElementById('cart-items');
      const popupCartItems = document.getElementById('popup-cart-items');

      popupCartItems.innerHTML = cartItems.innerHTML;
    }

    window.onload = displayProducts;
  </script>