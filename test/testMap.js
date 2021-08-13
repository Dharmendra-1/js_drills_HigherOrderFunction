const items = require('../data/items');

const mapFunction = require('../map');


const result = mapFunction(items, (element)=>{
     
           if(element % 2 !== 0){
               
            return false;
           
        }

 return true;
});


console.log(result);