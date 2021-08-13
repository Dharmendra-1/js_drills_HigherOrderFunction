const items = require('../data/items');

const reduceFunction = require('../reduce');


const result =  reduceFunction(items, (element)=>{
     
         if(items.includes(element)){
             return true;
         }    
  
  return false;       
});


console.log(result);