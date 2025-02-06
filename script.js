function validateName(name) {
    return typeof name === 'string';
}

function validatePhone(phone) {
    return phone.length === 10 && typeof phone === 'number';
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
    }

    // Validate Name
    if (!validateName(name)) {
        alert('Please enter a valid name');
    }

    // Validate Phone
    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number');
    }
});
