<template>
    <button class="flex flex-col items-center bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-100 w-full text-stone-800 py-2 md:pt-6 md:px-4 border border-gray-400 shadow-button" 
    @click="$emit('getChoice', action)">
       <span class="pixelify-sans uppercase text-lg md:text-xl lg:text-2xl text-stroke-3">{{ action }}</span>
         <img :src="renderImage(action)" alt="emoji" class="hidden md:inline-block md:h-12" />
    </button>
</template>

<script lang="js" setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
    action: String
})

function renderImage(action) {
switch (action) {
    case 'attaquer':
        return '/images/icons/attack.gif'
    case 'parer':
        return '/images/icons/block.gif'
    case 'moquer':
        return '/images/icons/mock.gif'
    case 'attaquer*':
        return '/images/icons/attack.gif'
    case 'parer*':
        return '/images/icons/block.gif'
    case 'moquer*':
        return '/images/icons/mock.gif'
    case 'menacer':
        return '/images/icons/tronchedecake.gif'
    default:
        return '/images/icons/tronchedecake.gif'
    }
}

defineEmits(['getChoice'])
</script>

<style>
.pixelify-sans {
    font-family: 'pixelify-sans';
}
.bastarda {
    font-family: 'Bastarda';
}
.jacquard12 {
    font-family: 'jacquard12';
}
.text-shadow-special {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.shadow-button {
    box-shadow: 4px 4px 1px rgba(162, 67, 67, 0.5);
}
.shadow-button:hover {
    box-shadow: 4px 4px 4px rgba(120, 167, 127, 0.5);
}
</style>