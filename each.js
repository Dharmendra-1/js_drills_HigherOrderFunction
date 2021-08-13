const each = (elements, cb) =>{
 
    let doubleItems = [];
    
    for(let index=0; index<elements.length; index++){
         
        let value = cb(elements[index]);

        doubleItems.push(value);
    }

  return doubleItems;  
};




module.exports = each;