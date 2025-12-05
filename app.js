const EventEmitter=require('events');
const event=new EventEmitter();

event.on('greet',(name)=>{
    console.log(`hello,${name}`);
});
event.on('farewell',(name)=>{
    console.log(`goodbye,${name}`);
});

const userAction=(action,name)=>{
    event.emit(action,name);
};
const SimulateAction=()=>{
    userAction('greet','medha');
    userAction('farewell','mayya');
};
module.exports=SimulateAction;
