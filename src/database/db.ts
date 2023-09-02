import pgPromise, { IMain } from 'pg-promise';


const pgp: IMain = pgPromise({});
const db = pgp({
  host: 'localhost', // Host do PostgreSQL
  port: 3306, // Porta do PostgreSQL
  database: 'challenge-10', // Nome do seu banco de dados
  user: 'root', // Nome de usuário do PostgreSQL
  password: '1005', // Senha do PostgreSQL
});

export { db };
