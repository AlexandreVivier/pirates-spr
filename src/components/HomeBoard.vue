<template>
    <div class="flex flex-col items-center w-screen bg-stone-100 h-screen py-12 gap-8">
        <TitleCard/>

        <div class="flex justify-center items-center mb-4">
            <HitPoints label="Points de vie" :health="playerHealth" />
            <HitPoints label="Points de vie ennemis" :health="enemyHealth" />
        </div>

        <ActionPannel @update-history="updateHistory"/>

        <div class="flex flex-col justify-center items-center mb-4 bg-stone-200 w-1/2 py-2 px-4 border border-gray-400 rounded shadow">
            <h2 class="font-semibold bastarda text-2xl py-2 border border-gray-300 px-4 rounded shadow text-center bg-stone-100 w-full">Actions précédentes :</h2>
            <ul class="list-none">
                <li class="list-none italic text-gray-800 text-center" v-for="(log, index) in logs" :key="index">
                    <span v-if="log.includes('Egalité')" class="">{{ log }}</span>
                    <span v-else-if="log.includes('gagné')" class="text-green-500">{{ log }}</span>
                    <span v-else class="text-red-500">{{ log }}</span>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue'
import ActionPannel from './ActionPannel.vue'
import HitPoints from './HitPoints.vue'
import TitleCard from './TitleCard.vue';

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
