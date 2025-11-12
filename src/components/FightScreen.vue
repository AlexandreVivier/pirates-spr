<template>
    <div class="bg-stone-100 dark:bg-stone-900 min-h-screen">
    <div class="flex flex-col items-center w-full bg-stone-100 dark:bg-stone-900 h-screen">
        <TitleCard v-if="gameover === true"/>

        <div class="flex justify-around items-center w-5/8 md:w-full">
            <HitPoints label="(Vous)" :currHealth="playerCurrHealth" :maxHealth="playerMaxHealth" :charaName="playerName"/>
            <HitPoints label="(Ennemi)" :currHealth="enemyCurrHealth" :maxHealth="enemyMaxHealth" :charaName="ennemyName" class="flex-row-reverse"/>
        </div>

        <div v-show="gameover === true" class="flex flex-col justify-center items-center mb-4">
            <img v-if="endGameMessage=== 'Vous avez perdu la partie !'" :src="enemy.portrait" alt="Game Over" class="w-32 bg-gradient-to-b from-red-950 via-red-500 to-red-950 border-2 border-stone-500 h-32 mb-4"/>
            <img v-else :src="player.portrait" alt="Victory" class="w-32 h-32 bg-gradient-to-b from-green-950 via-green-500 to-green-950 border-2 border-stone-500 mb-4"/>
            <p class="text-center italic text-2xl bastarda pb-6" :class="endGameMessage === 'Vous avez perdu la partie !' ? 'text-red-500' : 'text-green-500'">{{ endGameMessage }}</p>
            <CommonButton label="Rejouer ?" action="/selection"/>
        </div>

        <div v-if="gameover === false" class="flex flex-col w-full min-h-[50vh] justify-center items-center">
            <DuelingImages :playerSkin="playerSkins[playerChoice]" 
            :ennemySkin="enemySkins[computerChoice]"/>
            <ActionPannel @update-history="updateHistory" :player="player" :enemy="enemy"/>
        </div>

        <HistoryLog :logs="logs"/>
        <AppCopyrights />
    </div>
    </div>
</template>

<script lang="js" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import ActionPannel from './ActionPannel.vue'
import HitPoints from './HitPoints.vue'
import TitleCard from './TitleCard.vue'
import HistoryLog from './HistoryLog.vue'
import CommonButton from './CommonButton.vue'
import DuelingImages from './DuelingImages.vue'
import AppCopyrights from './AppCopyrights.vue'
import { 
  barbeBlonde, 
  francoisDeSurcoup, 
  jungleJane, 
  jackMarrow,
  esperanzaPolvora
} from './classes/characters.js'

const route = useRoute()

const playerName = route.query.playerName || 'Barbe-blonde'
const allNames = ['Barbe-blonde', 'François de Surcoup', 'Jack Marrow', 'Jungle Jane', 'Esperanza Pólvora y Hacha']
const ennemyName = allNames.filter(name => name !== playerName)[Math.floor(Math.random() * (allNames.length - 1))]
// console.log('Ennemy selected:', ennemyName, 'against player:', playerName)

const player = computed(() => {
    switch (playerName) {
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
            return barbeBlonde;
    }
});

const enemy = computed(() => {
    switch (ennemyName) {
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
            return francoisDeSurcoup;
    }
});
const playerCurrHealth = ref(player.value.currHealth)
const enemyCurrHealth = ref(enemy.value.currHealth)
const playerMaxHealth = ref(player.value.maxHealth)
const enemyMaxHealth = ref(enemy.value.maxHealth)
const logs = ref([])
const gameover = ref(false)
const endGameMessage = ref('')

const playerSkins = computed(() => {
switch (playerName) {
    case 'Barbe-blonde':
        return { attaquer: '/images/sprites/Barbe-blonde/attack.gif', parer: '/images/sprites/Barbe-blonde/block.gif', moquer: '/images/sprites/Barbe-blonde/mock.gif', idle: '/images/sprites/Barbe-blonde/iddle.gif' }
    case 'François de Surcoup':
        return { attaquer: '/images/sprites/FrancoisDeSurcoup/attack.gif', parer: '/images/sprites/FrancoisDeSurcoup/block.gif', moquer: '/images/sprites/FrancoisDeSurcoup/mock.gif', idle: '/images/sprites/FrancoisDeSurcoup/iddle.gif' }
    case 'Jack Marrow':
        return { attaquer: '/images/sprites/JackMarrow/attack.gif', parer: '/images/sprites/JackMarrow/block.gif', moquer: '/images/sprites/JackMarrow/mock.gif', idle: '/images/sprites/JackMarrow/iddle.gif' }
    case 'Jungle Jane':
        return { 'attaquer*': '/images/sprites/JungleJane/attack.gif', parer: '/images/sprites/JungleJane/block.gif', moquer: '/images/sprites/JungleJane/mock.gif', idle: '/images/sprites/JungleJane/iddle.gif' }
    case 'Esperanza Pólvora y Hacha':
        return { attaquer: '/images/sprites/EsperanzaPolvora/attack.gif', parer: '/images/sprites/EsperanzaPolvora/block.gif', moquer: '/images/sprites/EsperanzaPolvora/mock.gif', idle: '/images/sprites/EsperanzaPolvora/iddle.gif', menacer: '/images/sprites/EsperanzaPolvora/threat.gif' }
    default:
        return { attaquer: '/images/sprites/attack.gif', parer: '/images/sprites/block.gif', moquer: '/images/sprites/mock.gif', idle: '/images/sprites/iddle.gif' }
}
})

const enemySkins = computed(() => {
switch (ennemyName) {
    case 'Barbe-blonde':
        return { attaquer: '/images/sprites/Barbe-blonde/attack.gif', parer: '/images/sprites/Barbe-blonde/block.gif', moquer: '/images/sprites/Barbe-blonde/mock.gif', idle: '/images/sprites/Barbe-blonde/iddle.gif' }
    case 'François de Surcoup':
        return { attaquer: '/images/sprites/FrancoisDeSurcoup/attack.gif', parer: '/images/sprites/FrancoisDeSurcoup/block.gif', moquer: '/images/sprites/FrancoisDeSurcoup/mock.gif', idle: '/images/sprites/FrancoisDeSurcoup/iddle.gif' }
    case 'Jack Marrow':
        return { attaquer: '/images/sprites/JackMarrow/attack.gif', parer: '/images/sprites/JackMarrow/block.gif', moquer: '/images/sprites/JackMarrow/mock.gif', idle: '/images/sprites/JackMarrow/iddle.gif' }
    case 'Jungle Jane':
        return { 'attaquer*': '/images/sprites/JungleJane/attack.gif', parer: '/images/sprites/JungleJane/block.gif', moquer: '/images/sprites/JungleJane/mock.gif', idle: '/images/sprites/JungleJane/iddle.gif' }
    case 'Esperanza Pólvora y Hacha':
        return { attaquer: '/images/sprites/EsperanzaPolvora/attack.gif', parer: '/images/sprites/EsperanzaPolvora/block.gif', moquer: '/images/sprites/EsperanzaPolvora/mock.gif', idle: '/images/sprites/EsperanzaPolvora/iddle.gif', menacer: '/images/sprites/EsperanzaPolvora/threat.gif' }
    default:
        return { attaquer: '/images/sprites/attack.gif', parer: '/images/sprites/blockE.gif', moquer: '/images/sprites/mockE.gif', idle: '/images/sprites/iddleE.gif' }
}
})

const playerChoice = ref('idle')
const computerChoice = ref('idle')

function updateHistory(fight) {
  logs.value.push(`Votre action : ${fight.playerChoice}, Action de l'adversaire : ${fight.computerChoice}, Résultat : ${fight.result}`)
  playerChoice.value = fight.playerChoice
  computerChoice.value = fight.computerChoice

  // Application des dégâts
  if (fight.result === 'Vous avez perdu !') {
    playerCurrHealth.value--
  } else if (fight.result === 'Vous avez gagné !') {
    enemyCurrHealth.value--
  } else if (fight.result === 'Vous avez perdu ! (attaque immunisée)') {
    playerCurrHealth.value--
  } else if (fight.result === 'Vous avez gagné ! (attaque immunisée)') {
    enemyCurrHealth.value--
  } else if (fight.result === 'Vous avez perdu ! (coup critique)') {
    playerCurrHealth.value -= 2
  } else if (fight.result === 'Vous avez gagné ! (coup critique)') {
    enemyCurrHealth.value -= 2
  }

  // Empêche les valeurs négatives
  if (playerCurrHealth.value < 0) playerCurrHealth.value = 0
  if (enemyCurrHealth.value < 0) enemyCurrHealth.value = 0

  // Vérifie la fin du jeu
  if (playerCurrHealth.value <= 0 || enemyCurrHealth.value <= 0) {
    gameover.value = true
    endGameMessage.value = playerCurrHealth.value <= 0
      ? 'Vous avez perdu la partie !'
      : 'Vous avez gagné la partie !'
  }
}
</script>

<style>
.bastarda {
    font-family: 'bastarda';
}
.jacquard12 {
    font-family: 'jacquard12';
}

.pixelify-sans {
    font-family: 'pixelify-sans';
}

.text-stroke-3 {
    -webkit-text-stroke:0.02em rgb(130, 66, 66);
}
</style>
