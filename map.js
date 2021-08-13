const map = (elements, cb) =>{
    
  let sqrtNumberOfArray = []

  for(let index=0; index<elements.length; index++){
    
       let sqrtNumber =  cb(elements[index]);

       sqrtNumberOfArray.push(sqrtNumber );
  }

  
  return sqrtNumberOfArray;
}


module.exports = map;