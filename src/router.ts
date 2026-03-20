import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './Pages/Homepage.vue'
import AlbumDetailPage from './Pages/AlbumDetailPage.vue'

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/album/:slug',
        name: 'album-detail',
        component: AlbumDetailPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }

        return { top: 0 }
    }
})

export default router
