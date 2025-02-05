const os = require('os');
console.log("Total memory: " + os.totalmem());
function getMemory() {
    console.log("Free memory Percentage: " + (os.freemem()/os.totalmem())*100);
}
setInterval(getMemory,5000);


