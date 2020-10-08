const { default: messageReducer,sendMessage } = require("./messageReducer");

let state ={
    AllMessages: [
        { dialogId: 1, messageId: 9629, message: "helllo", isMine: true },
        { dialogId: 1, messageId: 9649, message: "ho", isMine: false },
        { dialogId: 1, messageId: 9629, message: "hi", isMine: true },
        { dialogId: 1, messageId: 9669, message: "op", isMine: false },
        { dialogId: 2, messageId: 9629, message: "hi, men", isMine: true },
        { dialogId: 2, messageId: 9649, message: "pnx", isMine: false },
        { dialogId: 2, messageId: 9629, message: "ok", isMine: true },
        { dialogId: 2, messageId: 9669, message: "pok", isMine: false },
      ]
}
let action = sendMessage("Hello , how are you")

it('new message should to be',()=>{
    
    let newText = messageReducer(state,action);
    expect(newText.AllMessages.length).toBe(9);
})

it('count message should be',()=>{

    let newText = messageReducer(state,action);
    expect(newText.AllMessages[8].message).toBe("Hello , how are you");
})