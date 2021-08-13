const items = require('../data/items');

const filterFunction = require('../filter');


const result = filterFunction(items, (element)=>{

        if(element % 2 !== 0){

           return true 
        }

   return false     
});


console.log(result);