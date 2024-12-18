<template>
    <div class="flex flex-row w-1/2 justify-center">
        <img :src="getPlayerSkin(playerChoice)" alt="player picture" class="inline-block absolute" />
        <img :src="getEnnemySkin(ennemyChoice)" alt="ennemy picture" class="inline-block relative transform -scale-x-100" />
    </div>
</template>

<script lang="js" setup>
import { defineProps } from 'vue'
defineProps({
    playerChoice: String,
    ennemyChoice: String
})
function getPlayerSkin(playerChoice) {
    switch (playerChoice) {
        case 'attaquer':
            return '/images/sprites/attackP.gif'
        case 'parer':
            return '/images/sprites/blockP.gif'
        case 'moquer':
            return '/images/sprites/mockP.gif'
        default:
            return '/images/sprites/iddleP.gif'
    }
}
function getEnnemySkin(ennemyChoice) {
    switch (ennemyChoice) {
        case 'attaquer':
            return '/images/sprites/attackE.gif'
        case 'parer':
            return '/images/sprites/blockE.gif'
        case 'moquer':
            return '/images/sprites/mockE.gif'
        default:
            return '/images/sprites/iddleE.gif'
    }
}
</script>