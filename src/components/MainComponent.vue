<template>
    <main>
        <div class="home d-flex justify-content-between">
            <div id="slogan" class="d-flex flex-column justify-content-center h-100 gap-3">
                <h1 class="home-title">WAR PRIME</h1>
                <p class="text-white">Immerse yourself in a captivating gameplay experience as you collect and deploy a diverse array of cards featuring iconic characters and mystical creatures. Unearth ancient artifacts, unleash devastating spells, and command legendary heroes to conquer your foes and emerge victorious.</p>
                <button class="d-flex justify-content-center"><span class="text-center">PLAY NOW</span></button>
            </div>
            <div class="box-image">
                <img src="/img/homepage/landscape.png" alt="" class="landscape">
            </div>
            <div class="box-image-mobile">
                <img src="/img/homepage/landscape-mobile.png" alt="" class="landscape-mobile">
            </div>
        </div>
    </main>
</template>
  
<script>
export default {
    name: 'MainComponent',
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
// HOMEPAGE
.home{
    padding: 0 50px;
    height: calc(100vh - 70px);
    width: 100vw;
    overflow-x: hidden;
    overflow-y: hidden;
    font-family: 'Play', sans-serif;
    background-color: #202020;
    display: flex;
    justify-content: space-between;
    .home-title{
        height: 80px;
        font-weight: 700;
        font-size: 48px;
        line-height: 36px;
        letter-spacing: 0.38em;
        background: linear-gradient(90.02deg, rgba(248, 214, 127, 0) -4.78%, #F8D67F 48.47%, rgba(248, 214, 127, 0) 106.34%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    p{
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 0.38em;
        // width: 642px;
    }
    button{
        width: 40%;
        padding: 6px 57px;
        border: 1px solid #F8D67F;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 0.38em;
        background-color: transparent;
        color: white;
        text-align: center;
    }
    .box-image{
        min-width: 1200px;
        img{
            width: 100%;
        }
    }

}
@media screen and (min-width: 992px){
    #navbar{
        ul{
            padding-left: 40px;
        }
    }
    .dropdown{
        display: none;
    }
    .authentication{
        padding-left: 50px;
    }
}
@media screen and (max-width: 992px){
    header{
        display: flex;
        justify-content: space-between;
        ul{
            gap: 3rem;
        }
        #navbar{
            display: none;
        }
        .authentication{
            display: none;
        }
    }
}
@media screen and (min-width: 768px){
    .landscape-mobile{
        display: none;
    }
}
@media screen and (max-width: 768px){
    header{
        padding: 20px;
    }
    .home{
        padding: 20px;
        max-width: 100vw;
        display: flex;
        flex-direction: column-reverse;
        .landscape{
            display: none;
        }
        .landscape-mobile{
            width: 100%;
        }
        .home-title{
            height: 40px;
            margin-top: 30px;
        }
        h1, p{
            text-align: center;
        }
        button{
            margin: auto;
        }
    }
}
</style>