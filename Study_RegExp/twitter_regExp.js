(function () {
'user strict';

var s = "@fendo181";
var re = s.match(/(@[\w]{1,15})/);

console.log(re[1]); //@fendo181

})();