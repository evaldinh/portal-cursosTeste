const formulario = document.querySelector("#formulario");
const campoNome = document.querySelector("#nome");
const campoCurso = document.querySelector("#curso");
const resultado = document.querySelector("#resultado");
const botoesCursos = document.querySelectorAll(".escolher");

// Seleciona no formulário o curso escolhido no cartão.
botoesCursos.forEach(function (botao) {
  botao.addEventListener("click", function () {
    campoCurso.value = botao.dataset.curso;
    resultado.textContent = "";

    document.querySelector("#inscricao").scrollIntoView();
    campoNome.focus({ preventScroll: true });
  });
});

// Remove a mensagem anterior quando o formulário é alterado.
formulario.addEventListener("input", function () {
  resultado.textContent = "";
  campoNome.setCustomValidity("");
});

// Confirma a simulação sem enviar ou armazenar os dados.
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = campoNome.value.trim();

  if (nome.length < 2) {
    campoNome.setCustomValidity(
      "Digite um nome fictício com pelo menos duas letras."
    );
    campoNome.reportValidity();
    return;
  }

  campoNome.setCustomValidity("");

  const cursoEscolhido =
    campoCurso.options[campoCurso.selectedIndex].text;

  resultado.textContent =
    "Inscrição simulada concluída, " + nome +
    "! Curso selecionado: " + cursoEscolhido +
    ". Nenhuma matrícula real foi realizada.";

  formulario.reset();
});