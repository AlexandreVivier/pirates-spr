
<template>
    <div class="flex flex-row justify-center items-center w-full md:w-1/2 bg-gradient-to-r from-stone-900/80 via-stone-200 to-stone-900/80 h-full py-1">
    <div class="flex flex-row bg-gradient-to-r from-stone-900/90 via-stone-600 to-stone-900/90 w-full py-6 h-full justify-center">
        <div class="bg-contain bg-no-repeat bg-center w-full h-full" :style="{ backgroundImage: `url(${playerSkin})` }">
            <div class="bg-contain bg-no-repeat bg-center w-full h-full transform -scale-x-100" :style="{ backgroundImage: `url(${ennemySkin})` }">
            </div>
        </div>
        
    </div>
    </div>
</template>

<script lang="js" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
    playerSkin: String,
    ennemySkin: String
})
const skin = computed(() => props.playerSkin);
console.log('Player Skin:', skin.value);
</script>
