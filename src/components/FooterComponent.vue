<template>
    <footer>
        <div class="container-fluid p-2 d-flex justify-content-center">
            <p class="fw-bold fs-3">Made with <span class="text-danger px-1">&hearts;</span> by Team 4</p>
        </div>
    </footer>
</template>
  
<script>
export default {
    name: 'FooterComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
footer {
    background-color: #202020;
}

.container-fluid {
    p {
        color:#F5E6C9 !important;
    }
}
</style>