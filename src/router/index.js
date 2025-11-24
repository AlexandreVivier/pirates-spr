import { createRouter, createWebHistory } from 'vue-router'
import SelectionScreen from '../components/SelectionScreen.vue'
import FightScreen from '../components/FightScreen.vue'
import NewGame from '@/components/NewGame.vue'

const routes = [
    { path: '/', component: NewGame },
    { path: '/simple', component: SelectionScreen, props: { mode: 'simple' } },
    { path: '/adventure', component: SelectionScreen, props: { mode: 'aventure' } },
    { path: '/fight', component: FightScreen },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
