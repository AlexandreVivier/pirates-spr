<template>
    <button class="flex flex-col items-center pixelify-sans bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-100 w-full text-stone-800 text-lg md:text-xl uppercase font-serif text-stroke-3 font-semibold py-2 md:pt-6 md:px-4 border border-gray-400 rounded shadow" 
    @click="$emit('getChoice', action)">
        {{ action }}
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
</style>