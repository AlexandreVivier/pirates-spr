<template>
<div class="flex flex-col items-center w-screen bg-stone-100 dark:bg-stone-900 w-full h-screen py-12 gap-8">
    <TitleCard />
    <div class="flex flex-col justify-center items-center w-full mb-4">
        <p class="text-center italic text-2xl text-stone-500 pb-6">Sélectionnez votre pirate :</p>
        <div class="flex justify-around items-center w-50 red-500 mb-2">
            <img src="/images/portraits/portraitP.gif" alt="player picture" class="inline-block border-double border-8 filter grayscale hover:filter-none border-stone-500 hover:border-red-100 bg-stone-400 hover:bg-stone-300 hover:cursor-pointer transition ease-in-out delay-150"
            @click="playerName = 'Alexandre'"
            :class="{ 'filter-none': playerName === 'Alexandre' }"
            />
            <img src="/images/portraits/portraitE.gif" alt="ennemy picture" class="inline-block border-double border-8 filter grayscale hover:filter-none border-stone-500 hover:border-red-100 bg-stone-400 hover:bg-stone-300 hover:cursor-pointer transition ease-in-out delay-150"
            @click="playerName = 'François'"
            :class="{ 'filter-none': playerName === 'François' }"
            />
        </div>
        <div v-if="playerName!=''">
            <p class="text-center italic text-2xl text-stone-500 pb-6">Je choisis {{ playerName }} !</p>
            <CommonButton label="Commencer à jouer !" :action="{ path: '/fight', query: { playerName } }"/>
        </div>
    </div>
</div>
</template>

<script lang="js" setup>
import { ref } from 'vue'
import TitleCard from './TitleCard.vue'
import CommonButton from './CommonButton.vue'
const playerName = ref('') 
</script>


<style>
.bastarda {
    font-family: 'bastarda';
}

.text-stroke-3 {
    -webkit-text-stroke:0.02em rgb(130, 66, 66);
}
</style>
