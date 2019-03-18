import YmDrawerHorizontal from './YmDrawerHorizontal.vue';
import YmDrawerVertical from './YmDrawerVertical.vue';

const myPlugin = {
  install(Vue) {
    Vue.component('YmDrawerHorizontal', YmDrawerHorizontal);
    Vue.component('YmDrawerVertical', YmDrawerVertical);
  },
};

export default myPlugin;