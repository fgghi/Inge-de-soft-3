export function generarSaludo(name, gender, age, language) {
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
    
    return greeting;
}
