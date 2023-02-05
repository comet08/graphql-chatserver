import { getChatting, sendChatting } from"./db.js";
import {createPubSub } from "graphql-yoga"
const pubsub = createPubSub();


const NEW_CHAT = "NEW_CHAT"

const resolvers = {
        Query:{
                chatting: (_,{room}) =>  getChatting(room),
                hello: () =>  "Hello"
        },
        Mutation:{
                send: (_,{sender, message, room}) => {
                      
                        const newChat =  sendChatting(sender, message, room);
                        console.log(newChat);
                        pubsub.publish(`${NEW_CHAT}${room}`, {
                                subRoom: newChat
                            }
                        )

                        return newChat;
                },
        },
        Subscription:{
                subRoom: {
                        subscribe: (_, {room})=>pubsub.subscribe(`${NEW_CHAT}${room}`)      
                }
        }
      
        
     
}

export default resolvers;