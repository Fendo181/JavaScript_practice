(function(){
    'use strict';

    // two way data binding (to UI)

    // UI に結びつく View Modelを作る
    var vm = new Vue({
        el: '#todo',
        data: {
            todos: [
                'task 1',
                'task 2',
                'task 3',
            ]
        }
    });
})();
