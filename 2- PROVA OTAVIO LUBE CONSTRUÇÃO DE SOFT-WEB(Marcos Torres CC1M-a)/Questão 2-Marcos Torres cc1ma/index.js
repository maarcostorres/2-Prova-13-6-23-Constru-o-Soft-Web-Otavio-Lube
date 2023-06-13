// Q2 - FAZER VERIFICAÇÃO DE CRITERIOS DE SENHAS
function checarSenha() {
    var password = document.getElementById("password").value;

    // Critérios para Verificação da Senha
    var lengthValid = password.length >= 8;
    var uppercaseValid = /[A-Z]/.test(password);
    var lowercaseValid = /[a-z]/.test(password);
    var numberValid = /[0-9]/.test(password);
    var specialCharValid = /[!@#$%^&*()\-_=+{}[\]|\\;:'",.<>/?`~]/.test(password);

    if (lengthValid && uppercaseValid && lowercaseValid && numberValid && specialCharValid) {
        document.getElementById("result").innerHTML = "Senha válida";
        document.getElementById("result").className = "result valid";
    } else {
        document.getElementById("result").innerHTML = "Senha inválida";
        document.getElementById("result").className = "result invalid";
    }
}