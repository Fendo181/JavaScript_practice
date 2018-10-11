(function(){
    'use strict';

    // two way data binding (to UI)

    // UI に結びつく View Modelを作る
    var vm = new Vue({
        el: '#todo',
        data: {
            newItem: '',
            todos: [
                'task 1',
                'task 2',
                'task 3',
            ]
        },
        methods:{
            addItem: function(e){
                // e.preventDefault();
                // this.todos.push(this.newItem)
                 this.todos.push(this.newItem)
                 this.newItem = ''
            },
            deleteItem: function(index){
                if(confirm('are you sure?')){
                    this.todos.splice(index,1);
                }
            }
        }
    });
})();
