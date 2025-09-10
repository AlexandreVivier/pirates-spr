<template>
    <div class="flex flex-col justify-center items-center mb-4 bg-stone-200 dark:bg-stone-800 w-1/2 py-2 px-4 border border-gray-400 rounded shadow">
        <h2 class="font-semibold bastarda text-2xl py-2 border border-gray-300 px-4 rounded shadow text-center bg-stone-100 dark:text-stone-100 dark:bg-stone-900 w-full">Actions précédentes :</h2>
        <ul class="list-none">
            <li class="list-none italic text-gray-800 dark:text-stone-100 text-center" v-for="(log, index) in logs" :key="index">
                <span v-if="log.includes('Egalité')" class="">{{ log }}</span>
                <span v-else-if="log.includes('gagné')" class="text-green-500">{{ log }}</span>
                <span v-else class="text-red-500">{{ log }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="js" setup>
import { defineProps } from 'vue'

defineProps({
    logs: Array
})
</script>