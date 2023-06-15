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
                <div @click="openhamb = !openhamb" class="hamb-button position-relative">
                    <div class="nav-mobile" :class="openhamb ? 'd-block' : 'd-none'">
                        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                        <li><router-link :to="{ name: 'characters' }">Characters</router-link></li>
                        <li><router-link to="">Rules</router-link></li>
                        <li><router-link to="">Team</router-link></li>
                        <li><router-link :to="{ name: 'about' }">Contact Us</router-link></li>
                    </div>
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="20" rx="8"></rect>
                        <rect y="30" width="100" height="20" rx="8"></rect>
                        <rect y="60" width="100" height="20" rx="8"></rect>
                    </svg>
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
            openhamb: false

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
    margin: 0 auto;

    li {
        list-style: none;

        a {
            text-decoration: none;
            color: #F5E6C9;
            font-size: 24px;
            font-weight: bold;
        }
    }
}

.hamb-button {
    display: none;
    fill: #F5E6C9;
}



@media screen and (max-width:1130px) {
    .center {
        display: none !important;
    }

    .right {
        display: none;
    }

    .hamb-button {
        display: block;
    }

    .nav-mobile {
        position: absolute;
        right: -16px;
        padding: 13px 20px;
        top: 72px;
        background-color: #202020;
    }

}
</style>