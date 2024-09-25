<template>
    <button class="bg-stone-700 text-xl uppercase font-serif hover:bg-stone-900 w-1/4 text-white text-stroke-3 font-semibold py-6 px-4 border border-gray-400 rounded shadow" 
    @click="$emit('getChoice', props.action)">
    <!-- <span class="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent"> -->
        {{ props.action }} !
    <!-- </span> -->
    </button>
</template>

<script lang="js" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    action: String
})

defineEmits(['getChoice'])
</script>