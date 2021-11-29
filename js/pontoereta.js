function limpar() {
    document.getElementById("xPonto").value = "";
    document.getElementById("yPonto").value = "";
    document.getElementById("PontoA").value = "";
    document.getElementById("PontoB").value = "";
    document.getElementById("PontoC").value = "";
    document.getElementById("display").value = "";
}

function calcularDistancia() {
    var xx = Number(document.getElementById("xPonto").value);
    var yy = Number(document.getElementById("yPonto").value);
    var pA = Number(document.getElementById("PontoA").value);
    var pB = Number(document.getElementById("PontoB").value);
    var pC = Number(document.getElementById("PontoC").value);

    var primeiraParte = (pA * xx + pB * yy + pC); 
    var segundaParte = Math.pow(Math.pow(pA, 2) + Math.pow(pB, 2), 0.5);
    var primeiraParte = Math.abs(primeiraParte);
    var div = (primeiraParte / segundaParte);
    var resultado = div
    document.getElementById("display").value = resultado.toFixed(3);
}