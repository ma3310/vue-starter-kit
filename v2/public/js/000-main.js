import Vue from 'vue';

/* Vue 组件定义 */
Vue.component('message', Vue.extend({
    // 声明属性
    props: ['content'],

    data: function () {
        return {
            age: 18
        }
    },

    // ES6 可用 String Template
    template: `
<div>
    <h1>props content: {{content}}</h1>
    <h2>data age: {{age}}</h2>
</div>  
`,
}))


/* Vue 实例 */
const vue = new Vue({
    el: "#vue",                 // DOM 选择器，选择 HTML 元素

    data: {},

    filters: {}
});

console.log(vue);
