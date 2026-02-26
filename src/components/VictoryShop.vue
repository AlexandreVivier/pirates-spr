<template>
    <div class="flex flex-col justify-center items-center w-full h-full bg-gradient-to-b from-stone-900 via-slate-600 to-stone-900 text-stone-200">
        <div class="flex flex-col justify-center items-center w-3/4 bg-yellow-500 border-4 border-stone-800 rounded-lg p-4 mb-4">
            <p class="text-3xl font-bold text-center bastarda text-stone-900">Boutique de l'aventurier</p>
            <CommonButton label="combat suivant" @click="nextFight"/>
        </div>
               <!-- <div>
            Victory shop :
+1 coeur (coût courant)
Rum (1 po)
Cache oeil (5po - bloque l'ennemi sur 1 seule attaque)
Longue vue (3po preshot la prochaine attaque)
Crochet ( 2po gains *2 )
        </div> -->
    </div>
</template>
<script lang="js" setup>
    import {defineEmits } from 'vue';
    import CommonButton from './CommonButton.vue';
    // const props = defineProps({
    //     adventure: String,
    // });
    const emit = defineEmits(['next-fight']);

    function nextFight() {
        emit('next-fight');
    }
</script>