/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // split array using a regular expression
  // delimiters: spaces and commas
  let arr = str.split(/ |,/); 
  let arrOfNumbers = [];
  let min;
  let max;
  let resultObject = {};
  let firstArrElement = true;
  
  // make temp array with numbers only
  for (let element of arr) {
    if (isFinite(element) && element !=='') {
      arrOfNumbers.push(element);
    }; // end of if  
  }; // end of for
  
  // find mix and max in temp array
  for (let element of arrOfNumbers){
    if (firstArrElement === true) {
      min = max = element;
      firstArrElement = false;
    } // end of if 
    else {
      (+min < +element) || (min = +element);
      (+max > +element) || (max = +element);
    }           
  } // end of for
  
  //put min and max in result object
  resultObject.max = max;
  resultObject.min = min;
   
  return resultObject;
}
