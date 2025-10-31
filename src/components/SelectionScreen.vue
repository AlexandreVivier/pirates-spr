<template>
<div class="flex flex-col items-center w-screen bg-stone-100 dark:bg-stone-900 w-full h-screen py-12 gap-8">
    <TitleCard />
    <div class="flex flex-col justify-center items-center w-full mb-4">
        <p class="text-center italic text-2xl text-stone-500 pb-6">Sélectionnez votre pirate :</p>
        <div class="flex justify-center items-center w-full md:w-1/2 mb-2">
            <div class="inline-block">
                <img src="/images/portraits/portraitP.gif" alt="Van Nistelrouye" class="inline-block border-double border-8 filter grayscale hover:filter-none border-stone-500 hover:border-amber-700 bg-stone-400 hover:bg-slate-600 hover:cursor-pointer transition ease-in-out delay-150"
            @click="playerName = 'Van Nistelrouye'"
            :class="{ 'filter-none border-amber-600 bg-slate-500 transform -scale-x-100': playerName === 'Van Nistelrouye' }"
            />
            </div>
            <div class="inline-block">
            <img src="/images/portraits/portraitE.gif" alt="François de Surcoup" class="inline-block border-double border-8 filter grayscale hover:filter-none border-stone-500 hover:border-purple-900 bg-stone-400 hover:bg-slate-600 hover:cursor-pointer transition ease-in-out delay-150"
            @click="playerName = 'François de Surcoup'"
            :class="{ 'filter-none border-purple-500 bg-slate-500 transform -scale-x-100': playerName === 'François de Surcoup' }"
            />
            </div>
            <div class="inline-block">
            <img src="/images/portraits/portraitS.gif" alt="Jack Marrow Portrait" class="inline-block border-double border-8 filter grayscale hover:filter-none border-stone-500 hover:border-red-700 bg-stone-400 hover:bg-slate-600 hover:cursor-pointer transition ease-in-out delay-150"
            @click="playerName = 'Jack Marrow'"
            :class="{ 'filter-none border-red-500 bg-slate-500 transform -scale-x-100': playerName === 'Jack Marrow' }"
            />
            </div>
            <div class="inline-block">
            <img src="/images/portraits/portraitJ.gif" alt="Jungle Jane" class="inline-block border-double border-8 filter grayscale hover:filter-none border-stone-500 hover:border-green-600 bg-stone-400 hover:bg-slate-600 hover:cursor-pointer transition ease-in-out delay-150"
            @click="playerName = 'Jungle Jane'"
            :class="{ 'filter-none border-green-500 bg-slate-500 transform -scale-x-100': playerName === 'Jungle Jane' }"
            />
            </div>
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
