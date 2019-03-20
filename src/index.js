module.exports = function check(str, bracketsConfig) {
  var bufArray = [];
  var initArray = str.split('');
  return (initArray.every(function(item) {
    for (var i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i].indexOf(item) == -1) continue;
      if (bracketsConfig[i].indexOf(item) == 0 && bracketsConfig[i][0] != bracketsConfig[i][1]) {bufArray.push(i); return true;};
      if (bracketsConfig[i].indexOf(item) == 1 && bufArray[bufArray.length-1] == i) {bufArray.pop(i); return true;};
      if (bufArray[bufArray.length-1] == i) {bufArray.pop(i); return true;} else {bufArray.push(i); return true;};
    }
    return false;
  }) && bufArray.length == 0);
}
