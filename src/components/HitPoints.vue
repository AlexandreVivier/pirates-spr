<template>
<div class="flex flex-col lg:flex-row dark:text-stone-100 justify-center items-center mb-4 py-2 px-4">
            <h2 class="font-semibold py-2 px-4 text-center bastarda">
                {{ label }}
            </h2>
            <div class="flex justify-center items-center mb-4 py-2 px-4">
                <p v-for="n in props.currHealth" :key="n">
                    ❤️
                </p>
                <p v-for="n in props.maxHealth - props.currHealth" :key="n" class="opacity-35">
                    💔
                </p>
            </div>
        </div>
</template>

<script lang="js" setup>
import { defineProps } from 'vue'

const props = defineProps({
    label: String,
    currHealth: Number,
    maxHealth: Number,
})
</script>