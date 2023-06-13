// Q4 - DETERMINAR SE O NÚMERO REPRESENTA UM QUADRADO PERFEITO
function verificarQuadradoPerf() {
    var numberInput = document.getElementById("number");
    var number = parseInt(numberInput.value);

    if (isNaN(number) || number < 0) {
        document.getElementById("result").innerHTML = "Insira um número +.";
        return;
    }

    var sqrt = Math.sqrt(number);

    if (sqrt === Math.floor(sqrt)) {
        document.getElementById("result").innerHTML = number + " Parabens é um Quadrado Perfeito.";
    } else {
        document.getElementById("result").innerHTML = number + " Infelizmente não é um Quadrado Perfeito.";
    }
}