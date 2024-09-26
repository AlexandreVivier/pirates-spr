<template>
<div class="flex flex-row w-1/2 justify-center">
    <img :src="getPlayerSkin(playerChoice)" alt="player picture" class="inline-block absolute z-10 left-1/3 " />
    <img :src="getEnnemySkin(ennemyChoice)" alt="ennemy picture" class="inline-block relative" />
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
            return 'https://i.ibb.co/mRb0gsS/attackP.gif'
        case 'parer':
            return 'https://i.ibb.co/DkD4hhC/blockP.gif'
        case 'moquer':
            return 'https://i.ibb.co/LxyTPSK/mockP.gif'
        default:
            return 'https://i.ibb.co/zFv4hDS/iddleP.gif'
    }
}

function getEnnemySkin(ennemyChoice) {
    switch (ennemyChoice) {
        case 'attaquer':
            return 'https://i.ibb.co/3rVpqpc/attackE.gif'
        case 'parer':
            return 'https://i.ibb.co/XSFGw4X/blockE.gif'
        case 'moquer':
            return 'https://i.ibb.co/jrftm3G/mockE.gif'
        default:
            return 'https://i.ibb.co/ky8MDY9/iddleE.gif'
    }
}
</script>