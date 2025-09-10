<template>
    <div class="flex flex-col justify-center items-center mb-4 w-1/2 p-6 dark:text-stone-100">
        <div>
            <h2 class="font-semibold py-2 px-4 text-center w-full bastarda text-2xl">Choisissez votre action :</h2>
        </div>
        <div class="flex w-full gap-6 justify-center">
            <div class="w-full" v-for="(choice, index) in choices" :key="index">
                <ActionButton @getChoice='rollFight' :action="choice" />
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import ActionButton from './ActionButton.vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['update-history'])

const choices = ['attaquer', 'parer', 'moquer']

function rollFight(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    let result = ''

    if (playerChoice === computerChoice) {
        result = 'Egalité'
    } else if (
        (playerChoice === 'attaquer' && computerChoice === 'moquer') ||
        (playerChoice === 'parer' && computerChoice === 'attaquer') ||
        (playerChoice === 'moquer' && computerChoice === 'parer')
    ) {
        result = 'Vous avez gagné !'
    } else {
        result = 'Vous avez perdu !'
    }    
    emit('update-history', { playerChoice, computerChoice, result })
}
</script>