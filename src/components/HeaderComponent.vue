<template>
    <header>
        <div class="nav-container">
        <nav class="d-flex justify-content-between align-items-center text-uppercase py-3">
            <div class="left">
                <img class="logo" src="/img/logo.png" alt="">
            </div>
            <div class="center d-flex gap-5">
                <li><router-link :to="{name: 'home'}">Home</router-link></li>
                <li><router-link :to="{name: 'characters'}">Characters</router-link></li>
                <li><router-link to="">Rules</router-link></li>
                <li><router-link to="">Team</router-link></li>
                <li><router-link :to="{name: 'about'}">Contact Us</router-link></li>



            </div>
            <div class="right">
                <li><router-link to="">Login</router-link></li>

            </div>
        </nav>
    </div>
    </header>
</template>
  
<script>
export default {
    name: 'HeaderComponent',
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
header {
    background-color: #202020;
}
.logo {
    width: 180px;
}

.nav-container {
    width: 95%;
    margin:0 auto;

    li {
        list-style: none;
        a {
            text-decoration: none;
            color:#F5E6C9;
            font-size:24px;
            font-weight: bold;
        }
    }
}
</style>