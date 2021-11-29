function limpar() {
    document.getElementById("firstM").value = "";
    document.getElementById("firstN").value = "";
    document.getElementById("secondM").value = "";
    document.getElementById("secondN").value = "";
    document.getElementById("display").value = "";
}

function calcularPosicao() {
    var firstM = Number(document.getElementById("firstM").value);
    var firstN = Number(document.getElementById("firstN").value);
    var secondM = Number(document.getElementById("secondM").value);
    var secondN = Number(document.getElementById("secondN").value);

    var resultado = "";

    if (firstM === secondM) {
        resultado += "Posição Paralela";
        if (firstN === secondN) {
            resultado += "Posição Coincidente"
        }
    } else {
        resultado += "Posição Concorrente";
        if ((firstM * secondM) == -1) {
            resultado += "Posição Perpendicular"
        }
    }
    document.getElementById("display").value = `${resultado}`
}