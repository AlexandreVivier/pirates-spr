<template>
    <div class="flex flex-col items-center w-screen bg-stone-100 dark:bg-stone-900 w-full min-h-screen h-full px-2 py-12 gap-8">
        <TitleCard />
        <div class="flex flex-col justify-center items-center w-full mb-4">
            <p class="text-center italic text-2xl text-stone-500 pb-6 pixelify-sans">
                Sélectionnez votre mode de jeu :
            </p>
            <CommonButton class="w-full md:w-1/4 mb-4" label="Partie simple" :action="{ path: '/simple' }"/>
            <CommonButton class="w-full md:w-1/4" label="Aventure" :action="{ path: '/adventure' }"/>
        </div>
    <AppCopyrights />
    </div>
</template>

<script lang="js" setup>
import CommonButton from './CommonButton.vue'
import TitleCard from './TitleCard.vue'
import AppCopyrights from './AppCopyrights.vue'
</script>