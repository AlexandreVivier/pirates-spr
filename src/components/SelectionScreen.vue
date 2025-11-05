<template>
<div class="flex flex-col items-center w-screen bg-stone-100 dark:bg-stone-900 w-full h-screen py-12 gap-8">
    <TitleCard />
    <div class="flex flex-col justify-center items-center w-full mb-4">
        <p class="text-center italic text-2xl text-stone-500 pb-6">Sélectionnez votre pirate :</p>
        <div class="flex justify-center items-center w-full md:w-1/2 mb-2">
            <PortraitSelect :player="barbeBlonde" @click="playerName = barbeBlonde.name" :class="{ 'filter-none border-double border-8 !border-green-600 !bg-slate-800 transform -scale-x-100': playerName === barbeBlonde.name }"/>
            <PortraitSelect :player="francoisDeSurcoup" @click="playerName = francoisDeSurcoup.name" :class="{ 'filter-none border-double border-8 !border-green-600 !bg-slate-800 transform -scale-x-100': playerName === francoisDeSurcoup.name }"/>
            <PortraitSelect :player="jungleJane" @click="playerName = jungleJane.name" :class="{ 'filter-none border-double border-8 !border-green-600 !bg-slate-800 transform -scale-x-100': playerName === jungleJane.name }"/>
            <PortraitSelect :player="jackMarrow" @click="playerName = jackMarrow.name" :class="{ 'filter-none border-double border-8 !border-green-600 !bg-slate-800 transform -scale-x-100': playerName === jackMarrow.name }"/>
        </div>
        <div v-if="playerName!=''" class="w-full flex flex-col items-center">
            <p class="text-center italic text-2xl text-stone-500 pb-6">Je choisis {{ playerName }} !</p>
            <CommonButton class="w-full md:w-1/4" label="Commencer à jouer !" :action="{ path: '/fight', query: { playerName } }"/>
        </div>
        <div v-if="playerBiography" class="w-full flex flex-col text-shadow-special items-center mt-8 px-4">
            <p class="text-center text-stone-900 dark:text-stone-100 text-lg md:text-4xl w-full md:w-1/2 font-bold bastarda md:py-4">"{{ playerBiography }}"</p>
            <p class="text-center italic text-stone-800 dark:text-stone-300 text-md md:text-2xl md:pt-4">- {{ playerDescription }} -</p>
        </div>
    </div>
</div>
</template>

<script lang="js" setup>
import { ref } from 'vue'
import { computed } from 'vue'
import TitleCard from './TitleCard.vue'
import CommonButton from './CommonButton.vue'
import PortraitSelect from './PortraitSelect.vue'
import { 
  barbeBlonde, 
  francoisDeSurcoup, 
  jungleJane, 
  jackMarrow 
} from './classes/characters.js'

const playerName = ref('') 

const playerBiography = computed(() => {
    switch (playerName.value) {
        case 'Barbe-blonde':
            return barbeBlonde.biography;
        case 'François de Surcoup':
            return francoisDeSurcoup.biography;
        case 'Jungle Jane':
            return jungleJane.biography;
        case 'Jack Marrow':
            return jackMarrow.biography;
        default:
            return '';
    }
});

const playerDescription = computed(() => {
    switch (playerName.value) {
        case 'Barbe-blonde':
            return barbeBlonde.description;
        case 'François de Surcoup':
            return francoisDeSurcoup.description;
        case 'Jungle Jane':
            return jungleJane.description;
        case 'Jack Marrow':
            return jackMarrow.description;
        default:
            return '';
    }
});
</script>


<style>
.bastarda {
    font-family: 'bastarda';
}

.text-shadow-special {
    text-shadow: 2px 2px 0px rgb(130, 66, 66);
}
.text-stroke-3 {
    -webkit-text-stroke:0.02em rgb(130, 66, 66);
}
</style>
