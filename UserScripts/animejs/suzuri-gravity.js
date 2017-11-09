(function () {
'user strict';
    var doc = document.getElementsByClassName("js-product")

    doc[0].addEventListener('mouseover', function (e) {
        anime({
            // 落下する
            targets: "."+doc[0].classList[0],
            translateX: [-50,100],
            duration: 3000,
            easing: 'easeInOutSine'
        });
    });
})();