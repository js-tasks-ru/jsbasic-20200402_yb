/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  let arr = str.split('-'); 
  if (arr[0] !=='') arr[0] = arr[0].toLowerCase(); // make first letter lowercase e.g."Who-wants-apple"
  for (let i = 1; i < arr.length; i++) {
     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length); //making first letter
  }
    arr = arr.join('');
        
  return arr;
}
