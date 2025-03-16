// Redirect after login
window.location.href = "cart.html"; // Replace with your actual page URL

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add interactivity to buttons
document.querySelectorAll('.restaurant button, .food-item button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!'); // Replace with actual functionality
    });
});




// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const foodCard = button.closest('.food-card');
    const foodName = foodCard.querySelector('h3').textContent;
    const foodPrice = foodCard.querySelector('p').textContent;
    alert(`Added ${foodName} (${foodPrice}) to cart!`);
    // You can add logic here to update the cart
  });
});