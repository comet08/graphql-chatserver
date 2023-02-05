
import {createSchema } from "graphql-yoga"
import resolvers from"./resolvers.js"

export default createSchema({
    typeDefs: `
        type Chat {
            id: Int!
            message: String!
            sender: String!
            room: Int!
        }
        
        type Subscription {
            subRoom(room: Int!): Chat
        }
        
        type Query {
            chatting(room: Int!) : Chat
            hello: String!
        }
        
        type Mutation {
            send(sender: String!, message: String!, room: Int!): Chat!
        }
        
        schema {
            query: Query
            mutation: Mutation
            subscription: Subscription
        }
    `,
    resolvers: resolvers
});
