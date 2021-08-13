
const flattern = (elements) => {
   
    const singleArray = [] 
    
    for(let index=0; index<elements.length; index++){
           
           if(Array.isArray(elements[index])){
               singleArray.push(...flattern(elements[index]));
           }else{
               singleArray.push(elements[index]);
           }
    }

 return singleArray;   
}

module.exports = flattern;