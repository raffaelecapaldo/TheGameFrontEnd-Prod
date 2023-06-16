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
                <div @click="openhamb = !openhamb" class="hamb-button">
                        <ul class="nav-mobile" :class="{'nav-mobile-open': openhamb}">
                        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                        <li><router-link :to="{ name: 'characters' }">Characters</router-link></li>
                        <li><router-link to="">Rules</router-link></li>
                        <li><router-link to="">Team</router-link></li>
                        <li><router-link :to="{ name: 'about' }">Contact Us</router-link></li>
                    </ul>
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
    height: 70px;
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
            font-size: 24px;
            font-weight: bold;
            color:#F5E6C9;
        }
    }
}

.hamb-button {
    display: none;
    fill: #F5E6C9;
    cursor:pointer;
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
        max-width: 200px;
    position: absolute;
    top: 7px;
    right: 0%;
    padding: 11px 20px;
    top: 94px;
    height: 0px;
    background-color: #202020;
    transition: 0.3s;
    li {
        a {
            color:transparent;
            transition:0s;
        }
    }

    
    }

    .nav-mobile-open {
        height: 200px!important;
        li {
            a {
                color:#F5E6C9;
            }
        }
    }

}
</style>