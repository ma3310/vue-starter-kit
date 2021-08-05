/* Vue 实例 */
var vue = new Vue({
  el: "#vue",                 // DOM 选择器，选择 HTML 元素
  data: {
    greeting: "<font color='gray'>Hello</font>, <span style='color: red;'> HTML code</span> with vue!",
    price: 100,
  },
  filters: {
    currencyChineseYuan(value) {
      return "¥" + value;
    }
  }
});
