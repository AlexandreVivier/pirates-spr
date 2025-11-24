import { createRouter, createWebHistory } from 'vue-router'
import SelectionScreen from '../components/SelectionScreen.vue'
import FightScreen from '../components/FightScreen.vue'
import NewGame from '@/components/NewGame.vue'

const routes = [
    { path: '/simple', component: SelectionScreen },
    { path: '/fight', component: FightScreen },
    { path: '/adventure', component: SelectionScreen },
    { path: '/', component: NewGame },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
