function percorreArray(trsPacientes, comportamento) {
  for (var i = 0; i <= trsPacientes.length - 1; i++ ) {
    var trPacienteAtual = trsPacientes[i];
    comportamento(trPacienteAtual);
  }

}
