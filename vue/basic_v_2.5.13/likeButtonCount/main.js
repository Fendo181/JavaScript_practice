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
                // イベントの発火には emit という命令を使う
                this.$emit('increment');
            }
        },
        // htmlタグ
        template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    });

    const app = new Vue({
    el: '#app',
        components: {
        // コンポーネントを指定する
        'like-component': likeComponent
        },
        data: {
            total: 0
        },
        methods: {
            incrementTotal: function() {
                this.total++;
            }
        },
    });
}());
