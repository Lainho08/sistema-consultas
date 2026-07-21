const db = require('./db');

async function ver() {
  const [linhas] = await db.query('SELECT * FROM paciente;');
  console.log(linhas);
  process.exit();
}

ver();