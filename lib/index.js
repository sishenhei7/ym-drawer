import YmDrawerHorizontal from './YmDrawerHorizontal.vue';

const myPlugin = {
  install(Vue) {
    Vue.component('YmDrawerHorizontal', YmDrawerHorizontal);
  },
};

export default myPlugin;