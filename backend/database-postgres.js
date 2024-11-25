import { randomUUID } from "crypto";
import { sql } from './db.js';
import bcrypt from 'bcrypt';

export class DatabasePostgres { 
  
  async listPontoDeColeta() {
    const pontoDeColeta = await sql`select * from pontoDeColeta`;
    return pontoDeColeta;
  }
  async listUsers(){
    const users = await sql`select * from users`;
    return users;
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
  async createUser (user) {
    const id = randomUUID();
    const { name, password } = user;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await sql`INSERT INTO users (id, name, password) VALUES (${id}, ${name}, ${hashedPassword})`;
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw error; // Re-throw para capturar no endpoint
    }
}

  async updateUser(id, user) {
    const {name, password} = user;

    await sql`update users set 
        name = ${name},
        password = ${password}
        where id = ${id}
    `;
  }

  async deleteUser(id) {
    await sql`delete from users where id = ${id}`
  }

  async loginUser(user, res) {
    const { name, password } = user;
    try {
        const users = await sql`SELECT * FROM users WHERE name = ${name}`;
        
        if (users.length === 0) {
            return res.status(400).json({ message: 'Usuário não encontrado.' });
        }

        const foundUser = users[0];

        // Comparar senha
        const passwordMatch = await bcrypt.compare(password, foundUser.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Senha incorreta.' });
        }

        // Login bem-sucedido
        return res.status(200).json({ id: foundUser.id, name: foundUser.name });
    } catch (erro) {
        console.error('Erro no login:', erro);
        return res.status(500).json({ message: 'Erro interno no servidor.' });
    }
}

}