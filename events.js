const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//on = listen event
//emit = emit an event

customEmitter.on("eventName", (name, id)=> {
    console.log(`data received ${name} ${id}`);
});

customEmitter.on("eventName", ()=> {
    console.log("other data, logic");
});

//emit eventin üzerinde olursa eventler koşmaz
// o yüzden aşağıda olmalı
// arada olursa sadece üstünde kalan koşar
customEmitter.emit("eventName", "erdogan", 42); //run event

