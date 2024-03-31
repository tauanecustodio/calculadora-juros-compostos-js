const buttonCalcular = document.getElementById('calcular');
const buttonLimpar = document.getElementById('limpar');
const textResult = document.getElementById('text-result');


buttonCalcular.addEventListener('click', function (event) {
    event.preventDefault();
    
    const capital = parseFloat(document.getElementById('capital').value);
    const juros = parseFloat(document.getElementById('juros').value) / 100;
    const tempo = parseFloat(document.getElementById('tempo').value);
    const montante = capital * Math.pow(1 + juros, tempo);

    console.log(capital);
    console.log(juros);
    console.log(tempo);
    console.log(montante);

    textResult.innerText = montante.toFixed(2);
});

buttonLimpar.addEventListener('click', function () {
    document.getElementById('capital').value = '';
    document.getElementById('juros').value = '';
    document.getElementById('tempo').value = '';
    textResult.innerText = "0.00";
});