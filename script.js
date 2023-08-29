function calcular() {
    operacao = document.getElementById("numero").value;
    resultado = eval(operacao);
    console.log(resultado);
    document.getElementById("resultado").innerHTML += resultado;

}


