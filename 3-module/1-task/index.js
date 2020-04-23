/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  // ваш код...
  let arrayOfUsernames = users.map(item => item.name);  
  return arrayOfUsernames;
}
