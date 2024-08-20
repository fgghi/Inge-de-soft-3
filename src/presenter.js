function greet() {
  const name = document.getElementById('name').value.trim();
  const gender = document.getElementById('gender').value;
  const age = document.getElementById('age').value.trim();

  if (name) {
      let greeting = `Hola ${name}`;
      if (gender) {
          greeting += gender === 'masculino' ? ', señor' : ', señora';
      }
      if (age) {
          greeting += `, tienes ${age} años`;
      }
      greeting += '!';
      document.getElementById('greetingMessage').textContent = greeting;
  } else {
      document.getElementById('greetingMessage').textContent = "Por favor, ingresa tu nombre.";
  }
}
