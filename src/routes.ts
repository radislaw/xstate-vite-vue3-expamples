import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'

const Toggle = () => import('./components/Toggle.vue')
const Font = () => import('./components/Font.vue')

const routes = [
    {path: '/', component: Home},
    {path: '/toggle', component: Toggle},
    {path: '/font', component: Font},
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
