(function(){
    'use strict';

    // two way data binding (to UI)

    // UI に結びつく View Modelを作る
    var vm = new Vue({
        el: '#todo',
        data: {
            newItem: '',
            // {}でオブジェクトにする
            todos:
            [
                {
                title: 'task1',
                isDone: false
                },
                {
                title: 'task2',
                isDone: true
                },
                {
                title: 'task3',
                isDone: false
                },
            ],
        },
        methods:{
            addItem: function(){
                // e.preventDefault();
                // this.todos.push(this.newItem)
                let item = {
                    title: this.newItem,
                    isDone: false
                }
                 this.todos.push(item)
                 this.newItem = ''
            },
            deleteItem: function(index){
                if(confirm('are you sure?')){
                    this.todos.splice(index,1);
                }
            },
            purge: function(index){
                if(!confirm('delete finished?')){
                  return;
                }

                // isDone が false つまり終わっていないものだけに todosに入れるようにする
                this.todos = this.todos.filter(function(todo){
                    console.log(todo.isDone);
                    // todo.isDoneがfalseの値のみをいれるようにする
                    return !todo.isDone;
                });

                console.log(this.todos)
            },
        },
        // 動的にププロパティを算出する
        computed: {
            remaining: function() {
                let items = this.todos.filter(function(todo){
                    return !todo.isDone;
                });
                return items.length;
            }

        }

    });
})();
