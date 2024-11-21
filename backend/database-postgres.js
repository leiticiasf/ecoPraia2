import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listPontoDeColeta() {
    const pontoDeColeta = await sql`select * from pontoDeColeta`;
    return pontoDeColeta;
  }


  async createPonto(ponto) {
    const id = randomUUID();
    const { name, descricao, complemento, endereco  } = ponto;

    await sql`insert into pontoDeColeta (id, name, endereco, descricao, complemento) 
              values (${id}, ${name}, ${endereco}, ${descricao}, ${complemento})`;
  }

  async updatePonto(id, ponto) {
    const { name, endereco, descricao, complemento } = ponto;

    await sql`update pontoDeColeta set 
    name = ${name},
    endereco = ${endereco},
    descricao = ${descricao},
    complemento = ${complemento}
    where id = ${id}
`;

  }

  async deletePonto(id) {
    await sql`delete from pontoDeColeta where id = ${id}`

  }

  async listUsers() {
    const users = await sql`select * from users`;
    return users;
  }

  async createUser(user) {
    const id = randomUUID();
    const name = user.name;
    const password = user.password;
    
    
    await sql`insert into users (id, name, password)
    values (${id}, ${name}, ${password} )`
  }

  async updateUser(id, user) {
    const name = user.name;
    const password = user.password;

    await sql`update users set 
        name = ${name},
        password = ${password},
        where id = ${id}
    `;
  }

  async deleteUser(id) {
    await sql`delete from users where id = ${id}`
  }

  async loginUser(user) {
    const name = user.name;
    const password = user.password;

    const users = await sql`select * from users where name = ${name}`;
    if (users.length === 0) {
        throw new Error('Usuário não encontrado.');
    }

    const foundUser = users[0];

    // Verificação de senha
    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatch) {
        throw new Error('Senha incorreta.');
    }

    return { id: foundUser.id, name: foundUser.name };
}
}