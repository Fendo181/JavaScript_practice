(function(){
    'use strict';

    // two way data binding (to UI)

    // UI に結びつく View Modelを作る
    var vm = new Vue({
        el: '#app',
        data: {
            name: 'endo!'
        }
    });
})();
