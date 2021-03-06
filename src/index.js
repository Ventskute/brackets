module.exports = function check(str, bracketsConfig) {
  let string = str;
  for (let j = 0; j < 5; j++)
    for (let i = 0; i < bracketsConfig.length; i++) {
      const brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
      while (true) {
        if (string.includes(brackets)) {
          string = string.replace(brackets, '');
        } else break;
      }
    }

  return string === '';
}
