<template>
    <main>
        <div class="home">
            <div class="box-hero mb-4">
                <img src="/img/homepage/landscape-mobile.png" alt="" class="landscape-mobile">
            </div>
            <div id="slogan" class="d-flex flex-column justify-content-center align-items-center h-100 gap-5">
                <h1 class="home-title">WAR PRIME</h1>
                <p class="text-white fs-5">Immerse yourself in a captivating gameplay experience as you collect and deploy a diverse array of cards featuring iconic characters and mystical creatures. Unearth ancient artifacts, unleash devastating spells, and command legendary heroes to conquer your foes and emerge victorious.</p>
                <button><span>PLAY NOW</span></button>
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
    .home-title{
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
    }
    button{
        width: 40%;
        // padding: 6px 57px;
        border: 1px solid #F8D67F;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 0.38em;
        background-color: transparent;
        color: white;
    }
    .box-image{
        min-width: 1200px;
        img{
            width: 100%;
        }
    }

}
@media screen and (min-width: 992px){
    .home{
        background-image: url(../../public/img/homepage/landscape.png);
        background-size: cover;
    }
    p{
        width: 642px;
    }
    .landscape-mobile{
        display: none;
    }
    #slogan{
        align-items: start !important;
    }
    button{
        max-width: 8%;
        padding: 10px 0;
    }
    p{
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 0.38em;
    }
}
@media screen and (max-width: 992px){
    .home{
        padding: 20px;
        min-width: 100vw;
        max-width: 100vw;
        .landscape{
            display: none;
        }
        .box-hero{
            height: 30vh;
            width: 100%;
            .landscape-mobile{
            width: 100%;
            height: 100%;
            object-fit: cover;
            }
        }
        
        #slogan{
            z-index: 2;
            background-color: #202020;
            max-height: calc(70vh - 170px);
        }
        h1, span{
            text-align: center;
        }
        p{
            text-align: center;
            font-size: 0.7rem;
        }
    }
    .home-title{
            font-size: 2.5rem !important;
        }
}
@media screen and (max-width: 576px){
    p{
        font-size: 0.8rem !important;
    }
    
}
</style>