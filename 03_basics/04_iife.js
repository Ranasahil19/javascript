(function chai(Port){
    //named iife
    console.log(`DB Connected on port ${Port}`);
    
})("5000");

( (name) => {
    //arrow iife
    console.log(`DB connected two ${name}`);
    
})("MongoDb")

