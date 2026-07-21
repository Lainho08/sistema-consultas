const formCadastro = document.getElementById('form-cadastro');

if (formCadastro) {
  formCadastro.addEventListener('submit', async function (evento) {
    evento.preventDefault(); // impede a página de recarregar

    const dados = {
      nome_completo: document.getElementById('nome_completo').value,
      email: document.getElementById('email').value,
      cpf: document.getElementById('cpf').value,
      data_nascimento: document.getElementById('data_nascimento').value,
      sexo: document.getElementById('sexo').value,
      telefone: document.getElementById('telefone').value,
      senha: document.getElementById('senha').value,
    };

    const resposta = await fetch('/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });

    const resultado = await resposta.json();
    console.log(resultado);
  });
}

