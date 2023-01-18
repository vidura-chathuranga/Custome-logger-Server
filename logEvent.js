
const {format} = require("date-fns");
const {v4 :uuid} = require("uuid");

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvent = async (message) =>{
    
    const dateTime = `${format(new Date(), 'yyyy/MM/dd\tHH:mm:ss')}`;
    const longItem = `${dateTime} \t $${uuid()}\t${message}\n`;
    console.log(longItem);

    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'logs','eventLog.txt',),longItem);
    }catch(err){
        console.error(err);
    }
}

module.exports = logEvent;
