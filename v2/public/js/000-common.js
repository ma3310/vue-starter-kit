import Vue from 'vue';

/* Vue 组件定义 */
Vue.component('message', Vue.extend({
    // 声明属性
    props: [
        'content',
    ],

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

// 设置全局过滤器
Vue.filter("celsius2fahrenheit", (value)=>{
    return value * 9 / 5 + 32;
})

/* Vue 实例 */
const vue = new Vue({
    el: "#vue",                 // DOM 选择器，选择 HTML 元素

    data: {                     // devtool 里通过 vue.$data 访问s
        greeting: "Greeting from vue.data.greeting!",
        greetingHTML: "<font color='gray'>Hello</font>, <span style='color: red;'> HTML code</span> with vue!",
        startTime: new Date(),
        price: 100,             // 价格
        degreeInCelsius: 37,    // 摄氏度
    },

    filters: {
        currencyChineseYuan: function (value) {
            return "¥" + value;
        }
    },

    computed: {
        startTimeInUTC () {
            if (typeof this.startTime === "string") {
                this.startTime = new Date(this.startTime);
                return this.startTime.toUTCString();
            }
            else {
                return this.startTime.toUTCString();
            }
        },
    },

    methods: {
        // v-on:click="now" 绑定 #vue 内元素
        log_now (isConsoleLog = true) {
            if (isConsoleLog) {
                console.log(new Date().toLocaleTimeString());
            }
        },
    },
});


console.log(vue);
window.vue = vue;
