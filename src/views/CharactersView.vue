<template>
    <div class="mainContainer">
        <p v-if="loading">Loading</p>
        <div v-else-if="results" class="container">
            <h1 class="text-uppercase fw-bold home-title text-center pt-5">characters</h1>
            <div class="d-flex justify-content-end align-items-center gap-2">
                <h3 class="text-white fs-6 m-0 p-0">Results per page</h3>
                <select @change="handleChange" name="quantity">
                    <option value="10">10</option>
                    <option selected value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>
            <div>
                <nav>
                    <ul class="pagination justify-content-center pt-5">
                        <li  class="page-item" v-for="link in results.links">
                            <button v-html="link.label" :disabled="!link.url" class="page-link" :class="link.active && 'active'" @click="handlePagination(link.url)"></button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 justify-content-center py-5">
                <div v-for="character in results.data" class="col p-2">
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
import axios from 'axios';
import { useResultStore } from '../stores/results'
import { onMounted, ref, watchEffect } from 'vue';

const store = useResultStore()
const loading = ref(true)
const results = ref(null)
const quantity = ref(20)

const handleChange = (e) => {
    store.getAllResultsWithPaginate(e.target.value);

}

const handlePagination = (url) =>
{
    axios.get(url).then(res => 
    {
        if (res.data.success)
        {
            results.value = res.data.results
        }
    })
}

onMounted(() => {
    store.getAllResultsWithPaginate(quantity.value);
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

select, option{
    background-color: #404040;
    color: white;
    padding: 0 5px;
    border-radius: 5px;
}


</style>