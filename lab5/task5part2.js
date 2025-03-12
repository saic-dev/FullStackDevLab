
const events = require('events');

class Eventm extends events.EventEmitter{
    constructor(eventName){
        super()
        this.eventName = eventName;
        this.startTime = null;
        this.endTime = null;
    }

    startEvent(){
        this.startTime = Date.now()
        this.emit('started', this.eventName, this.startTime)
    }

    updateEventStatus(status){
        if(status === 'in-progress'){
            this.emit('in-progress', this.eventName, Date.now());
        }else if(status === 'completed'){
            this.emit('Completed');
        }
    }
}


module.exports = {
    Eventm
}