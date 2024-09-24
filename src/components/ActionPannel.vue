<template>
    <div class="container">
        <h2>Choisissez votre action :</h2>
        <ActionButton @getChoice='rollFight' action="attaquer" />
        <ActionButton @getChoice='rollFight' action="parer" />
        <ActionButton @getChoice='rollFight' action="provoquer" />
    </div>
</template>

<script lang="js" setup>
import ActionButton from './ActionButton.vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['update-history'])

const choices = ['attaquer', 'parer', 'provoquer']

function rollFight(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    let result = ''

    if (playerChoice === computerChoice) {
        result = 'Egalité'
    } else if (
        (playerChoice === 'attaquer' && computerChoice === 'provoquer') ||
        (playerChoice === 'parer' && computerChoice === 'attaquer') ||
        (playerChoice === 'provoquer' && computerChoice === 'parer')
    ) {
        result = 'Vous avez gagné !'
    } else {
        result = 'Vous avez perdu !'
    }

    console.log('vous :', playerChoice, 'PNJ : ', computerChoice, result)
    
    emit('update-history', { playerChoice, computerChoice, result })
}
</script>