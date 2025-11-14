import { createRouter, createWebHistory } from 'vue-router'
import SelectionScreen from '../components/SelectionScreen.vue'
import FightScreen from '../components/FightScreen.vue'

const routes = [
    // { path: '/', redirect: '/selection' },
    // { path: '/selection', component: SelectionScreen },
    { path: '/', component: SelectionScreen },
    { path: '/fight', component: FightScreen },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
