import {createYoga, createPubSub } from "graphql-yoga"
import { createServer } from 'http'

import schema from './graphql/schema.js'



const yoga = new createYoga({
    schema: schema,
    graphqlEndpoint: "/playground",
    playground: "/playground",
    subscriptions: "/subscriptions",
    // pubsub : pubsub

})

const server = createServer(yoga);

const options ={
    cors: {
        credential: true,
        origin :"*"
    },
    endpoint: "/graphql",   // graphql, sub, playground(gui) 분리
    subscriptions: '/subscriptions',
    playground: '/playground',
};

server.listen(4000,()=>{
    console.log("GraphQL server 4000")
})

