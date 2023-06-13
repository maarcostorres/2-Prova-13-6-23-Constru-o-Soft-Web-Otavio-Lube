// Q1 - ANALISAR SE O NÚMERO É PRIMO OU NÃO PRIMO \\
function checarNumero() {
    var number = parseInt(document.getElementById("number").value);

    if (isNaN(number) || number < 2) {
        document.getElementById("result").innerHTML = "Digite um número inteiro positivo maior que 1.";
        return;
    }
// ''CONFERIR O VALOR'' \\
    var isPrime = true;

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
// ''ANALISE DOS RESULTADOS SELECIONADOS'' \\
    if (isPrime) {
        document.getElementById("result").innerHTML = number + " é um número primo.";
        document.getElementById("result").className = "result prime";
    } else {
        document.getElementById("result").innerHTML = number + " não é um número primo.";
        document.getElementById("result").className = "result not-prime";
    }
}