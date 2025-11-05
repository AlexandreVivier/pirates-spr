<template>
    <div class="filter grayscale inline-block border-double border-8 hover:filter-none border-stone-500 hover:border-sky-500 bg-stone-400 hover:bg-slate-600 hover:cursor-pointer transition ease-in-out delay-150">
        <img :src="props.player.portrait" :alt="props.player.name" class=""
        />
    </div>
</template>

<script lang="js" setup>
import { defineProps } from 'vue'
// import { ref } from 'vue'

// const playerName = ref('')

const props = defineProps({
    player: Object
})
</script>