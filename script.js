function validateName(name) {
    return typeof name === 'string';
}

function validatePhone(phone) {
    // return phone.length === 10 && !isNaN(phone);
    if (phone.length !== 10) alert("Phone number must be 10 digits");
    if(isNaN(phone)) alert("Phone number must be a number");
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !message) {
        alert('Please fill all the fields');
        return;
    }

    // Validate Email
    if (!validateEmail(email)) {
        alert('Please enter a valid email');
        return;
    }

    // Validate Name
    if (!validateName(name)) {
        alert('Please enter a valid name');
        return;
    }

    // Validate Phone
    validatePhone(phone);
    
    alert('Thank you for your message!');
    this.reset();
});
