/* Vue 实例 */
var vue = new Vue({
  el: "#vue",                 // DOM 选择器，选择 HTML 元素
  data: {
    greeting: "<font color='gray'>Hello</font>, <span style='color: red;'>vue!</span>",
    price: 100,
  },
  filters: {
    currencyChineseYuan(value) {
      return "¥" + value;
    }
  }
});
