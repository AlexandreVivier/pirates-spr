<template>
    <div class="flex flex-col items-center w-screen bg-stone-100 dark:bg-stone-900 w-full min-h-screen h-full px-2 py-12 gap-8">
    <TitleCard />
    <div class="flex flex-col justify-center items-center w-full mb-4">
    <template v-if="noGame">
            <div class="flex flex-col justify-center items-center w-full mb-4">
                <p class="text-center italic text-2xl text-stone-500 pb-6 pixelify-sans">
                    Sélectionnez votre mode de jeu :
                </p>
                <CommonButton class="w-full md:w-1/4 mb-4" label="Duel" @click="defineGameMode('duel')"/>
                <CommonButton class="w-full md:w-1/4" label="Aventure" @click="defineGameMode('aventure')"/>
            </div>
    </template>
    <template v-if="selectionScreen">
        <h3 class=" py-2 px-4 text-center w-full jacquard12 text-stroke-5 text-xl md:text-4xl text-green-900 mb-6">{{ gameMode }}</h3>
        <p class="text-center italic text-2xl text-stone-500 pb-6 pixelify-sans">
            Sélectionnez votre pirate :
        </p>
            <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-1 justify-items-center w-full md:w-3/4 lg:w-1/2 mb-2">
                <PortraitSelect :player="barbeBlonde"
                    @click="selectPlayer(barbeBlonde)"
                    :class="{ 'filter-none border-double border-8 !border-green-600 !bg-slate-800 transform -scale-x-100': player === barbeBlonde }"
                />
                <PortraitSelect :player="francoisDeSurcoup"
                    @click="selectPlayer(francoisDeSurcoup)"
                    :class="{ 'filter-none border-double border-8 !border-green-600 !bg-slate-800 transform -scale-x-100': player === francoisDeSurcoup }"
                />
                <PortraitSelect :player="jungleJane"
                    @click="selectPlayer(jungleJane)"
                    :class="{ 'filter-none border-double border-8 !border-green-600 !bg-slate-800 transform -scale-x-100': player === jungleJane }"
                />
                <PortraitSelect :player="jackMarrow"
                    @click="selectPlayer(jackMarrow)"
                    :class="{ 'filter-none border-double border-8 !border-green-600 !bg-slate-800 transform -scale-x-100': player === jackMarrow }"
                />
                <PortraitSelect :player="esperanzaPolvora"
                    @click="selectPlayer(esperanzaPolvora)"
                    :class="{ 'filter-none border-double border-8 !border-green-600 !bg-slate-800 transform -scale-x-100': player === esperanzaPolvora }"
                />
            </div>
        <div v-if="player!= null" class="w-full flex flex-col items-center">
            <p class="text-center italic text-2xl text-stone-500 pb-6 pixelify-sans">Je choisis 
                <span class="text-stone-950 dark:text-stone-100 font-bold">{{ player.name }} !</span>
            </p>
            <CommonButton class="w-full md:w-1/4" label="Commencer à jouer !" @click="startGame" />
        </div>
        <div v-if="player!= null" class="w-full flex flex-col text-shadow-special items-center mt-8 px-4">
            <p class="text-center text-stone-900 dark:text-stone-100 text-lg md:text-4xl w-full md:w-1/2 font-bold jacquard12 md:py-4">"{{ player.biography }}"</p>
            <p class="text-center italic text-stone-800 dark:text-stone-300 text-md md:text-2xl md:pt-4">- {{ player.description }} -</p>
        </div>
    </template>
    <template v-if="gameStarted">
        <div class="flex justify-around items-center w-5/8 md:w-full">
            <HitPoints label="(Vous)" :currHealth="player.currHealth" :maxHealth="player.maxHealth" :charaName="player.name"/>
            <HitPoints 
                v-if="ennemy"
                label="(Ennemi)"
                :currHealth="ennemy.currHealth"
                :maxHealth="ennemy.maxHealth"
                :charaName="ennemy.name"
            />
          </div>
      <div v-if="gameMode === 'aventure'" class="flex justify-start items-center w-full md:w-1/2">
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
        <div v-show="gameover === true && gameMode === 'duel'" class="flex flex-col justify-center items-center mb-4">
            <img v-if="defeat" :src="ennemy.portrait" alt="Game Over" class="w-32 bg-gradient-to-b from-red-950 via-red-500 to-red-950 border-2 border-stone-500 h-32 mb-4"/>
            <img v-else :src="player.portrait" alt="Victory" class="w-32 h-32 bg-gradient-to-b from-green-950 via-green-500 to-green-950 border-2 border-stone-500 mb-4"/>
            <p class="text-center italic text-2xl bastarda pb-6" :class="endGameMessage === 'Vous avez perdu la partie !' ? 'text-red-500' : 'text-green-500'">{{ endGameMessage }}</p>
            <CommonButton label="Rejouer ?" @click="resetGame" />
        </div>
        <div v-show="gameover === true && gameMode === 'aventure'" class="flex flex-col justify-center items-center mb-4">
            <div v-if="defeat">
                <img :src="ennemy.portrait" alt="Game Over" class="w-32 bg-gradient-to-b from-red-950 via-red-500 to-red-950 border-2 border-stone-500 h-32 mb-4"/>
                <p class="text-center italic text-2xl bastarda pb-6 text-red-500">{{ endGameMessage }}</p>
                <CommonButton label="Rejouer ?" @click="resetGame" />
            </div>
            <div v-else>
            <VictoryShop @next-fight="nextFight"/>
            </div> 
        </div>
        <div v-if="gameover === false" class="flex flex-col w-full min-h-[50vh] justify-center items-center">
            <FightWindow :player="player" :playerChoice="playerChoice"
            :ennemy="ennemy" :ennemyChoice="ennemyChoice"/>
            <FightPannel @update-history="updateHistory" :player="player" :ennemy="ennemy"/>
        </div>
        <HistoryLog :logs="logs"/>
        </template>
    </div>
    </div>
    <AppCopyrights />
</template>

<script lang="js" setup>
import CommonButton from './CommonButton.vue'
import TitleCard from './TitleCard.vue'
import AppCopyrights from './AppCopyrights.vue'
import PortraitSelect from './PortraitSelect.vue'
import HitPoints from './HitPoints.vue'
import FightWindow from './elements/FightWindow.vue'
import FightPannel from './elements/FightPannel.vue'
import HistoryLog from './HistoryLog.vue'
import VictoryShop from './VictoryShop.vue'
import { ref } from 'vue'
import { 
  barbeBlonde, 
  francoisDeSurcoup, 
  jungleJane, 
  jackMarrow,
  esperanzaPolvora
} from './classes/characters.js'
import { Adventure } from './classes/adventure.js'

const player = ref(null)
const ennemy = ref(null)
const gameMode = ref(null)
const noGame = ref(true)
const selectionScreen = ref(false)
const gameStarted = ref(false)
const gameover = ref(false)
const endGameMessage = ref('')
const adventure = ref(null)
const playerChoice = ref(null)
const ennemyChoice = ref(null)
const logs = ref([])
const victory = ref(false)
const defeat = ref(false)

function defineGameMode(mode) {
    gameMode.value = mode
    noGame.value = false
    selectionScreen.value = true
    adventure.value = new Adventure(null, 0, [], 0)
}

function selectPlayer(selectedPlayer) {
    player.value = selectedPlayer
}

function startGame() {
        if (gameMode.value === 'aventure' && player.value) {
        adventure.value.protagonist = player.value
        adventure.value.ennemies = generateEnnemies()
        } else {
        adventure.value.protagonist = player.value
        adventure.value.ennemies = [generateOpponent()]
        }
    ennemy.value = adventure.value.ennemies[0]
    gameStarted.value = true
    selectionScreen.value = false
    // console.log( ennemy.value, ennemy.value.currHealth, ennemy.value.maxHealth )
}

function generateEnnemies() {
    const allEnnemies = [barbeBlonde, francoisDeSurcoup, jungleJane, jackMarrow, esperanzaPolvora]
    const ennemiesFiltered = allEnnemies.filter(chara => chara.name !== player.value.name)
    const ennemiesRndm = suffleArray(ennemiesFiltered)
    return ennemiesRndm
}

function generateOpponent() {
const ennemiesRndm = generateEnnemies()
return ennemiesRndm[0]
}

function suffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

function updateHistory(fight) {
    // console.log('fight reçu dans newgame', fight);
    ennemyChoice.value = fight.ennemyChoice
    playerChoice.value = fight.playerChoice
  logs.value.push(`Votre action : ${fight.playerChoice}, Action de l'adversaire : ${fight.ennemyChoice}, Résultat : ${fight.result}`)
  // Application des dégâts
  if (fight.result === 'Vous avez perdu !') {
    player.value.currHealth--
  } else if (fight.result === 'Vous avez gagné !') {
    ennemy.value.currHealth--
  } else if (fight.result === 'Vous avez perdu ! ( coup critique )') {
    player.value.currHealth -= 2
  } else if (fight.result === 'Vous avez gagné ! ( coup critique )') {
    ennemy.value.currHealth -= 2
  } else {
    // rien
  }
  // Empêche les valeurs négatives
  if (player.value.currHealth < 0) player.value.currHealth = 0
  if (ennemy.value.currHealth < 0) ennemy.value.currHealth = 0
  // Vérifie la fin du jeu
  if (player.value.currHealth <= 0 || ennemy.value.currHealth <= 0) {
    gameover.value = true
    // endGameMessage.value = player.value.currHealth <= 0
    //   ? 'Vous avez perdu la partie !'
    //   : 'Vous avez gagné la partie !'
      if (player.value.currHealth <= 0) {
        defeat.value = true
        endGameMessage.value = 'Vous avez perdu la partie !'
    } else {
        victory.value = true
        endGameMessage.value = 'Vous avez gagné la partie !'
    }
    // Si en mode aventure et victoire, mise à jour de l'aventure
    if (gameMode.value === 'aventure' && ennemy.value.currHealth <= 0) {
        console.log('en fin de game', adventure.value.ennemies);
        // temp
        player.value.currHealth = player.value.maxHealth
        adventure.value.protagonist.currHealth = adventure.value.protagonist.maxHealth
        ennemy.value.currHealth = ennemy.value.maxHealth
        let reward = 2
        if(player.value.name === 'Barbe-blonde') {
            adventure.value.wealth += reward * 2
        } else {
            adventure.value.wealth += reward
        }
    } else {
        console.log('fin de partie');
  }
}
}

function resetGame() {
  window.location.reload();
}

function nextFight() {
    if (adventure.value.ennemies.length > 0) {
        adventure.value.ennemies.shift()
        ennemy.value = adventure.value.ennemies[0]
        console.log('next fight', adventure.value.ennemies);
        player.value.currHealth = player.value.maxHealth
        ennemy.value.currHealth = ennemy.value.maxHealth
        gameover.value = false
        victory.value = false
        defeat.value = false
        endGameMessage.value = ''
        logs.value = []
        playerChoice.value = null
        ennemyChoice.value = null
    } else {
        // Plus d'ennemis, fin de l'aventure
    //    todo
    }
}

</script>