(function () {
'user strict';

var doc = document.getElementsByClassName(".js-product")

doc[0].addEventListener('mouseover', function (e) {
    // 回転 
    anime({
        targets: '.hoge',
        rotate: 1800,
        // 段々と丸くなる 
        borderRadius: 40,
        duration: 30000
      });
});

doc[0].addEventListener('mouseout', function (e) {
    // 回転 
    anime({
        targets: '.hoge',
        rotate: 3600,
        // 段々と四角になる 
        borderRadius: 10,
        duration: 30000
      });
});
})();

