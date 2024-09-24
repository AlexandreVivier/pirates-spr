<template>
    <div class="container">
        <h1>Pirates fight !</h1>
        <p>
        Bienvenue sur le jeu de combat de pirates !
        </p>
    </div>

    <div class="container">
        <h2>Vos points de vie :</h2>
        <p>{{ playerHealth }}/3</p>
        <h2>Points de vie de l'ennemi :</h2>
        <p>{{ enemyHealth }}/3</p>
    </div>

    <ActionPannel @update-history="updateHistory"/>

    <div class="container">
        <h2>Actions précédentes :</h2>
        <ul>
            <li v-for="(log, index) in logs" :key="index">{{ log }}</li>
        </ul>
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue'
import ActionPannel from './ActionPannel.vue'

const playerHealth = ref(3)
const enemyHealth = ref(3)
const logs = ref([])

function updateHistory(fight) {
    logs.value.push(`Vous : ${fight.playerChoice}, PNJ : ${fight.computerChoice}, Résultat : ${fight.result}`)
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