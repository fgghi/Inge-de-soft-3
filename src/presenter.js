function greet() {
  const name = document.getElementById('name').value.trim();
  if (name) {
      const greeting = `Hola ${name}!`;
      document.getElementById('greetingMessage').textContent = greeting;
  }
}
