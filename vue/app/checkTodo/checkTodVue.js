new Vue({
    el: '#my-app',
    data: {
      newTask: '',
      todos: [
        { task: '牛乳を買う', isCompleted: false },
        { task: 'プロテインを買う', isCompleted: true },
        { task: 'スポーツドリンクを買う', isCompleted: false }
      ]
    },
    methods: {
      addTodo: function() {
        if( this.newTask == '' ) return;
        this.todos.push(
          { task: this.newTask, isCompleted: false }
        );
        this.newTask = '';
      },
      deleteTodo: function(todo) {
        var index = this.todos.indexOf(todo)
        // index位置から一つ取り除く
        this.todos.splice(index,1)
      },
      editTodo: function(todo){
        //   要素の一部分を変更する。
        // this.$set(todo, 'isCompleted', false)

        // 要素を全部まるめて、置き換える。
        var index = this.todos.indexOf(todo)
        this.$set(this.todos, index,  { task: 'プロテインを買う', isCompleted: false })
      },
    },
    computed: {
      remains: function() {
        var counter = 0;
        for(var i=0; i<this.todos.length; i++) {
          if(!this.todos[i].isCompleted) {
            counter ++;
          }
        }
        return counter;
      }
    }
  });