
const filter = (elements, cb) => {

    let oddNumber = [];

     for(let index=0; index<elements.length; index++){
       
          let state = cb(elements[index]);

          if(state == true){

               oddNumber.push(elements[index]);
          }

     }

  return oddNumber;   
}



module.exports = filter;