<template>
    <div class="inline-block">
                <img :src="props.player.portrait" alt="Jack Marrow Portrait" class="inline-block border-double border-8 filter grayscale hover:filter-none border-stone-500 hover:border-red-700 bg-stone-400 hover:bg-slate-600 hover:cursor-pointer transition ease-in-out delay-150"
                />
    </div>
</template>

<script lang="js" setup>
import { defineProps } from 'vue'

const props = defineProps({
    player: Object
})
</script>