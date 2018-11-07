import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// 1 コンポーネントを定義する
const Foo = {template: '<div>foo</div>' };
const Bar = {template: '<div>Bar</div>' };

// 2 ルートをいくつか定義します
// 各ルートは1つのコンポーネントとマッピングされる必要があります。
// このコンポーネントは実装のVue.extend()、
// またはコンポーネントオプションのオブジェクトでも構いません

const routes = [
    { path: '/foo', comment: Foo },
    { path: '/bar', comment: Bar },
];

// 3.ルータインスタンスを作成して、ルートオプションを渡します。
const router = new VueRouter({
    routes //routes: routesの短縮表記
});

// 4. rootとなるインスタンスを生成して、マウントします。
const app = new Vue({
    router
}).$mount('#app');
