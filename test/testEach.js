const items = require('../data/items');

const eachFunction = require('../each');


const result = eachFunction(items, (elements)=>{
       
        return elements * 2;
});



console.log(result);


