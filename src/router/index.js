import { createRouter, createWebHistory } from 'vue-router'
import SelectionScreen from '../components/SelectionScreen.vue'
import FightScreen from '../components/FightScreen.vue'
import NewGame from '@/components/NewGame.vue'
import AdventureTransition from '@/components/AdventureTransition.vue'

const routes = [
    { path: '/', component: NewGame },
    { path: '/simple', component: SelectionScreen, props: { mode: 'simple' } },
    { path: '/adventure', component: SelectionScreen, props: { mode: 'aventure' } },
    { path: '/fight', component: FightScreen, props: route => ({ mode: route.query.mode }) },
    { path: '/adventure/lobby', component: AdventureTransition, props: route => ({ playerName: route.query.playerName}) },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
