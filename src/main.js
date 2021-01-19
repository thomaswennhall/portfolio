import Vue from 'vue'
import App from './App.vue'
import router from './router'
import projectsData from '@/assets/projects.json'

Vue.config.productionTip = false

new Vue({

  data() { return {
    projects: projectsData.projects 
  }},

  router,
  render: h => h(App)
}).$mount('#app')