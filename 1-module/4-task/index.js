/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
  let strLowerCases;
  strLowerCases = str.toLowerCase();
  
  if ( strLowerCases.includes('xxx') 
      || strLowerCases.includes('1xbet') ) {
    return true
  }
  else return false;
  
}
