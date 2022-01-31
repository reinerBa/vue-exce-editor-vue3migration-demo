import { createApp } from 'vue'
import App from './App.vue'

import vueexceleditor from './plugin/main'

let app = createApp(App)
app.use(vueexceleditor)
app.mount('#app')
