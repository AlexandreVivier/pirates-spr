<template>
    <button
        class="bg-white hover:bg-stone-200 text-stone-800 bastarda font-semibold text-lg py-2 px-4 border border-stone-400 rounded shadow"
        @click="navigate"
    >
        {{ label }}
    </button>
</template>

<script lang="js" setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

// Définir les props
const props = defineProps({
    action: String,
    label: String
})

const router = useRouter()

// Fonction pour naviguer
const navigate = () => {
    if (props.action) {
        router.push(props.action) // Utiliser props.action ici
    } else {
        console.warn("Aucune action définie pour ce bouton.")
    }
}
</script>
