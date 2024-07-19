document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded");
    
});
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded");

    const form = document.getElementById('registerForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;

        console.log("Form Submitted:", { name, email, address });
    });
});
