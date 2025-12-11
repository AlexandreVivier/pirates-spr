<template>
    <div class="flex flex-row justify-center items-center w-full md:w-1/2 bg-gradient-to-r from-stone-900/80 via-stone-200 to-stone-900/80 h-full py-1">
        <div class="flex flex-row bg-gradient-to-r from-stone-900/90 via-stone-600 to-stone-900/90 w-full py-6 h-full justify-center">
            <div class="bg-contain bg-no-repeat bg-center w-full h-full md:min-h-96" :style="{ backgroundImage: `url(${playerSkin})` }">
                <div class="bg-contain bg-no-repeat bg-center w-full h-full md:min-h-96 transform -scale-x-100" :style="{ backgroundImage: `url(${ennemySkin})` }">
                </div>
                <!-- <div class="w-full h-12 flex">                
                    <img :src="playerSkin" alt="Player Skin"/>
                    <img :src="ennemySkin" alt="Player Skin"/>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
    player: Object,
    ennemy: Object,
    playerChoice: String,
    ennemyChoice: String
})

// le skin par défaut est "idle" au début du combat. Puis, il changera selon les actions du joueur et de l'ennemi.
const playerChoice = computed(() => props.playerChoice || 'idle');
const ennemyChoice = computed(() => props.ennemyChoice || 'idle');
const playerSkin = computed(() => {
    if (!props.player) return ''
    return props.player.skins[playerChoice.value] || props.player.skins['idle']
})

const ennemySkin = computed(() => {
    if (!props.ennemy) return ''
    return props.ennemy.skins[ennemyChoice.value] || props.ennemy.skins['idle']
})

</script>