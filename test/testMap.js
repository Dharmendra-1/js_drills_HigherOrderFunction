const items = require('../data/items');

const mapFunction = require('../map');


const result = mapFunction(items, (element)=>{
     
         return element*element 
  });


console.log(result);