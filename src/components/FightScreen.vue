<template v-if="enemy && player">
    <div class="bg-stone-100 dark:bg-stone-900 min-h-screen h-full px-1">
    <div class="flex flex-col items-center w-full bg-stone-100 dark:bg-stone-900 h-screen">
        <TitleCard v-if="gameover === true"/>
        <div class="flex justify-around items-center w-5/8 md:w-full">
            <HitPoints label="(Vous)" :currHealth="playerCurrHealth" :maxHealth="playerMaxHealth" :charaName="playerName"/>
            <!-- <HitPoints label="(Ennemi)" :currHealth="enemyCurrHealth" :maxHealth="enemyMaxHealth" :charaName="ennemyName" class="flex-row-reverse"/> -->
            <HitPoints 
                v-if="enemy"
                label="(Ennemi)"
                :currHealth="enemyCurrHealth"
                :maxHealth="enemyMaxHealth"
                :charaName="ennemyName"
            />
          </div>
      <div v-if="props.mode === 'aventure'" class="flex justify-start items-center w-full md:w-1/2">
        <p class="text-center italic text-2xl dark:text-yellow-400 text-yellow-700 bastarda pb-6">
          <template v-if="adventure && adventure.wealth > 0">
            <span class="inline mr-2">Pièces d'or :</span>
            <img
              v-for="n in adventure.wealth"
              :key="n"
              src="/images/icons/coin.png"
              class="inline h-6 w-6"
              alt="pièce d'or"
            />
          </template>
          <span v-else>
            aucune pièce d'or !
          </span>
        </p>
      </div>
        <div v-show="gameover === true && props.mode === 'simple'" class="flex flex-col justify-center items-center mb-4">
            <img v-if="endGameMessage=== 'Vous avez perdu la partie !'" :src="enemy.portrait" alt="Game Over" class="w-32 bg-gradient-to-b from-red-950 via-red-500 to-red-950 border-2 border-stone-500 h-32 mb-4"/>
            <img v-else :src="player.portrait" alt="Victory" class="w-32 h-32 bg-gradient-to-b from-green-950 via-green-500 to-green-950 border-2 border-stone-500 mb-4"/>
            <p class="text-center italic text-2xl bastarda pb-6" :class="endGameMessage === 'Vous avez perdu la partie !' ? 'text-red-500' : 'text-green-500'">{{ endGameMessage }}</p>
            <CommonButton label="Rejouer ?" :action="{ path: '/', query: {} }"/>
        </div>
        <div v-show="gameover === true && endGameMessage === 'Vous avez gagné la partie !' && props.mode === 'aventure'" class="flex flex-col justify-center items-center mb-4">
          <VictoryShop />
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
import { ref, computed, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import ActionPannel from './ActionPannel.vue'
import HitPoints from './HitPoints.vue'
import TitleCard from './TitleCard.vue'
import HistoryLog from './HistoryLog.vue'
import CommonButton from './CommonButton.vue'
import DuelingImages from './DuelingImages.vue'
import AppCopyrights from './AppCopyrights.vue'
import VictoryShop from './VictoryShop.vue'
import { 
  barbeBlonde, 
  francoisDeSurcoup, 
  jungleJane, 
  jackMarrow,
  esperanzaPolvora
} from './classes/characters.js'
import { Adventure } from './classes/adventure.js'

const props = defineProps({
    mode: String
})

const route = useRoute()

const playerName = route.query.playerName || 'Barbe-blonde'
const allNames = ['Barbe-blonde', 'François de Surcoup', 'Jack Marrow', 'Jungle Jane', 'Esperanza Pólvora y Hacha']
const player = computed(() => getCharacterByName(playerName));

// Préparation de l'aventure
const adventure = ref(null)
const ennemyName = ref(null)
// Préparation de l'aventure
if (props.mode === 'aventure') {
  const ennemies = allNames.filter(name => name !== playerName)
  const ennemiesRndm = suffleArray(ennemies)
  adventure.value = new Adventure(player, 3, ennemiesRndm, 0)
  ennemyName.value = adventure.value.ennemies[0]
} else {
  ennemyName.value = allNames.filter(name => name !== playerName)[
    Math.floor(Math.random() * (allNames.length - 1))
  ]
}

const enemy = computed(() =>
  ennemyName.value ? getCharacterByName(ennemyName.value) : null
);

const playerCurrHealth = ref(player.value?.currHealth ?? 0)
const enemyCurrHealth = ref(enemy.value?.currHealth ?? 0)
const playerMaxHealth = ref(player.value?.maxHealth ?? 1)
const enemyMaxHealth = ref(enemy.value?.maxHealth ?? 1)

const logs = ref([])
const gameover = ref(false)
const endGameMessage = ref('')

const playerSkins = computed(() => player.value.skins)
const enemySkins = computed(() => enemy.value.skins)

const playerChoice = ref('idle')
const computerChoice = ref('idle')

function suffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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

function updateHistory(fight) {
  logs.value.push(`Votre action : ${fight.playerChoice}, Action de l'adversaire : ${fight.computerChoice}, Résultat : ${fight.result}`)
  playerChoice.value = fight.playerChoice
  computerChoice.value = fight.computerChoice
  // Application des dégâts
  if (fight.result === 'Vous avez perdu !') {
    playerCurrHealth.value--
  } else if (fight.result === 'Vous avez gagné !') {
    enemyCurrHealth.value--
  } else if (fight.result === 'Vous avez perdu ! ( coup critique )') {
    playerCurrHealth.value -= 2
  } else if (fight.result === 'Vous avez gagné ! ( coup critique )') {
    enemyCurrHealth.value -= 2
  } else {
    // rien
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
    // Si en mode aventure et victoire, mise à jour de l'aventure
    if (props.mode === 'aventure' && enemyCurrHealth.value <= 0) {
      adventure.value.wealth += 1
      adventure.value.fightNumber += 1
      adventure.value.ennemies.shift()
      ennemyName.value = adventure.value.ennemies[0] || null
      console.log('Aventure mise à jour :', adventure.value.ennemies)
    }
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
