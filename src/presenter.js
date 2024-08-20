import { generarSaludo } from './saludador.js';

function greet() {
    const name = document.getElementById('name').value.trim();
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value.trim();
    const language = document.getElementById('language').value;

    let message = '';
    if (name) {
        message = generarSaludo(name, gender, age, language);
    } else {
        message = language === 'es' ? "Por favor, ingresa tu nombre." : "Please enter your name.";
    }

    document.getElementById('greetingMessage').textContent = message;
}

document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    greet();
});
