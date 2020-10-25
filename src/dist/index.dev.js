"use strict";

module.exports = function check(str, bracketsConfig) {
  var string = str;

  for (var j = 0; j < 5; j++) {
    for (var i = 0; i < bracketsConfig.length; i++) {
      var brackets = bracketsConfig[i][0] + bracketsConfig[i][1];

      while (true) {
        if (string.includes(brackets)) {
          string = string.replace(brackets, '');
        } else break;
      }
    }
  }

  return string === '';
};