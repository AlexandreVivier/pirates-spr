<template>
    <div class="flex flex-col items-center w-screen bg-stone-100 h-screen py-12 gap-8">
        <TitleCard v-if="gameover === true"/>

        <div class="flex justify-center items-center mb-2">
            <HitPoints label="Points de vie" :health="playerHealth" />
            <HitPoints label="Points de vie ennemis" :health="enemyHealth" />
        </div>

        <div v-show="gameover === true" class="flex flex-col justify-center items-center mb-4">
            <p class="text-center italic text-2xl text-stone-500 pb-6">{{ endGameMessage }}</p>
            <CommonButton label="Rejouer ?" action="/selection"/>
        </div>

        <div v-if="gameover === false" class="flex flex-col w-full justify-center items-center mb-4">

            <DuelingImages :playerSkin="playerSkins[playerChoice]" 
            :ennemySkin="enemySkins[computerChoice]"/>
            <ActionPannel @update-history="updateHistory"/>
        </div>

        <HistoryLog :logs="logs"/>
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
import DuelingImages from './DuelingImages.vue'

const route = useRoute()

const playerName = route.query.playerName

const playerHealth = ref(3)
const enemyHealth = ref(3)
const logs = ref([])
const gameover = ref(false)
const endGameMessage = ref('')

const playerSkins = computed(() => {
  return playerName === 'Alexandre'
    ? { attaquer: '/images/sprites/attackP.gif', parer: '/images/sprites/blockP.gif', moquer: '/images/sprites/mockP.gif', idle: '/images/sprites/iddleP.gif' }
    : { attaquer: '/images/sprites/attackE.gif', parer: '/images/sprites/blockE.gif', moquer: '/images/sprites/mockE.gif', idle: '/images/sprites/iddleE.gif' }
})

const enemySkins = computed(() => {
  return playerName === 'Alexandre'
    ? { attaquer: '/images/sprites/attackE.gif', parer: '/images/sprites/blockE.gif', moquer: '/images/sprites/mockE.gif', idle: '/images/sprites/iddleE.gif' }
    : { attaquer: '/images/sprites/attackP.gif', parer: '/images/sprites/blockP.gif', moquer: '/images/sprites/mockP.gif', idle: '/images/sprites/iddleP.gif' }
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
