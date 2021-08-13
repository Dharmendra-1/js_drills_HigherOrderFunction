
const reduce = (elements, cb) => {

const countOccurrence = {}


   for(let index = 0; index < elements.length; index++){
        
    let state =  cb(elements[index]);   
      
       if(state == true){

        if(countOccurrence[elements[index]]){
          
            countOccurrence[elements[index]] += 1;       
       
        }else{
           
            countOccurrence[elements[index]] = 1;
        }    

       }

    }      

 return countOccurrence;   
}


module.exports = reduce;