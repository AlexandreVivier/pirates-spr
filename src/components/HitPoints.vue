<template>
<div class="flex flex-col lg:flex-row dark:text-stone-100 justify-center items-center mb-4 py-2 px-4">
            <h2 class="font-semibold py-2 px-4 text-center bastarda">
                {{ label }}
            </h2>
            <div class="flex justify-center items-center mb-4 py-2 px-4">
                <p v-if="health === 2" class="opacity-35">
                    💔
                </p>
                <p v-else-if="health === 1" class="opacity-35">
                    💔💔
                </p>
                <p v-else-if="health === 0" class="opacity-35">
                    💔💔💔
                </p>
                <p v-for="n in health" :key="n">
                    ❤️
                </p>
            </div>
        </div>
</template>

<script lang="js" setup>
import { defineProps } from 'vue'

defineProps({
    label: String,
    health: Number
})
</script>