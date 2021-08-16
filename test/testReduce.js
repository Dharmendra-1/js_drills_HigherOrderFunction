const items = require('../data/items');

const reduceFunction = require('../reduce');


const result =  reduceFunction(items, (element, startingValue)=>{
                            
        return startingValue += element       
}, 5);


console.log(result);