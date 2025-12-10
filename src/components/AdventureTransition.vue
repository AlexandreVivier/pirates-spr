<!-- <template>
        <div class="flex flex-col justify-center items-center w-full h-full bg-gradient-to-b from-stone-900 via-slate-600 to-stone-900 text-stone-200">
            <div class="flex flex-col justify-center items-center w-3/4 bg-yellow-500 border-4 border-stone-800 rounded-lg p-4 mb-4">
                <p class="text-3xl font-bold text-center bastarda text-stone-900">Boutique de l'aventurier</p>
                    <CommonButton label="combat suivant" :action="{ path: '/fight', query: { playerName: props.playerName, mode: props.mode } }"/>
            </div>
        </div>
</template>
<script lang="js" setup>
    import { defineProps } from 'vue';
    import CommonButton from './CommonButton.vue';
    const props = defineProps({
        playerName: String,
        adventure: String
    });

function updateAdventure() {
     let nG = 1
      if (adventure.value.protagonist.name === 'Barbe-blonde') {
              adventure.value.wealth += nG*2
      } else {
              adventure.value.wealth += nG
      }
      adventure.value.fightNumber += 1
      adventure.value.ennemies.shift()
      ennemyName.value = adventure.value.ennemies[0] || null
}
updateAdventure();
</script> -->

<script setup>
import { ref, onMounted, defineProps } from 'vue'
import CommonButton from './CommonButton.vue'
import { Adventure } from './classes/adventure.js'
import { 
  barbeBlonde, 
  francoisDeSurcoup, 
  jungleJane, 
  jackMarrow,
  esperanzaPolvora
} from './classes/characters.js'

const props = defineProps({
    playerName: String,
})

const adventure = ref(null)

onMounted(() => {
    const raw = sessionStorage.getItem('adventure')
    if (!raw) return

    const data = JSON.parse(raw)

    // Reconstruction propre de l'aventure
    adventure.value = new Adventure(
        getCharacterByName(props.playerName),
        data.wealth,
        data.ennemies,
        data.fightNumber
    )
})

function getCharacterByName(name) {
  switch (name) {
    case 'Barbe-blonde':
      return barbeBlonde;
    case 'François de Surcoup':
      return francoisDeSurcoup;
    case 'Jungle Jane':
      return jungleJane;
    case 'Jack Marrow':
      return jackMarrow;
    case 'Esperanza Pólvora y Hacha':
      return esperanzaPolvora;
    default:
      return null;
  }
}

function nextFight() {
    // Applique les effets de la boutique
    adventure.value.wealth += 1
    adventure.value.fightNumber += 1
    adventure.value.ennemies.shift()

    // Sauvegarde la version modifiée
    sessionStorage.setItem('adventure', JSON.stringify(adventure.value))

    // Retour au combat
    window.location.href = `/fight?playerName=${props.playerName}&mode=aventure`
}
</script>

<template>
<div class="flex flex-col justify-center items-center h-full bg-gradient-to-b from-stone-900 via-slate-600 to-stone-900 text-stone-200">
    <div class="flex flex-col justify-center items-center w-3/4 bg-yellow-500 border-4 border-stone-800 rounded-lg p-4 mb-4">

        <p class="text-3xl font-bold text-center bastarda text-stone-900">
            Boutique de l'aventurier
        </p>

        <p class="bastarda text-xl">
            Pièces d'or : {{ adventure?.wealth ?? 0 }}
        </p>

        <CommonButton label="Combat suivant" @click="nextFight" />
    </div>
</div>
</template>
