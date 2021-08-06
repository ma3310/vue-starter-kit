/* Vue 组件定义 */
Vue.component('message', Vue.extend({
  // 声明属性
  props : ['content'],

  data : function(){return {
    a: 'it worked'
  }},

  template : '<h1>content props: {{content}}</h1><h1>{{a}}</h1>',
}))


/* Vue 实例 */
const vue = new Vue({
  el: "#vue",                 // DOM 选择器，选择 HTML 元素
  
  data: {
    

  },

  filters: {
    
  }
});
