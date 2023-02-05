let chattings = {
    0:[
        {
            id: 0,
            sender: "root",
            message: "rootMessage",
            room: 0
        }
    ]
}

export const getChatting = (room) =>{
    return chattings[room];
}

export const sendChatting = (sender, message, room) =>{
    if(!chattings[room]) chattings[room] = [];
    let id = chattings[room].length;
    chattings[room].push({id, sender, message, room});

    return chattings[room][id];
}