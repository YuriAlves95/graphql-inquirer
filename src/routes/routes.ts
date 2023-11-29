import "reflect-metadata";
import fastify from "fastify";
import { ApolloServer } from "apollo-server-fastify";
import { buildSchema } from "type-graphql";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";
import { AgendaResolver } from "../modules/agenda/agenda.resolver";
import { EntidadesResolver } from "../modules/entidades/entidades.resolver";
import { CidadesResolver } from "../modules/cidades/cidades.resolver";
import { SistemasclientesResolver } from "../modules/sistemasclientes/sistemasclientes.resolver";
import { SistemasResolver } from "../modules/sistemas/sistemas.resolver";

export const apolloInit = async () => {
    const fastifyServer = fastify()
    
    const schema = await buildSchema({
        resolvers: [            
            AgendaResolver,
            EntidadesResolver,
            CidadesResolver,
            SistemasclientesResolver,
            SistemasResolver,                                                                                                                              
        ],
        emitSchemaFile: true,
    })
    
    const apolloServer = new ApolloServer({
        schema,
        plugins: [
            process.env.NODE_ENV === "production"
              ? ApolloServerPluginLandingPageDisabled()
              : ApolloServerPluginLandingPageGraphQLPlayground(),
          ],
    })

    await apolloServer.start();
    await fastifyServer.register(apolloServer.createHandler({ cors: { origin: "*", credentials: true } }));
    //adicionar aqui todos os registros do fastify    

    return fastifyServer;
};