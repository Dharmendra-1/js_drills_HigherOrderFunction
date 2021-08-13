const find = (elements, cb) => {
          
    for(let index = 0; index<elements.length; index++){
          
            let state = cb(elements[index]);

           if(state == true){

              return elements[index]
            
              break;
           } 
    }   
}

module.exports = find;
