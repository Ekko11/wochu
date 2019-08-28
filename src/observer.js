const eventList = {}


const $on = (eventName,callback)=>{
    if(!eventList[eventName]){
        eventList[eventName] = [];
    }
    eventList[eventName].push(callback)
}



const $emit = (eventName,params)=>{
    if(eventList[eventName]){
        let arr = eventList[eventName];
        arr.map((cb)=>{
            cb(params);
        })
    }

}

const $off = (eventName,callback)=>{
    if(eventList[eventName]){
        if(callback){
            let index = eventList[eventName].indexOf(callback);
            eventList[eventName].splice(index,1);
        }else{
            eventList[eventName].length = 0;
        }
    }
}


export default {
    $on,
    $emit,
    $off
}
