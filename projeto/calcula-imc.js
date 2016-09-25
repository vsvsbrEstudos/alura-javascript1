var botao = document.getElementById('calcula-imcs');
//botao.onclick = calculaTodosImcs;

botao.addEventListener("click", function () {
  var trsPacientes = document.getElementsByClassName('paciente');

  percorreArray(trsPacientes, function (trPaciente) {
    var pacienteAtual = montaPaciente(trPaciente);

    var imc = pacienteAtual.pegaImc();

    var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
    tdImc.textContent = imc;
    console.log(imc);
  });
});

botao.addEventListener("click", function () {
  console.log("calculando imcs");
});
