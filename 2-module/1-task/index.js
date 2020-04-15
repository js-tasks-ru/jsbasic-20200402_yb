/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  // ваш код...
  let sumOfSalaries = 0;
  
  for (let key in salaries) {
    if (typeof salaries[key] ==='number'){
      sumOfSalaries = sumOfSalaries + salaries[key];      
    }  
  }
return sumOfSalaries; 
}