
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (event) {
  event.preventDefault(); //impede comportamento padrão do formulário que é recarregar a página
  //
  // <fieldset>
  //   <label for="nome">Nome:</label>
  //   <input id="campo-nome" type="text" placeholder="digite o nome do seu paciente">
  // </fieldset>
  // <fieldset class="campo-medio">
  //   <label for="peso">Peso:</label>
  //   <input id="campo-peso" type="text" placeholder="digite o peso do seu paciente">
  // </fieldset>
  // <fieldset class="campo-medio">
  //   <label for="altura">Altura:</label>
  //   <input id="campo-altura" type="text" placeholder="digite a altura do seu paciente">
  // </fieldset>

  var campoNome = document.querySelector("#campo-nome");
  var campoPeso = document.querySelector("#campo-peso");
  var campoAltura = document.querySelector("#campo-altura");

  var pacienteNovo = 	"<tr class='paciente'>"+
  "<td class='info-nome'>"+campoNome.value+"</td>"+
  "<td class='info-peso'>"+campoPeso.value+"</td>"+
  "<td class='info-altura'>"+campoAltura.value+"</td>"+
  "<td class='info-imc'></td>"+
  "</tr>";

  //var tabela = document.getElementsByName("table")[0];

  var tabela = document.querySelector("table"); //retorna sempre o primeiro elemento

  tabela.innerHTML = tabela.innerHTML + pacienteNovo;

  campoNome.value = "";
  campoPeso.value = "";
  campoAltura.value = "";
});
