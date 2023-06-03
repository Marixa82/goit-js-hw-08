import '../css/common.css';
import '../css/03-feedback.css';
import throttle from "lodash.throttle";
const STORAGE_KEY = "feedback-form-state";
const formData = {};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500))

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    console.log(formData);
}

populateInput();

function populateInput() {
    const savedInput = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedInput) {
        if (savedInput.email) {
            formEl.elements.email.value = savedInput.email;
        }
        if (savedInput.message) {
            formEl.elements.message.value = savedInput.message;
        }
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('Form submitted');
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}