import Fastify from "fastify"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient(
    {
        log: ['query'],
    }
)

/* Funcao assincrona - a primeira funcao a ser chamada e executada*/
async function start() {
    /* criando o servidor... */

    //imprime na tela status da aplicacao
    const fastify = Fastify({ logger: true })
    //definindo primeira rota: http://localhost:3939/bolao/contagem
    fastify.get('/bolao/contagem', async () => {
        const count = await prisma.pool.count()
        return { count }

    })
    await fastify.listen({ port: 3939 })
}

start()