const calcular = document.getElementById('calcular');

function calcularJuroComposto() {
    const principal = parseFloat(document.getElementById('principal').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const anos = parseInt(document.getElementById('anos').value);
    const resultado = document.getElementById('resultado');

    if (!isNaN(principal) && !isNaN(taxa) && !isNaN(anos) && principal > 0 && taxa > 0 && anos > 0) {
        const montante = principal * Math.pow((1 + taxa / 100), anos);
        resultado.textContent = `Montante após ${anos} anos: R$ ${montante.toFixed(2)}`;
    } else {
        resultado.textContent = 'Preencha todos os campos corretamente.';
    }
}

calcular.addEventListener('click', calcularJuroComposto)