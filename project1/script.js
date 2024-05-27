document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for all buttons with class 'addToCart'
    var addToCartButtons = document.querySelectorAll('.addToCart');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the modal associated with this button
            var modalId = button.getAttribute('data-bs-target');
            var modal = document.querySelector(modalId);
            
            // Add event listener for the 'Add to cart' button inside the modal
            var addToCartButtonModal = modal.querySelector('.btn-dark');
            addToCartButtonModal.addEventListener('click', function() {
                // Get the quantity input value
                var quantityInput = modal.querySelector('.quantity');
                var quantity = parseInt(quantityInput.value);
                
                // Check if quantity is valid
                if (isNaN(quantity) || quantity <= 0) {
                    alert('Please enter a valid quantity.');
                } else {
                    // Get product details
                    var product = button.getAttribute('data-product');
                    var price = parseInt(button.getAttribute('data-price'));
                    
                    // Calculate total price
                    var totalPrice = quantity * price;
                    
                    // Display confirmation message
                    var confirmationMessage = 'Great! Order of ' + quantity + ' ' + product + ' item(s) received. Total price is $' + totalPrice + '.';
                    alert(confirmationMessage);
                    
                    // Close modal
                    var bootstrapModal = bootstrap.Modal.getInstance(modal);
                    bootstrapModal.hide();
                }
            });
        });
    });
});



$(document).ready(function() {
    $('#home-tab2').click(function() {
        $(this).addClass('active');
        $('#profile-tab2').removeClass('active');
        $('#login-form').removeClass('hidden');
        $('#signup-form').addClass('hidden');
    });

    $('#profile-tab2').click(function() {
        $(this).addClass('active');
        $('#home-tab2').removeClass('active');
        $('#signup-form').removeClass('hidden');
        $('#login-form').addClass('hidden');
    });
});