const map = (elements, cb) =>{
    
  let evenNumberOfArray = []

  for(let index=0; index<elements.length; index++){
    
       let state =  cb(elements[index]);

       if(state == true){

           evenNumberOfArray.push(elements[index]);
       
        }

  }

  
  return evenNumberOfArray;
}


module.exports = map;