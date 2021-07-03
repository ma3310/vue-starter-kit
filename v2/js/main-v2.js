/* Vue 实例对象中有两个属性：el 和 data。el属性的作用是将Vue实例绑定到id为App的DOM中，data用于数存储 */
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello, world!",
  },
});
