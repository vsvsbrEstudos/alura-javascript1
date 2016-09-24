/*
var tdPeso1 = document.getElementById("peso-1");
var tdAltura1 = document.getElementById("altura-1");

//nomes podem ser string como altura ou nome mesmo como em peso
var paciente1 = {peso: tdPeso1.textContent, "altura": tdAltura1.textContent};


var tdPeso2 = document.getElementById("peso-2");
var tdAltura2 = document.getElementById("altura-2");

//nomes podem ser string como altura ou nome mesmo como em peso
var paciente2 = {peso: tdPeso2.textContent, "altura": tdAltura2.textContent};
var pacientes = [paciente1, paciente2];
*/

var trsPacientes = document.getElementsByClassName('paciente');

for (var i = 0; i <= trsPacientes.length - 1; i++ ) {
  var trPaciente = trsPacientes[i];

  var paciente = {
        nome:   trPaciente.getElementsByClassName("info-nome")[0].textContent,
        peso:   trPaciente.getElementsByClassName("info-peso")[0].textContent,
        altura: trPaciente.getElementsByClassName("info-altura")[0].textContent };

  if (paciente.altura != 0) {
    var imc = paciente.peso / (paciente.altura * paciente.altura);

    var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
    tdImc.textContent = imc;

    console.log(imc);
  }
  else {
    console.log("Altura não pode ser 0!");
  }

}
