function greet() {
  const name = document.getElementById('name').value.trim();
  const gender = document.getElementById('gender').value;
  const age = document.getElementById('age').value.trim();
  const language = document.getElementById('language').value;

  if (name) {
      let greeting = '';
      if (language === 'es') {
          greeting = `Hola ${name}`;
          if (gender) {
              greeting += gender === 'masculino' ? ', señor' : ', señora';
          }
          if (age) {
              greeting += `, tienes ${age} años`;
          }
          greeting += '!';
      } else if (language === 'en') {
          greeting = `Hello ${name}`;
          if (gender) {
              greeting += gender === 'masculino' ? ', sir' : ', madame';
          }
          if (age) {
              greeting += `, you are ${age} years old`;
          }
          greeting += '!';
      }

      document.getElementById('greetingMessage').textContent = greeting;
  } else {
      document.getElementById('greetingMessage').textContent = language === 'es' ? "Por favor, ingresa tu nombre." : "Please enter your name.";
  }
}
