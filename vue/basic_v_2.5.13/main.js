(function(){

'use strict';
    // Component
    // テンプレートを作成する
    let likeComponent = Vue.extend({
        template: '<button>Likeだよ!</button>'
    });

    let app = new Vue({
    el: '#app',
        components: {
            // コンポーネントを指定する
            'like-component': likeComponent
        },
    });

}());
