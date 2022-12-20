const EventEmitter = require("events");
const emitter = new EventEmitter()

// register a listener
emitter.on("messageLogged", ()=>{
    console.log("Listener Called")
})

// emit an event
emitter.emit("messageLogged")

