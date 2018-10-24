(function(){

'use strict';
    // Component
    // テンプレートを作成する
    let likeComponent = Vue.extend({
        // props: ['message'],
        props: {
            message: {
            type: String,
            default: 'Like is Default',
            }
        },
        // Component の data は関数で返してあげる必要がある
        data: function() {
            return {
                count: 0
            }
        },
        methods:{
            countUp: function() {
                this.count++;
            }
        },
        // htmlタグ
        template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    });

    let app = new Vue({
    el: '#app',
        components: {
        // コンポーネントを指定する
        'like-component': likeComponent
        },
    });

}());
