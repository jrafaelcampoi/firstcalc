function limpar() {
    document.getElementById("xPonto").value = "";
    document.getElementById("yPonto").value = "";
    document.getElementById("coeficiente").value = "";
    document.getElementById("display").value = "";
}

function calcularEquacao() {
    var m = document.getElementById("coeficiente").value;
    var xA = Number(document.getElementById("xPonto").value);
    var yA = Number(document.getElementById("yPonto").value);
    var n = xA - (m * yA);
    var y = n > 0 ? `+${n}` : n;
    document.getElementById("display").value = `n = ${m}x ${y} `;
}