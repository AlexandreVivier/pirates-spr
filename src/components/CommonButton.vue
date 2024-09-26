<template>
    <button class="bg-white hover:bg-stone-200 text-stone-800 bastarda font-semibold text-lg py-2 px-4 border border-stone-400 rounded shadow"
    onclick="location.reload()">
        {{ label }}
    </button>
</template>

<script lang="js" setup>
import { defineProps } from 'vue'

defineProps({
    action: String,
    label: String
})
</script>