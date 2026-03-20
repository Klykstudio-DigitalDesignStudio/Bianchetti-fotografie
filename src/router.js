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
    routes
})

export default router
