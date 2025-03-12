const eventmn = require('./task5part2')

let fevent = new eventmn.Eventm('New Session');

fevent.on('started', (eventName, startTime)=>{
    console.log(`${eventName} started at ${new Date(startTime).toLocaleString()}`)
})

fevent.on('in-progress', (eventName, startTime)=>{
    console.log(`${eventName} is in-progress at ${new Date(startTime).toLocaleString()}`)
})
fevent.on('Completed', (eventName, startTime)=>{
    console.log(`Completed`);
})

fevent.startEvent()
setTimeout(()=>{fevent.updateEventStatus('in-progress')}, 2000);
setTimeout(()=>{fevent.updateEventStatus('completed')}, 10000);