/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  // ваш код...
  let resultStr = '';
  let userNames = data.filter(item => item.age <= age);
  for (let element of userNames) {
    if (resultStr === '') {
      resultStr = resultStr + element.name + ', ' + element.balance;
    }
    else {
      resultStr = resultStr + '\n' + element.name + ', ' + element.balance;
    }
  }
  //resultStr =
  return resultStr;
}
