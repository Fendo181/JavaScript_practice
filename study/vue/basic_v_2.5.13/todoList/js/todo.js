(function(){
    'use strict';
    const vm = new Vue({
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
        // ページにマウントされるタイミングでデータを読み込む
        mounted: function() {
            //  parse が上手くいかなかった場合は、空の配列を返す
            this.todos = JSON.parse(localStorage.getItem('todos')) || [];
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
                this.todos = this.remaining;
            },
        },
        // 監視プロパティ(watched property)
        watch: {
            // todos[]に変更があれば、処理が実行される
            // ※todos[]の中身(title,isDone)自体の変更は監視されない
            // todos: function() {
            //     localStorage.setItem('todos', JSON.stringify(this.todos));
            //     console.log('saved');
            // }
            todos: {
                handler: function() {
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                },
                // todos[]の中身(title,isDone)の変更も監視する
                deep: true
            }
        },
        // 動的にププロパティを算出する
        computed: {
            remaining: function() {
                // let items = this.todos.filter(function(todo){
                //     return !todo.isDone;
                // });
                // return items.length;
                return this.todos.filter(function(todo){
                    return !todo.isDone;
                });
            }
        }
    });
})();
