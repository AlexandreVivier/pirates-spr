<template>
    <div class="flex flex-col justify-center items-center mb-4 bg-stone-200 dark:bg-stone-800 w-full md:w-1/2 py-2 px-4 border border-gray-400 rounded shadow">
        <h2 class="font-semibold jacquard12 text-2xl py-2 border border-gray-300 px-4 rounded shadow text-center bg-stone-100 dark:text-stone-100 dark:bg-stone-900 w-full">
            Actions précédentes :
        </h2>
        <ul class="list-none w-full">
            <li
                class="list-none italic text-gray-800 dark:text-stone-100 text-center pixelify-sans"
                v-for="(log, index) in reversedLogs"
                :key="index"
            >
                <span v-if="log.includes('Egalité')">{{ log }}</span>
                <span v-else-if="log.includes('gagné')" class="text-green-500" :class="[log.includes('critique')?'text-green-600 font-bold':'']">{{ log }}</span>
                <span v-else-if="log.includes('Aucun effet')" class="text-yellow-500">{{ log }}</span>
                <span v-else-if="log.includes('perdu')" class="text-red-500" :class="[log.includes('critique')?'text-red-600 font-bold':'']">{{ log }}</span>
                <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
    logs: {
        type: Array,
        default: () => []
    }
})

const reversedLogs = computed(() => [...props.logs].reverse())
</script>
<style scoped>  </style>