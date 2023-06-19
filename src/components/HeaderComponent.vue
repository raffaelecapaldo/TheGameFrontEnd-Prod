<template>
    <header>
        <div class="nav-container h-100">
        <nav class="d-flex justify-content-between align-items-center text-uppercase py-3 h-100">
            <div class="box-logo">
                <img class="logo" src="/img/logo.png" alt="">
            </div>
            <!-- DESKTOP MENU -->
            <div class="center h-100">
                <ul class="d-flex align-items-center gap-5 h-100">
                    <li><router-link :to="{name: 'home'}">Home</router-link></li>
                    <li><router-link :to="{name: 'characters'}">Characters</router-link></li>
                    <li><router-link :to="{name: 'rules'}">Rules</router-link></li>
                    <li><router-link :to="{name: 'team'}">Team</router-link></li>
                    <li><router-link :to="{name: 'contact'}">Contact Us</router-link></li>
                </ul>



                </div>
                <!-- HAMBURGER MENU -->
                <div @click="openhamb = !openhamb" class="hamb-button">
                    <ul class="nav-mobile d-flex flex-column gap-3 pt-4" :class="{'nav-mobile-open': openhamb}">
                        <li @click="openhamb = true" ><router-link :to="{ name: 'home' }">Home</router-link></li>
                        <li  @click="openhamb = true"><router-link :to="{ name: 'characters' }">Characters</router-link></li>
                        <li><router-link  :to="{name: 'rules'}" >Rules</router-link></li>
                        <li><router-link  :to="{name: 'team'}">Team</router-link></li>
                        <li><router-link @click="openhamb = true" :to="{ name: 'contact' }">Contact Us</router-link></li>
                        <li><a href="https://raflarabel.000webhostapp.com/login">Login</a></li>
                    </ul>
                    <i v-if="!this.openhamb" class="fa-solid fa-bars text-white fs-2 p-3"></i>
                    <i v-if="this.openhamb" class="fa-solid fa-xmark text-white fs-1 p-3"></i> 
                </div>
                <!-- LOGIN -->
                <div class="right">
                    <li><a href="https://raflarabel.000webhostapp.com/login">Login</a></li>

                </div>
            </nav>
        </div>
        <div class="overlay" :class="{'show': openhamb}"></div>
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
    padding: 0 20px;
    .box-logo{
        height: 70px;
        width: 150px;
        padding: 8px;
        .logo {
            width: 100%;
            height: 100%;
        }
    }
    
}
.nav-container {
    li {
        list-style: none;
        border: 2px solid transparent;
        a {
            text-decoration: none;
            font-size: 20px;
            font-weight: 700;
            color:#F5E6C9;
        }
    }
}

.hamb-button {
    display: none;
    fill: #F5E6C9;
    cursor:pointer;
}
.router-link-active {

color:#F5E6C9!important;

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
        width: 70%;
        position: absolute;
        top: 69px;
        right: 0;
        z-index: 2;
        opacity: 0;
        transition: opacity 0.5s;
        z-index: -1;
    }
    .nav-mobile-open {
        background-color: #202020;
        height: fit-content !important;
        opacity: 1;
        z-index: 9999;
        padding-bottom:20px;
    }
    #login-button{
        border: 1px solid #F8D67F;
        width: 50%;
    }
}
.center {
    display: none !important;
}
.overlay{
    height: 397px;
    width: 30%;
    background-color: rgba(0, 0, 0, 0.397);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.5s;
}
.overlay.show {
  opacity: 1;
}

    @media screen and (min-width:1024px) {
        header{
            padding: 0 50px;
        }
        .hamb-button {
            display: none !important;
            fill: #F5E6C9;
            cursor:pointer;
        }
        .right{
            display: block !important;
        }
        .center{
            display: block !important;
        }
    }
</style>