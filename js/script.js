const formulario = document.getElementById("form-consulta");
const mensagem = document.getElementById("mensagem-sucesso");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  mensagem.hidden = false;
  formulario.reset();
});
