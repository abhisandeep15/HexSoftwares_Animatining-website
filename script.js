// Select the "Sign Up Here" button
const signUpButton = document.querySelector('.btntwo');

// Event listener for the button
signUpButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Check if the form already exists
    if (document.querySelector('.login-form')) {
        alert('Form is already displayed!');
        return;
    }

    // Create the form container
    const formContainer = document.createElement('div');
    formContainer.className = 'login-form';
    formContainer.style.position = 'fixed';
    formContainer.style.top = '50%';
    formContainer.style.left = '50%';
    formContainer.style.transform = 'translate(-50%, -50%)';
    formContainer.style.background = 'white';
    formContainer.style.padding = '20px';
    formContainer.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    formContainer.style.borderRadius = '8px';
    formContainer.style.zIndex = '1000';

    // Add the form content
    formContainer.innerHTML = `
        <h2 style="text-align: center; color: #00b894;">Login</h2>
        <form>
            <div style="margin-bottom: 15px;">
                <label for="username" style="display: block; font-weight: bold;">Username:</label>
                <input type="text" id="username" placeholder="Enter your username" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 15px;">
                <label for="password" style="display: block; font-weight: bold;">Password:</label>
                <input type="password" id="password" placeholder="Enter your password" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <button type="button" id="submitButton" style="width: 100%; padding: 10px; background: #00b894; color: white; border: none; border-radius: 4px; font-weight: bold;">Submit</button>
        </form>
        <button type="button" id="closeButton" style="margin-top: 10px; width: 100%; padding: 10px; background: #d32f2f; color: white; border: none; border-radius: 4px; font-weight: bold;">Close</button>
    `;

    // Append the form to the body
    document.body.appendChild(formContainer);

    // Close button functionality
    const closeButton = document.querySelector('#closeButton');
    closeButton.addEventListener('click', () => {
        formContainer.remove();
    });

    // Submit button functionality
    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener('click', () => {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        if (username && password) {
            alert(`Welcome, ${username}!`);
            formContainer.remove();
        } else {
            alert('Please fill in all fields!');
        }
    });
});




// Array of background images
const images = [
    "url('images/1.jpg')",
    "url('images/2.jpg')",
    "url('images/3.jpg')",
    "url('images/4.jpg')",
    "url('images/5.jpg')",
    "url('images/6.jpg')",
    "url('images/7.jpg')",
    "url('images/8.jpg')",
    "url('images/9.jpg')",
    "url('images/10.jpg')"


    
];

let currentImageIndex = 0;

function changeBackground() {
    const header = document.querySelector('header');
    header.style.backgroundImage = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Initial background setup
document.querySelector('header').style.backgroundImage = images[0];

// Change the background every 3 seconds
setInterval(changeBackground, 3000);


























