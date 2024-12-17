<template>
    <button class="flex flex-col items-center bg-stone-200 hover:bg-stone-300 w-full text-stone-800 text-xl uppercase font-serif text-stroke-3 font-semibold pt-6 px-4 border border-gray-400 rounded shadow" 
    @click="$emit('getChoice', action)">
        {{ action }} !
         <img :src="renderImage(action)" alt="emoji" class="inline-block  h-12" />
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
    default:
        return 'https://www.pirates-caraibes.com/js/tinymce/plugins/smileys/img/tronchedecake.gif'
    }
}

defineEmits(['getChoice'])
</script>