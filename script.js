// Validator.js for form validation
// Add this library to your HTML file
// <script src="https://cdn.jsdelivr.net/npm/validator@13.6.0/dist/validator.js"></script>

// Bootstrap for mobile menu
// Add Bootstrap CSS and JS files to your HTML file
// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

// Chart.js for interactive charts
// Add Chart.js to your HTML file
// <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3"></script>

// Example: Add an event listener to the "Get Started" button
const getStartedButton = document.querySelector('.hero button');
getStartedButton.addEventListener('click', () => {
  console.log('Get Started button clicked!');
});

// Example: Toggle mobile menu visibility using Bootstrap
const menuToggle = document.querySelector('.navbar-toggler');
const mobileMenu = document.querySelector('.navbar-collapse');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Example: Create a line chart using Chart.js
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Bitcoin Price',
        data: [12000, 13000, 12500, 14000, 13500, 15000],
        backgroundColor: 'rgba(255, 127, 80, 0.5)',
        borderColor: 'rgba(255, 127, 80, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Example: Form validation for the contact form using Validator.js
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');

  if (validator.isEmpty(nameInput.value.trim())) {
    const errorDiv = document.querySelector('.error');
    errorDiv.textContent = 'Please enter your name.';
    return;
  }

  if (!validator.isEmail(emailInput.value.trim())) {
    const errorDiv = document.querySelector('.error');
    errorDiv.textContent = 'Please enter a valid email address.';
    return;
  }

  if (validator.isEmpty(messageInput.value.trim())) {
    const errorDiv = document.querySelector('.error');
    errorDiv.textContent = 'Please enter a message.';
    return;
  }

  form.submit();
});

// Helper function to validate email format
function isValidEmail(email) {
  return validator.isEmail(email);
}
