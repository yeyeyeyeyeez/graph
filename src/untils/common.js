export let _Vue;
export default{
  install(Vue){
    if (this.installed && _Vue === Vue) return;
    this.installed = true;
    _Vue = Vue;
    _Vue.prototype.NOTICE = true;
    _Vue.mixin({
      created: function () {
        //  if (this.NOTICE)
      },
      mounted() {
      },
      methods: {
        test: function () {
          console.log("mixin test");
        }
      }
    });
    //节流函数
    _Vue.prototype.$throttle = (method, context) => {
      clearTimeout(method.tId);
      method.tId = setTimeout(function () {
        method.call(context);
      }, 500);
    };
  }
}