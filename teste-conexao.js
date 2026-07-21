const mysql = require('mysql2/promise');

async function testar() {
  const conexao = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'sistema_consultas',
  });

  console.log('Conectado com sucesso!');
  const [linhas] = await conexao.query('SHOW TABLES;');
  console.log(linhas);

  await conexao.end();
}

testar().catch((erro) => console.error('Falhou:', erro.message));