<template>
    <div class="mainContainer">
        <p v-if="loading">Loading</p>
        <div v-else class="container">
            <h1 class="text-uppercase fw-bold home-title text-center pt-5">characters</h1>
            <div>
                
            </div>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 justify-content-center py-5">
                <div v-for="character in results" class="col p-2">
                    <div class="card w-100 h-100 d-flex flex-column">
                        <img :src="'/img/characters-profile/' + character.type.name.toLowerCase() + '.jpg'"
                            class="card-img-top" :alt="character.type.name">
                        <div class="card-body">
                            <h5 class="char-title"> {{ character.name }}</h5>
                            <p class="text-uppercase">{{ character.type.name }}</p>
                            <router-link :to="{ name: 'character', params: { id: character.id } }">
                                Details <i class="fa-solid fa-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { useResultStore } from '../stores/results'
import { onMounted, ref, watchEffect } from 'vue';

const store = useResultStore()
let loading = ref(true)
let results = ref(null)
let pagination = ref(20)


onMounted(() => {
    store.getAllResultsWithPaginate(pagination.value);
});

watchEffect(() => {
    loading.value = store.isLoading;
    results.value = store.allResultsWithPagination;
});


</script>


<style lang="scss" scoped>
@use '../../src/assets/styles/partials/variables' as *;

a {
    text-decoration: none;
    color: inherit;
}

img {
    height: 100%;
    min-height: 200px;
}

.mainContainer,
.card {
    background-color: $primary-dark;
}

.card {
    color: white;
    background-color: #404040;
}

.home-title {
    font-weight: 700;
    font-size: 48px;
    line-height: 36px;
    letter-spacing: 0.38em;
    background: linear-gradient(90.02deg, rgba(248, 214, 127, 0) -4.78%, #F8D67F 48.47%, rgba(248, 214, 127, 0) 106.34%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.char-title {
    background: linear-gradient(90.02deg, rgba(152, 112, 11) -4.78%, #F8D67F 48.47%, rgba(190, 148, 40, 0) 106.34%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    font-size: 20px;
    line-height: 15px;
    letter-spacing: 0;

}
</style>