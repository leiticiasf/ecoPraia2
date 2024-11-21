import { sql } from './db.js'

sql`
drop TABLE users 
`.then(() => {
  console.log('tabela excluida');
})