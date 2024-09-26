<template>
    <div class="flex flex-col items-center w-screen bg-stone-100 h-screen py-12 gap-8">
        <TitleCard/>

        <div class="flex justify-center items-center mb-4">
            <HitPoints label="Points de vie" :health="playerHealth" />
            <HitPoints label="Points de vie ennemis" :health="enemyHealth" />
        </div>

        <ActionPannel @update-history="updateHistory"/>

        <HistoryLog :logs="logs"/>
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue'
import ActionPannel from './ActionPannel.vue'
import HitPoints from './HitPoints.vue'
import TitleCard from './TitleCard.vue'
import HistoryLog from './HistoryLog.vue'

const playerHealth = ref(3)
const enemyHealth = ref(3)
const logs = ref([])

function updateHistory(fight) {
    logs.value.push(`Votre action : ${fight.playerChoice}, Action de l'adversaire : ${fight.computerChoice}, Résultat : ${fight.result}`)
    console.log(logs.value)
    if (fight.result === 'Vous avez perdu !') {
        playerHealth.value--
    } else if (fight.result === 'Vous avez gagné !') {
        enemyHealth.value--
    }
    if (playerHealth.value === 0 || enemyHealth.value === 0) {
        logs.value.push(playerHealth.value === 0 ? alert('Vous avez perdu la partie') : alert('Vous avez gagné la partie'))
    location.reload()
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
