<template>
<div class="flex flex-col items-center w-screen bg-stone-100 dark:bg-stone-900 w-full h-screen py-12 gap-8">
    <TitleCard />
    <div class="flex flex-col justify-center items-center w-full mb-4">
        <p class="text-center italic text-2xl text-stone-500 pb-6">Sélectionnez votre pirate :</p>
        <div class="flex justify-center items-center w-full md:w-1/2 mb-2">
            <PortraitSelect :player="vanNistelrouye" @click="playerName = vanNistelrouye.name" :class="{ 'filter-none border-amber-600 bg-slate-500 transform -scale-x-100': playerName === vanNistelrouye.name }"/>
            <PortraitSelect :player="francoisDeSurcoup" @click="playerName = francoisDeSurcoup.name" :class="{ 'filter-none border-purple-500 bg-slate-500 transform -scale-x-100': playerName === francoisDeSurcoup.name }"/>
            <PortraitSelect :player="jungleJane" @click="playerName = jungleJane.name" :class="{ 'filter-none border-green-500 bg-slate-500 transform -scale-x-100': playerName === jungleJane.name }"/>
            <PortraitSelect :player="jackMarrow" @click="playerName = jackMarrow.name" :class="{ 'filter-none border-red-500 bg-slate-500 transform -scale-x-100': playerName === jackMarrow.name }"/>
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
import PortraitSelect from './PortraitSelect.vue'
const playerName = ref('') 

const jackMarrow = {
    name: 'Jack Marrow',
    portrait: '/images/portraits/portraitS.gif',
    alt: 'Jack Marrow Portrait'
}
const vanNistelrouye = {
    name: 'Van Nistelrouye',
    portrait: '/images/portraits/portraitP.gif',
    alt: 'Van Nistelrouye Portrait'
}
const francoisDeSurcoup = {
    name: 'François de Surcoup',
    portrait: '/images/portraits/portraitE.gif',
    alt: 'François de Surcoup Portrait'
}
const jungleJane = {
    name: 'Jungle Jane',
    portrait: '/images/portraits/portraitJ.gif',
    alt: 'Jungle Jane Portrait'
}
</script>


<style>
.bastarda {
    font-family: 'bastarda';
}

.text-stroke-3 {
    -webkit-text-stroke:0.02em rgb(130, 66, 66);
}
</style>
