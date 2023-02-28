function olamundo() {
 alert ('Olá Mundo');
}

function calcularconsumo() {
 var km, gas, consumo;

km = document.getElementById('km').value
gas = document.getElementById('gas').value

consumo= km / gas

document.getElementById("nome").innerHTML = consumo + " KM/L"
}
