import { createApp } from 'vue'
import App from './App.vue'
import './mock/index'
import 'lib-flexible/flexible'

const app = createApp(App)
app
    .mount('#app')
