
// 设置全局过滤器
Vue.filter("celsius2fahrenheit", (value)=>{
  return value * 9 / 5 + 32;
})

/* Vue 实例 */
var vue = new Vue({
  el: "#vue",                 // DOM 选择器，选择 HTML 元素绑定 vue 实例

  data: {
    // 002-hello-world-v2-seperated.html
    greetingHTML: "<font color='gray'>Hello</font>, <span style='color: red;'> HTML code</span> with vue!",
    price: 100,

  },

  filters: {
    currencyChineseYuan: function (value) {
      return "¥" + value;
    }
  }
});
