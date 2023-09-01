// Function to validate the full name
function validateFullName(fullName) 
{
    const fullNamePattern = /^[A-Za-z\s]+$/;
    const isValid = fullNamePattern.test(fullName) && fullName.length >= 3;
    updateValidationStatus(document.getElementById('fullName'), isValid);
    return isValid;
}

// Function to validate the email address
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(email);
    updateValidationStatus(document.getElementById('email'), isValid);
    return isValid;
}

// Function to validate the date of birth and calculate age
function validateDateOfBirth(dateOfBirth) {
    const dobPattern = /^\d{4}-\d{2}-\d{2}$/;
    const isValid = dobPattern.test(dateOfBirth);

    const ageMessage = document.getElementById('ageMessage');
    const dateOfBirthInput = document.getElementById('dateOfBirth');
    
    if (isValid) {
        const birthDate = new Date(dateOfBirth);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthDate.getFullYear();

        if (currentDate.getMonth() < birthDate.getMonth() ||
            (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age >= 18) {
            ageMessage.innerText = 'You are 18 or older';
            ageMessage.style.color = 'green';
            dateOfBirthInput.style.border = '1px solid green'; // Green border for valid date of birth
        } else {
            ageMessage.innerText = 'You must be 18 or older';
            ageMessage.style.color = 'red';
            dateOfBirthInput.style.border = '1px solid red'; // Red border for age less than 18
        }
    } else {
        ageMessage.innerText = '';
        dateOfBirthInput.style.border = ''; // Clear border for invalid date of birth
    }

    updateValidationStatus(document.getElementById('dateOfBirth'), isValid);
    return isValid;
}



// Function to validate the password match in real-time
function validatePasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordMatchMessage = document.getElementById('passwordMatchMessage');
    const passwordInput = document.getElementById('password');

    if (password === confirmPassword) {
        passwordMatchMessage.innerText = 'Passwords match';
        passwordMatchMessage.style.color = 'green';
        passwordInput.style.border = '1px solid green'; // Green border for matching password
        return true;
    } else {
        passwordMatchMessage.innerText = 'Passwords do not match';
        passwordMatchMessage.style.color = 'red';
        passwordInput.style.border = '1px solid red'; // Red border for non-matching password
        return false;
    }
}

// Function to update the validation status with a tick or cross
function updateValidationStatus(inputField, isValid) {
    const statusElement = inputField.nextElementSibling;
    if (isValid) {
        statusElement.innerText = '✅'; // Green checkmark for valid input
        statusElement.style.color = 'green';
    } else {
        statusElement.innerText = '❌'; // Red "x" for invalid input
        statusElement.style.color = 'red';
    }
}

// Function to handle form submission and perform validation
function validateForm() {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const dateOfBirthInput = document.getElementById('dateOfBirth');
    const submitButton = document.querySelector('input[type="submit"]');

    const isFullNameValid = validateFullName(fullNameInput.value);
    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordValid = validatePassword(passwordInput.value);
    const isDateOfBirthValid = validateDateOfBirth(dateOfBirthInput.value);
    const isPasswordMatch = validatePasswordMatch();

    if (isFullNameValid && isEmailValid && isPasswordValid && isDateOfBirthValid && isPasswordMatch) {
        return true; // Allow form submission
    } else {
        return false; // Prevent form submission
    }
}

// Add real-time validation listeners
document.getElementById('fullName').addEventListener('input', function () {
    validateFullName(this.value);
});

document.getElementById('email').addEventListener('input', function () {
    validateEmail(this.value);
});

document.getElementById('password').addEventListener('input', function () {
    validatePassword(this.value);
    validatePasswordMatch();
});

document.getElementById('confirmPassword').addEventListener('input', function () {
    validatePasswordMatch();
});

document.getElementById('dateOfBirth').addEventListener('input', function () {
    validateDateOfBirth(this.value);
    validatePasswordMatch();
});

// Disable submit button by default
document.querySelector('input[type="submit"]').disabled = true;

// Attach event listeners to form elements
document.getElementById('fullName').addEventListener('input', function () {
    validateFullName(this.value);
});

document.getElementById('email').addEventListener('input', function () {
    validateEmail(this.value);
});

document.getElementById('password').addEventListener('input', function () {
    validatePassword(this.value);
    validatePasswordMatch();
});

document.getElementById('confirmPassword').addEventListener('input', function () {
    validatePasswordMatch();
});

document.getElementById('dateOfBirth').addEventListener('input', function () {
    validateDateOfBirth(this.value);
    validatePasswordMatch();
});
