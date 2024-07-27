document.addEventListener('DOMContentLoaded', () => {
    // Select all cards
    const cards = document.querySelectorAll('.card-1');

    cards.forEach(card => {
        const plusBtn = card.querySelector('.plus');
        const minusBtn = card.querySelector('.minus');
        const quantityDisplay = card.querySelector('.quantity');
        const priceDisplay = card.querySelector('.last-p');
        
        
        const pricePerItem = 128;
        let quantity = parseInt(quantityDisplay.textContent);

        function updatePrice() {
            const totalPrice = pricePerItem * quantity;
            priceDisplay.textContent = `$${totalPrice}`;
        }

        plusBtn.addEventListener('click', () => {
            quantity += 1;
            quantityDisplay.textContent = quantity;
            updatePrice();
        });

        minusBtn.addEventListener('click', () => {
            if (quantity > 1) {  // Assuming the minimum quantity is 1
                quantity -= 1;
                quantityDisplay.textContent = quantity;
                updatePrice();
            }
        });
    });

     // Get the cart badge element
     const cartBadge = document.querySelector('.cart .badge');

     // Initialize the cart count
     let cartCount = parseInt(cartBadge.textContent) || 0;
 
     // Select all 'Add to Cart' buttons
     const addToCartButtons = document.querySelectorAll('.add-to-cart');
 
     // Function to update cart badge
     function updateCartBadge() {
         cartCount += 1;  // Increment cart count
         cartBadge.textContent = cartCount;  // Update the badge text
     }
 
     // Add event listener to each 'Add to Cart' button
     addToCartButtons.forEach(button => {
         button.addEventListener('click', () => {
             updateCartBadge();  // Update cart badge on click
         });
     });
});
