<template>
    <div>
        <p v-if="loading">Loading</p>
        <p v-else>ciao</p>
    </div>
</template>

<script setup>
import { useResultStore } from '../stores/results'
import { onMounted, ref, watchEffect } from 'vue';

const store = useResultStore()
let loading = ref(true)
let results = ref(null)


onMounted(() => {
  store.getAllResults();
});

watchEffect(() => {
  loading.value = store.isLoading;
  results.value = store.allResults;
});

  
</script>

<style lang="scss" scoped>

</style>