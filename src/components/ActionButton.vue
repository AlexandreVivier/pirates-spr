<template>
    <button @click="$emit('getChoice', props.action)">{{ props.action }}</button>
</template>

<script lang="js" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    action: String
})

defineEmits(['getChoice'])
</script>