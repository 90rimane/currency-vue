import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import ConvertView from './views/ConvertView.vue'
import RateView from './views/RateView.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            component: HomeView,
            path: '/'
        },
        {
            component: ConvertView,
            path: '/convert'
        },
        {
            component: RateView,
            path: '/rate'
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
