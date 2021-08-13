const items = require('../data/items');

const findFunction = require('../find');

const result = findFunction(items, (element)=>{
    
       if(element > 2){      
        return true;
       }

 return false;
})

console.log(result);