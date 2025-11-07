<template>
<div class="flex flex-col lg:flex-row dark:text-stone-100 justify-center items-center mb-4 py-2 px-4">
            <h2 class="font-semibold py-2 px-4 text-center">
                <span class="italic text-stone-950 dark:text-stone-300 px-2 font-thin pixelify-sans">
                {{ label }} 
                </span>
                <span class="font-bold bastarda text-2xl text-shadow-special">
                    {{ charaName }}
                </span>
            </h2>
           <div v-if="safeHealth > 0" class="flex justify-center items-center mb-4 py-2 px-4">
                <p v-for="n in safeHealth" :key="'heart' + n">❤️</p>
                <p v-for="n in props.maxHealth - safeHealth" :key="'broken' + n" class="opacity-35">💔</p>
            </div>
            <div v-else class="flex justify-center items-center mb-4 py-2 px-4">
                <p v-for="n in props.maxHealth" :key="'broken' + n" class="opacity-35">💔</p>
            </div>
        </div>
</template>

<script lang="js" setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
    label: String,
    currHealth: Number,
    maxHealth: Number,
    charaName: String
})
const safeHealth = computed(() => {
  return Math.max(0, Math.min(props.currHealth, props.maxHealth))
})

</script>