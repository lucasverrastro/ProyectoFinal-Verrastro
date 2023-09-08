        const items = [
            { id: 1, name: 'Item 1', price: 10 },
            { id: 2, name: 'Item 2', price: 20 },
            { id: 3, name: 'Item 3', price: 30 }
        ];

        const cart = [];

        function addItem(itemId) {
            const item = items.find(item => item.id === itemId);
            if (item) {
                cart.push(item);
                updateCart();
            }
        }

        function updateCart() {
            const cartList = document.getElementById('cart');
            const cartTotal = document.getElementById('cart-total');
            let total = 0;

            cartList.innerHTML = '';
            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - $${item.price}`;
                cartList.appendChild(li);
                total += item.price;
            });

            cartTotal.textContent = total;
        }