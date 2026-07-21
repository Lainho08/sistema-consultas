const mysql = require('mysql2')

const conexao = mysql.createConnection({
host: '127.0.0.1',
user: 'root',
password: 'root',
database: 'site_marcar_consulta',
});

conexao.connect((erro) => {
    if (erro) {
        console.error('Poxa, algo deu errado na conexão:', erro.message);
        return;
    }
    
    console.log('Sucesso absoluto, O Node.js já está conectado ao MySQL!');
    
    // Boa prática: encerrar a conexão após o teste para liberar memória
    conexao.end();
});

