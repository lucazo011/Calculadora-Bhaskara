function calcular() {
    const coeficienteA = parseFloat(document.getElementById('coeficienteA').value);
    const coeficienteB = parseFloat(document.getElementById('coeficienteB').value);
    const coeficienteC = parseFloat(document.getElementById('coeficienteC').value);

    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(coeficienteA) || isNaN(coeficienteB) || isNaN(coeficienteC)) {
        resultadoDiv.textContent = 'Por favor, preencha todos os campos com valores numéricos.';
        return;
    }

    const raizes = calcularBhaskara(coeficienteA, coeficienteB, coeficienteC);

    if (raizes !== null) {
        resultadoDiv.textContent = `Raízes: x1 = ${raizes[0]}, x2 = ${raizes[1]}`;
    } else {
        resultadoDiv.textContent = 'Não há raízes reais.';
    }
}

function calcularBhaskara(a, b, c) {
    const delta = b * b - 4 * a * c;

    if (delta >= 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    } else {
        return null;
    }
}
