const downIcons = document.querySelectorAll('.down');
const upIcons = document.querySelectorAll('.up');
const answers = document.querySelectorAll('.answer');

downIcons.forEach((downIcon, index) => {
    downIcon.addEventListener('click', () => {
        answers[index].style.display = 'block';
        downIcons[index].style.display = 'none';
        upIcons[index].style.display = 'inline';
    });

    upIcons[index].addEventListener('click', () => {
        answers[index].style.display = 'none';
        downIcons[index].style.display = 'inline';
        upIcons[index].style.display = 'none';
    });
});

const items = document.querySelectorAll('.item');
let currentItem = 0;

function showItem(index) {
    items.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function nextItem() {
    currentItem = (currentItem + 1) % items.length;
    showItem(currentItem);
}

function previousItem() {
    currentItem = (currentItem - 1 + items.length) % items.length;
    showItem(currentItem);
}

document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', nextItem);
});

document.querySelectorAll('.previous').forEach(button => {
    button.addEventListener('click', previousItem);
});


showItem(currentItem);


setInterval(nextItem, 4000);


const openButtons = document.querySelectorAll('.open-popup');
const closeButtons = document.querySelectorAll('.close-popup');
const popup = document.querySelector('.popup');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        popup.style.display = 'block';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});




function validateForm() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const cardInput = document.getElementById('card-id');
    const numberInput = document.getElementById('phone-number');
    const popup = document.querySelector('.popup');

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{3}$/;
    const cardRegex = /^[A-Z]{2}[0-9]{5}$/;
    const numberRegex = /^[+][0-9]{12}$/;

    const firstNameValid = nameRegex.test(firstNameInput.value);
    const lastNameValid = nameRegex.test(lastNameInput.value);
    const emailValid = emailRegex.test(emailInput.value);
    const cardValid = cardRegex.test(cardInput.value);
    const numberValid = numberRegex.test(numberInput.value);

    if (!firstNameValid) {
        document.getElementById('first-name-error').textContent = 'Invalid first name';
    } else {
        document.getElementById('first-name-error').textContent = '';
    }

    if (!lastNameValid) {
        document.getElementById('last-name-error').textContent = 'Invalid last name';
    } else {
        document.getElementById('last-name-error').textContent = '';
    }

    if (!emailValid) {
        document.getElementById('email-error').textContent = 'Invalid Email address';
    } else {
        document.getElementById('email-error').textContent = '';
    }

    if (!cardValid) {
        document.getElementById('card-id-error').textContent = 'Invalid card id';
    } else {
        document.getElementById('card-id-error').textContent = '';
    }

    if (!numberValid) {
        document.getElementById('phone-number-error').textContent = 'Invalid phone number';
    } else {
        document.getElementById('phone-number-error').textContent = '';
    }

    return firstNameValid && lastNameValid && emailValid && cardValid && numberValid;
}

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); 



    if (validateForm()) {
        alert('Booking success!');
        form.reset();
        popup.style.display = 'none';
    }
});