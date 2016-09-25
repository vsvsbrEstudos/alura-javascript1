function montaPaciente(trPaciente) {
  var paciente = {
    nome:   trPaciente.getElementsByClassName("info-nome")[0].textContent,
    peso:   trPaciente.getElementsByClassName("info-peso")[0].textContent,
    altura: trPaciente.getElementsByClassName("info-altura")[0].textContent,
    pegaImc : function(){
      if (this.altura != 0) {
        var imc = this.peso / (this.altura * this.altura);

        return imc;
      }
      else {
        console.log("Altura não pode ser 0!");
      }

    }
  };

  return paciente;
}
