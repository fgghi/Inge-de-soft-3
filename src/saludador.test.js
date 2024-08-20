import { generarSaludo } from './saludador';

describe('generarSaludo', () => {
    test('debe saludar en español con nombre solamente', () => {
        const result = generarSaludo('Juan', '', '', 'es');
        expect(result).toBe('Hola Juan!');
    });
    test('debe saludar en inglés con nombre solamente', () => {
        const result = generarSaludo('John', '', '', 'en');
        expect(result).toBe('Hello John!');
    });

    test('debe saludar en español con nombre y género masculino', () => {
        const result = generarSaludo('Carlos', 'masculino', '', 'es');
        expect(result).toBe('Hola Carlos, señor!');
    });

    test('debe saludar en español con nombre y género femenino', () => {
        const result = generarSaludo('Maria', 'femenino', '', 'es');
        expect(result).toBe('Hola Maria, señora!');
    });

    test('debe saludar en inglés con nombre y género masculino', () => {
        const result = generarSaludo('James', 'masculino', '', 'en');
        expect(result).toBe('Hello James, sir!');
    });

    test('debe saludar en inglés con nombre y género femenino', () => {
        const result = generarSaludo('Emily', 'femenino', '', 'en');
        expect(result).toBe('Hello Emily, madame!');
    });
});
