<template>
  <div class="flex flex-col justify-center items-center mb-4 px-2 w-full md:w-2/3 lg:w-1/2 md:p-6 dark:text-stone-100">
    <div>
      <h2 class="font-semibold py-2 px-4 text-center w-full bastarda text-shadow-special text-xl md:text-2xl">
        Choisissez votre action :
      </h2>
    </div>
    <div
      class="grid w-full gap-4 justify-items-center"
             :class="[choices.length > 3 ? 'grid-cols-2 md:grid-cols-4 lg:grid-cols-4' : 'grid-cols-3']"
    >
      <div
        class="w-full"
        v-for="(choice, index) in choices"
        :key="index"
      >
        <ActionButton @getChoice="rollFight" :action="choice" />
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import ActionButton from '../ActionButton.vue'
import { defineEmits, computed, defineProps } from 'vue'

const props = defineProps({
    player: Object,
    ennemy: Object
})

const emit = defineEmits(['update-history'])

const choices = computed(() => props.player.availableActions)

// function fight(playerChoiceParam) {
//     playerChoice.value = playerChoiceParam
//     ennemyChoice.value = ennemy.value.availableActions[Math.floor(Math.random() * ennemy.value.availableActions.length)]
// }

function rollFight(playerChoice) {
    const ennemyChoice = props.ennemy.availableActions[Math.floor(Math.random() * props.ennemy.availableActions.length)]
    const playerImmunities = props.player.immunities
    const ennemyImmunities = props.ennemy.immunities
    let result = ''

console.log('choix cpu en direct',ennemyChoice.value, 'choix player en direct',playerChoice.value);
    // Check for immunities first
    if (ennemyImmunities.includes(playerChoice)) {
        result = 'Aucun effet sur l\'ennemi !'
    } else if (playerImmunities.includes(ennemyChoice)) {
        result = 'Aucun effet sur vous !'
    }
    // fight logic
     else if (playerChoice === ennemyChoice) {
        result = 'Egalité'
    } else if (
        (playerChoice === 'attaquer' && ennemyChoice === 'moquer') ||
        (playerChoice === 'parer' && ennemyChoice === 'attaquer') ||
        (playerChoice === 'moquer' && ennemyChoice === 'parer') ||
        (playerChoice === 'attaquer' && ennemyChoice === 'moquer*') ||
        (playerChoice === 'parer' && ennemyChoice === 'attaquer*') ||
        (playerChoice === 'moquer' && ennemyChoice === 'parer*') ||
        (playerChoice === 'menacer' && ennemyChoice === 'moquer') ||
        (playerChoice === 'menacer' && ennemyChoice === 'moquer*') ||
        (playerChoice === 'menacer' && ennemyChoice === 'parer') ||
        (playerChoice === 'menacer' && ennemyChoice === 'parer*') ||
        (playerChoice === 'attaquer' && ennemyChoice === 'menacer')
    ) {
        result = 'Vous avez gagné !'
    } else if (
        (ennemyChoice === 'attaquer' && playerChoice === 'moquer') ||
        (ennemyChoice === 'parer' && playerChoice === 'attaquer') ||
        (ennemyChoice === 'moquer' && playerChoice === 'parer') ||
        (ennemyChoice === 'attaquer' && playerChoice === 'moquer*') ||
        (ennemyChoice === 'parer' && playerChoice === 'attaquer*') ||
        (ennemyChoice === 'moquer' && playerChoice === 'parer*') ||
        (ennemyChoice === 'menacer' && playerChoice === 'moquer') ||
        (ennemyChoice === 'menacer' && playerChoice === 'moquer*') ||
        (ennemyChoice === 'menacer' && playerChoice === 'parer') ||
        (ennemyChoice === 'menacer' && playerChoice === 'parer*') ||
        (ennemyChoice === 'attaquer' && playerChoice === 'menacer')
        ) {
        result = 'Vous avez perdu !'
    } else if (
        (playerChoice === 'attaquer*' && ennemyChoice === 'moquer') ||
        (playerChoice === 'parer*' && ennemyChoice === 'attaquer') ||
        (playerChoice === 'moquer*' && ennemyChoice === 'parer') ||
        (playerChoice === 'attaquer*' && ennemyChoice === 'moquer*') ||
        (playerChoice === 'parer*' && ennemyChoice === 'attaquer*') ||
        (playerChoice === 'moquer*' && ennemyChoice === 'parer*') ||
        (playerChoice === 'attaquer*' && ennemyChoice === 'menacer') 
    ) {
        result = 'Vous avez gagné ! ( coup critique )'
    } else if (
        (ennemyChoice === 'attaquer*' && playerChoice === 'moquer') ||
        (ennemyChoice === 'parer*' && playerChoice === 'attaquer') ||
        (ennemyChoice === 'moquer*' && playerChoice === 'parer') ||
        (ennemyChoice === 'attaquer*' && playerChoice === 'moquer*') ||
        (ennemyChoice === 'parer*' && playerChoice === 'attaquer*') ||
        (ennemyChoice === 'moquer*' && playerChoice === 'parer*') ||
        (ennemyChoice === 'attaquer*' && playerChoice === 'menacer') 
        ) {
        result = 'Vous avez perdu ! ( coup critique )'
    } else {
        result = 'Egalité'
    }
    
    emit('update-history', { playerChoice, ennemyChoice, result })
}
</script>