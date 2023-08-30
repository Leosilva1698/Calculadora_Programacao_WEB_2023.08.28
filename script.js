
function um() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("um").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function dois() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("dois").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function tres() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("tres").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function zero() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("zero").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function quatro() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("quatro").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function cinco() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("cinco").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function seis() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("seis").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function sete() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("sete").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function oito() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("oito").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function nove() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("nove").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function ponto() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("ponto").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function mais() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("mais").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function menos() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("menos").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function mult() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("mult").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function div() {
    // tela = document.getElementById("tela").value;
    valorClicado = document.getElementById("div").value;
    // tela += valorClicado;
    document.getElementById("calculo").innerText += valorClicado;
}
function limparEquacao() {
    document.getElementById("calculo").textContent = null;
    
}
function limparTudo() {
    document.getElementById("calculo").textContent = null;
    document.getElementById("resultado").innerText = null;
}
function del(){
    tela = document.getElementById("calculo").textContent;
    tela = tela.substring(0, tela.length - 1);
    document.getElementById("calculo").textContent = tela;
}
function resultado() {
    equacao = document.getElementById("calculo").textContent;
    console.log(equacao);
    var resultado = eval(equacao);
    console.log(resultado);
    document.getElementById("resultado").innerText = resultado;
    document.getElementById("calculo").textContent = null;

}