// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


//全局指令
/**
 * 
 * 只要定义了全局指令，在每一个指令里都可以用这个指令
 * 
 * 
 * 
 * / */


//局部指令
//在哪个组件里定义就只能在改组件里使用


Vue.directive('focus',{
  bind(el,binding,vnode,oldVnode){
    console.log(el)
    // el.style.background="red"
  },
  inserted(el,binding,vnode,oldVnode){
    el.focus()
  },
  update(el,binding,vnode,oldVnode) {
    
  },
  componentUpdated(el,binding,vnode,oldVnode){

  },
  unbind(el,binding,vnode,oldVnode){

  }
})
Vue.directive('sync',{
    bind(el,binding,vnode,oldVnode){
      // console.log(el)
      // console.log(binding)
      // el.value=binding.value
    },
    inserted(el,binding,vnode,oldVnode){
      el.value=binding.value;
      // console.log(vnode)
      el.addEventListener('input',e=>{
        // console.log(el.value) 
        if(typeof vnode.context[binding.expression] !=='undefined'){
          if(binding.modifiers.number){
            vnode.context[binding.expression]=Number(el.value.replace(/[^0-9]/g,''));
            el.value=el.value.replace(/[^0-9]/g,'')
          }else{
            vnode.context[binding.expression]=el.value
          }
        }
        // el.addEventListener('blur',e=>{

        // })
      })

    },
    update(el,binding,vnode,oldVnode){
      el.value=binding.value
    }
})

Vue.directive('listener',{
  bind(el,binding,vnode,oldVnode){
    console.log(binding)
    if(typeof binding.value !=='function'){
        throw new TypeError(`Invalid key ${binding.expression}, is not a function`)
    }
    el.addEventListener(binding.arg,(event)=>{
       if(binding.modifiers.stop){
         event.stopPropagation()
       }
       if(binding.modifiers.prevent){
        event.preventDefault();
       }
       binding.value(event)
    })
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
 
})
