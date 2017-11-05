(function () {
    'use strict';

    var panels = document.getElementsByClassName('panel');
    var spin = document.getElementById('spin');
    var spinspeed = 1000;

    // img array
    var slot_card = [
        'seven.png',
        'bell.png',
        'cherry.png'
    ];
    
    var timers = [];

    var stopCount = 0;

    function runSlot(n) {
        var message = document.getElementById('message');
        message.innerHTML = "";
        timers[n] = setTimeout(function() {
            panels[n].children[0].src = 
            'img/' +  
            slot_card[Math.floor(Math.random() * slot_card.length)];
            // console.log(n)
            // 再帰
            runSlot(n)
        }, spinspeed);
    }

    function stopPanel(params) {
        var i;
        for (i =0; i < panels.length; i++){
            panels[i].children[1].addEventListener('click', 
            function(){
                // ata-index number
                console.log(this.dataset.index)
                if (this.className.indexOf('inactive') !== -1) {
                    // 処理が止まる
                    return;
                }
                clearTimeout(timers[this.dataset.index]);
                stopCount++;
                this.className = 'stop inactive';
                if (stopCount === panels.length) {
                    stopCount = 0;
                    checkResults();
                    spin.className = '';
                }
            });
        }
    }

    function checkResults(){
        var img0 = panels[0].children[0];
        var img1 = panels[1].children[0];
        var img2 = panels[2].children[0];

        if (img0.src !== img1.src && img0.src !== img2.src) {
            img0.className = 'unmatched';
            var message = document.getElementById('message');
            message.innerHTML = "ハズレ";
        }
        if (img1.src !== img0.src && img1.src !== img2.src) {
            img1.className = 'unmatched';
            var message = document.getElementById('message');
            message.innerHTML = "ハズレ";
        }
        if (img2.src !== img0.src && img2.src !== img1.src) {
            img2.className = 'unmatched';
            var message = document.getElementById('message');
            message.innerHTML = "ハズレ";
        }

        // matchしたら
        if (img0.src == img1.src && img0.src == img2.src) {
            img0.className = 'matched';
            img1.className = 'matched';
            img2.className = 'matched';
            
            var message = document.getElementById('message');
            message.innerHTML = "当たり";
        }

    }

    stopPanel()

    spin.addEventListener('click',function () {
        var i;
        // inactiveが含まれていたら
        if (this.className.indexOf('inactive') !== -1) {
            // 処理が止まる
            return;
        }
        this.className = 'inactive';
        for (i = 0; i < panels.length; i++){
            runSlot(i)
            panels[i].children[0].className = '';
            panels[i].children[1].className = 'stop';
        }
    });
})();
