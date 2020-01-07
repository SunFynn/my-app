import Vue from "vue";

function create(Component, props) {
  //组件的构造函数如何获取？
  // 1。Vue.extend()
  // 2。render
  const xm = new Vue({
    //h是createElement，返回虚拟dom，VNode
    //需要挂载才会生成真实dom
    render: h => h(Component, { props })
  }).$mount(); //不指定宿主元素，则会创建真实dom，但是不会追加操作

  //获取真实·的dom
  document.body.appendChild(xm.$el);

  const comp = xm.$children[0];
  comp.remove = function() {
    document.body.removeChild(xm.$el);
    xm.$destroy();
  };

  return comp;
}

export default create;
