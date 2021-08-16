
const reduce = (elements, cb, startingValue) => {

    if(startingValue == undefined){
        startingValue = elements[0]
        elements = elements.slice(1);
        }


   for(let index = 0; index < elements.length; index++){
        
     startingValue = cb(elements[index], startingValue);   
      
    }      

 return startingValue;   
}


module.exports = reduce;