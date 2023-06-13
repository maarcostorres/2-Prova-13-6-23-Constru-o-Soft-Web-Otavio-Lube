// Q3 - TRANSFORMAR O NÚMERO EM SUA FATORIAL
function calcularFatorial() {
    var number = parseInt(document.getElementById("number").value);

    if (isNaN(number) || number < 0) {
        document.getElementById("result").innerHTML = "Insira um Número CORRETAMENTE.";
        return;
    }

    var factorial = 1;

    for (var i = 2; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById("result").innerHTML = "O fatorial de " + number + " é: " + factorial;
}