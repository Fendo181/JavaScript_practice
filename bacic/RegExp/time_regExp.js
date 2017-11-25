(function () {
'user strict';

var s = '2017-11-05';
var rs = s.match(/(\d{4})[-\/](\d{2})[-\/](\d{2})/);
console.log(rs[1]+'年'+rs[2]+'月'+rs[3]+'日'); //2017年11月05日

})();