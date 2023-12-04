import "reflect-metadata";
import fastify from "fastify";
import { ApolloServer } from "apollo-server-fastify";
import { buildSchema } from "type-graphql";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";
import { OperadoresResolver } from "../modules/operadores/operadores.resolver";
import { AuthResolver } from "../auth/auth.resolver";
import authValidator from "../auth/auth";

export const apolloInit = async () => {
    const fastifyServer = fastify();
    
    const schema = await buildSchema({
        resolvers: [                        
            OperadoresResolver,   
            AuthResolver,                                                                                                                                     
        ],
        emitSchemaFile: true,    
        authChecker: authValidator
    })
    
    const apolloServer = new ApolloServer({
        schema,
        context: ({ request }) => {
            const context = {
                request,
                token: request?.headers?.authorization
            }
        
            return context;
        },       
        plugins: [
            process.env.NODE_ENV === "production"
              ? ApolloServerPluginLandingPageDisabled()
              : ApolloServerPluginLandingPageGraphQLPlayground(),
          ],
    })

    await apolloServer.start();
    await fastifyServer.register(apolloServer.createHandler({ cors: { origin: "*", credentials: true } }));     

    return fastifyServer;
};