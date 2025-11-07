<template>
    <div class="flex flex-col justify-center items-center mb-4 w-full md:w-1/2 md:p-6 dark:text-stone-100">
        <div>
            <h2 class="font-semibold py-2 px-4 text-center w-full bastarda text-shadow-special text-xl md:text-2xl">Choisissez votre action :</h2>
        </div>
        <div class="flex w-full md:gap-6 justify-center">
            <div class="w-full" v-for="(choice, index) in choices" :key="index">
                <ActionButton @getChoice='rollFight' :action="choice" />
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import ActionButton from './ActionButton.vue'
import { defineEmits, computed, defineProps } from 'vue'

const props = defineProps({
    player: Object,
    enemy: Object
})

const emit = defineEmits(['update-history'])

// const choices = ['attaquer', 'parer', 'moquer']
const choices = computed(() => props.player.availableActions)

function rollFight(playerChoice) {
    const computerChoice = props.enemy.availableActions[Math.floor(Math.random() * props.enemy.availableActions.length)]
    console.log(props.enemy.availableActions, props.enemy)
    const playerImmunities = props.player.immunities
    const enemyImmunities = props.enemy.immunities
    let result = ''

    // Check for immunities first
    if (enemyImmunities.includes(playerChoice)) {
        result = 'Vous avez perdu ! (attaque immunisée)'
    } else if (playerImmunities.includes(computerChoice)) {
        result = 'Vous avez gagné ! (attaque immunisée)'
    }
    // fight logic
     else if (playerChoice === computerChoice) {
        result = 'Egalité'
    } else if (
        (playerChoice === 'attaquer' && computerChoice === 'moquer') ||
        (playerChoice === 'parer' && computerChoice === 'attaquer') ||
        (playerChoice === 'moquer' && computerChoice === 'parer') ||
        (playerChoice === 'attaquer' && computerChoice === 'moquer*') ||
        (playerChoice === 'parer' && computerChoice === 'attaquer*') ||
        (playerChoice === 'moquer' && computerChoice === 'parer*')
    ) {
        result = 'Vous avez gagné !'
    } else if (
        (computerChoice === 'attaquer' && playerChoice === 'moquer') ||
        (computerChoice === 'parer' && playerChoice === 'attaquer') ||
        (computerChoice === 'moquer' && playerChoice === 'parer') ||
        (computerChoice === 'attaquer' && playerChoice === 'moquer*') ||
        (computerChoice === 'parer' && playerChoice === 'attaquer*') ||
        (computerChoice === 'moquer' && playerChoice === 'parer*') 
        ) {
        result = 'Vous avez perdu !'
    } else if (
        (playerChoice === 'attaquer*' && computerChoice === 'moquer') ||
        (playerChoice === 'parer*' && computerChoice === 'attaquer') ||
        (playerChoice === 'moquer*' && computerChoice === 'parer') ||
        (playerChoice === 'attaquer*' && computerChoice === 'moquer*') ||
        (playerChoice === 'parer*' && computerChoice === 'attaquer*') ||
        (playerChoice === 'moquer*' && computerChoice === 'parer*')
    ) {
        result = 'Vous avez gagné ! (coup critique)'
    } else if (
        (computerChoice === 'attaquer*' && playerChoice === 'moquer') ||
        (computerChoice === 'parer*' && playerChoice === 'attaquer') ||
        (computerChoice === 'moquer*' && playerChoice === 'parer') ||
        (computerChoice === 'attaquer*' && playerChoice === 'moquer*') ||
        (computerChoice === 'parer*' && playerChoice === 'attaquer*') ||
        (computerChoice === 'moquer*' && playerChoice === 'parer*')
        ) {
        result = 'Vous avez perdu ! (coup critique)'
    } else {
        result = 'Egalité'
    }
    
    emit('update-history', { playerChoice, computerChoice, result })
}
</script>