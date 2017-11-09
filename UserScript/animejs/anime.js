(function () {
'user strict';

var doc = document.getElementsByClassName("hoge")

doc[0].addEventListener('mouseover', function (e) {
    anime ({
        targets: '.hoge',
        translateX: 250
    });    
});
})();

