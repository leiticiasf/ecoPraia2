
import { fastify } from 'fastify';
import cors from '@fastify/cors';
import { DatabasePostgres } from './database-postgres.js';

const server = fastify();
const databasePostgres = new DatabasePostgres();

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/pontoDeColeta', async (request, reply) => {
    const body = request.body;
        let error = {};
        if(!body.name){
            error.name = 'Valor name não foi informado.'
    
        } if (!body.endereco){
            error.endereco = 'Valor endereço não foi informado.'
        }
     if (!body.complemento){
        error.complemento = 'Valor complemento não foi informado.'
         }
         if (!body.descricao){
    error.descricao = 'Valor descrição não foi informado.'
        }

    if(body.name && body.endereco){
        await databasePostgres.createPonto(body);
        return reply.status(201).send();

    }else{
        return reply.status(400).send(error);

    }
})

// READE
server.get('/pontoDeColeta', async () => {
    const pontoDeColeta = await databasePostgres.listPontoDeColeta();
    return pontoDeColeta;
});

// UPDATE
server.put('/pontoDeColeta/:id', async (request, reply) => {
    const pontoID = request.params.id;
    const body = request.body;
  

    let error = {};

    if(!body.name){
        error.name = 'Valor name não foi informado.'

    } if (!body.endereco){
        error.endereco = 'Valor endereço não foi informado.'
    }
    if (!body.complemento){
    error.complemento = 'Valor complemento não foi informado.'
     }
     if (!pontoID){
        error.complemento = 'Valor ID não foi informado.'
         }
     if (!body.descricao){
error.descricao = 'Valor descrição não foi informado.'
    }
    if(body.name && body.endereco && pontoID){
        await databasePostgres.updatePonto(pontoID, body);
        return reply.status(201).send();

    }else{
        return reply.status(400).send(error);

    }
})

// DELETE
server.delete('/pontoDeColeta/:id', async (request, reply) => {
    const pontoID = request.params.id;

    if (!pontoID) {
        return reply.status(400).send({ error: 'ID do ponto de coleta não foi informado.' });
    }

    await databasePostgres.deletePonto(pontoID);

    // Responder com sucesso
    return reply.status(204).send();
});

// CREATE
server.post('/users', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createUser(body);
    return reply.status(201).send();
})

// READE
server.get('/users', async () => {
    const users = await databasePostgres.listUsers();
    return users;
});

// UPDATE
server.put('/users/:id', async (request, reply) => {
    const userID = request.params.id;
    const body = request.body;
    await databasePostgres.updateUser(userID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/users/:id', async (request, reply) => {
    const userID = request.params.id;

    if (!userID) {
        return reply.status(400).send({ error: 'ID do usuário não foi informado.' });
    }

    await databasePostgres.deleteUser(userID);

    return reply.status(204).send();
});


server.listen({ port: 3333 }, () => {
    console.log('Servidor rodando em http://localhost:3333');
});