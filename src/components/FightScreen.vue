<template>
    <div class="bg-stone-100 dark:bg-stone-900 h-full">
    <div class="flex flex-col items-center w-full bg-stone-100 dark:bg-stone-900 h-screen">
        <TitleCard v-if="gameover === true"/>

        <div class="flex justify-around items-center w-full">
            <HitPoints label="Points de vie" :health="playerHealth" />
            <HitPoints label="Points de vie ennemis" :health="enemyHealth" class="flex-row-reverse"/>
        </div>

        <div v-show="gameover === true" class="flex flex-col justify-center items-center mb-4">
            <p class="text-center italic text-2xl text-stone-500 pb-6">{{ endGameMessage }}</p>
            <CommonButton label="Rejouer ?" action="/selection"/>
        </div>

        <div v-if="gameover === false" class="flex flex-col w-full min-h-screen justify-center items-center">
            <DuelingImages2 :playerSkin="playerSkins[playerChoice]" 
            :ennemySkin="enemySkins[computerChoice]"/>
            <ActionPannel @update-history="updateHistory"/>
        </div>

        <HistoryLog :logs="logs"/>
    </div>
    </div>
</template>

<script lang="js" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import ActionPannel from './ActionPannel.vue'
import HitPoints from './HitPoints.vue'
import TitleCard from './TitleCard.vue'
import HistoryLog from './HistoryLog.vue'
import CommonButton from './CommonButton.vue'
import DuelingImages2 from './DuelingImages2.vue'

const route = useRoute()

const playerName = route.query.playerName || 'Van Nistelrouye'
const allNames = ['Van Nistelrouye', 'François de Surcoup', 'Jack Marrow', 'Jungle Jane']
const ennemyName = allNames.filter(name => name !== playerName)[Math.floor(Math.random() * (allNames.length - 1))]
// console.log('Ennemy selected:', ennemyName, 'against player:', playerName)

const playerHealth = ref(3)
const enemyHealth = ref(3)
const logs = ref([])
const gameover = ref(false)
const endGameMessage = ref('')

const playerSkins = computed(() => {
switch (playerName) {
    case 'Van Nistelrouye':
        return { attaquer: '/images/sprites/VanNistelrouye/attack.gif', parer: '/images/sprites/VanNistelrouye/block.gif', moquer: '/images/sprites/VanNistelrouye/mock.gif', idle: '/images/sprites/VanNistelrouye/iddle.gif' }
    case 'François de Surcoup':
        return { attaquer: '/images/sprites/FrancoisDeSurcoup/attack.gif', parer: '/images/sprites/FrancoisDeSurcoup/block.gif', moquer: '/images/sprites/FrancoisDeSurcoup/mock.gif', idle: '/images/sprites/FrancoisDeSurcoup/iddle.gif' }
    case 'Jack Marrow':
        return { attaquer: '/images/sprites/JackMarrow/attack.gif', parer: '/images/sprites/JackMarrow/block.gif', moquer: '/images/sprites/JackMarrow/mock.gif', idle: '/images/sprites/JackMarrow/iddle.gif' }
    case 'Jungle Jane':
        return { attaquer: '/images/sprites/JungleJane/attack.gif', parer: '/images/sprites/JungleJane/block.gif', moquer: '/images/sprites/JungleJane/mock.gif', idle: '/images/sprites/JungleJane/iddle.gif' }
    default:
        return { attaquer: '/images/sprites/attack.gif', parer: '/images/sprites/block.gif', moquer: '/images/sprites/mock.gif', idle: '/images/sprites/iddle.gif' }
}
})

const enemySkins = computed(() => {
switch (ennemyName) {
    case 'Van Nistelrouye':
        return { attaquer: '/images/sprites/VanNistelrouye/attack.gif', parer: '/images/sprites/VanNistelrouye/block.gif', moquer: '/images/sprites/VanNistelrouye/mock.gif', idle: '/images/sprites/VanNistelrouye/iddle.gif' }
    case 'François de Surcoup':
        return { attaquer: '/images/sprites/FrancoisDeSurcoup/attack.gif', parer: '/images/sprites/FrancoisDeSurcoup/block.gif', moquer: '/images/sprites/FrancoisDeSurcoup/mock.gif', idle: '/images/sprites/FrancoisDeSurcoup/iddle.gif' }
    case 'Jack Marrow':
        return { attaquer: '/images/sprites/JackMarrow/attack.gif', parer: '/images/sprites/JackMarrow/block.gif', moquer: '/images/sprites/JackMarrow/mock.gif', idle: '/images/sprites/JackMarrow/iddle.gif' }
    case 'Jungle Jane':
        return { attaquer: '/images/sprites/JungleJane/attack.gif', parer: '/images/sprites/JungleJane/block.gif', moquer: '/images/sprites/JungleJane/mock.gif', idle: '/images/sprites/JungleJane/iddle.gif' }
    default:
        return { attaquer: '/images/sprites/attack.gif', parer: '/images/sprites/blockE.gif', moquer: '/images/sprites/mockE.gif', idle: '/images/sprites/iddleE.gif' }
}
})

const playerChoice = ref('idle')
const computerChoice = ref('idle')

function updateHistory(fight) {
    logs.value.push(`Votre action : ${fight.playerChoice}, Action de l'adversaire : ${fight.computerChoice}, Résultat : ${fight.result}`)
    playerChoice.value = fight.playerChoice
    computerChoice.value = fight.computerChoice
    if (fight.result === 'Vous avez perdu !') {
        playerHealth.value--
    } else if (fight.result === 'Vous avez gagné !') {
        enemyHealth.value--
    }
    if (playerHealth.value === 0 || enemyHealth.value === 0) {
        gameover.value = true
        endGameMessage.value = playerHealth.value === 0 ? 'Vous avez perdu la partie !' : 'Vous avez gagné la partie !'
    }
}
</script>

<style>
.bastarda {
    font-family: 'bastarda';
}

.text-stroke-3 {
    -webkit-text-stroke:0.02em rgb(130, 66, 66);
}
</style>
