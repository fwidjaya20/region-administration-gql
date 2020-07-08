import "reflect-metadata";
import { buildTypeDefsAndResolvers } from "type-graphql";
import { ApolloServer, makeExecutableSchema } from "apollo-server";
import { GraphQLSchema } from "graphql";
import ProvinceResolver from "./resolvers/province/province.resolver";
import RegencyResolver from "./resolvers/regency/regency.resolver";
import DistrictResolver from "./resolvers/district/district.resolver";
import VillageResolver from "./resolvers/village/village.resolver";
import container from "./container";

const createSchema = async (): Promise<GraphQLSchema> => {
    const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
        container: container,
        resolvers: [
            ProvinceResolver,
            RegencyResolver,
            DistrictResolver,
            VillageResolver,
        ],
        validate: false,
        globalMiddlewares: []
    });
    return makeExecutableSchema({ typeDefs, resolvers });
}

const createServer = async (schema: GraphQLSchema): Promise<ApolloServer> => {
    return new ApolloServer({
        schema: schema,
        cors: true,
        tracing: true,
        debug: process.env.GQL_ENV != "production",
        playground: process.env.GQL_ENV != "production",
        introspection: process.env.GQL_ENV != "production",
    });
};

const runServer = async (server: ApolloServer) => {
    const port = process.env.GQL_PORT || 6055;
    const serverInfo = await server.listen(port)
    console.log(`Your server already running at port ${serverInfo.port}`);
}

createSchema()
    .then(createServer)
    .then(runServer)
    .catch(console.error);