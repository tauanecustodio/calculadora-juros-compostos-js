const textResult = document.getElementById('text-result');

document.getElementById('calcular').addEventListener('click', function (event) {
    event.preventDefault();
    
    const capital = parseFloat(document.getElementById('capital').value);
    const juros = parseFloat(document.getElementById('juros').value) / 100;
    const tempo = parseFloat(document.getElementById('tempo').value);
    
    const montante = capital * Math.pow(1 + juros, tempo);

    textResult.innerText = "R$ " + montante.toFixed(2).replace('.',',');

});

document.getElementById('limpar').addEventListener('click', function () {
    document.getElementById('capital').value = '';
    document.getElementById('juros').value = '';
    document.getElementById('tempo').value = '';
    textResult.innerText = "R$ 0,00";
});