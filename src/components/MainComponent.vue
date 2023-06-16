<template>
    <main>
        <div class="hero" :class="{ 'opacity-0': isHidden }">
            <div class="box-hero mb-3">
                <img src="/img/homepage/landscape-mobile.png" alt="" class="landscape-mobile w-100">
            </div>
            <div id="slogan" class="d-flex flex-column align-items-center">
                <div class="waviy" :class="{ loaded: isLoaded }" id="waviy">
                    <span style="--i:1">w</span>
                    <span style="--i:2">a</span>
                    <span style="--i:3" class="pr-3">r</span>
                    <span style="--i:4">p</span>
                    <span style="--i:5">r</span>
                    <span style="--i:6">i</span>
                    <span style="--i:7">m</span>
                    <span style="--i:8">e</span>
                </div>
                <p :class="{ 'opacity-0': isHiddenP }">Immerse yourself in a captivating gameplay experience as you collect and deploy a diverse array of cards featuring iconic characters and mystical creatures. Unearth ancient artifacts, unleash devastating spells, and command legendary heroes to conquer your foes and emerge victorious.</p>
                <button :class="{ 'opacity-0': isHiddenButton }"><span>PLAY NOW</span></button>
            </div>
        </div>
    </main>
</template>
  
<script>
export default {
    name: 'MainComponent',
    data() {
        return {
            isHidden: true,
            isHiddenP: true,
            isHiddenButton: true,
            isLoaded: false
        }
    },
    methods: {
    
        
    },
    components: {
        
    },
    mounted() {
        setTimeout(() => {
            this.isLoaded = true;
        }, 1500);
        setTimeout(() => {
            this.isHidden = false;
        }, 1000);
        setTimeout(() => {
            this.isHiddenP = false;
        }, 3000);
        setTimeout(() => {
            this.isHiddenButton = false;
        }, 4800);
    }
}
</script>
  
<style lang="scss" scoped>

// HOMEPAGE
main{
    overflow-x: hidden;
    height: calc(100vh - 70px);
    background-color: #202020;

    .hero{
        width: 100vw;
        overflow-x: hidden;
        font-family: 'Play', sans-serif;
        opacity: 1;
        transition: opacity  ease 8s ;

        #slogan{
            height: 100%;
            padding: 0 20px;
            gap: 16px;
        }
        p{
            color: white;
            font-weight: 400;
            font-size: 15px;
            line-height: 24px;
            letter-spacing: 0.38em;
            transition: opacity 5s;
            text-align: center;
            margin: 0;
        }
        button{
            min-width: 15%;
            padding: 10px;
            border: 1px solid #F8D67F;
            font-size: 15px;
            line-height: 24px;
            letter-spacing: 0.38em;
            background-color: transparent;
            color: white;
            transition: opacity 5s;

        }
        .box-image{
            min-width: 1200px;
            img{
                width: 100%;
            }
        }

        // ANIMATION TITLE
        .waviy {
            position: relative;
            visibility: hidden;
            opacity: 0;
            transition: opacity 2s ease-in;
        }
        .waviy.loaded {
            opacity: 1;
            visibility: visible;
        }
        .waviy span {
            position: relative;
            display: inline-block;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 40px;
            line-height: 36px;
            letter-spacing: 0.10em;
            background: linear-gradient(90.02deg, rgba(248, 214, 127, 0) -4.78%, #F8D67F 48.47%, rgba(248, 214, 127, 0) 106.34%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: flip 2.5s forwards;
            animation-delay: calc(.3s * var(--i))
        }
        @keyframes flip {
            0%,80% {
                transform: rotateY(360deg)
            }
        }    
    }   
}

// MEDIAQUERY
@media screen and (min-width: 1024px){
    .box-hero{
        display: none;
    }
    .hero{
        background-image: url(../../public/img/homepage/landscape.png);
        background-position: right;
        background-size: contain;
        background-repeat: no-repeat;
        height: calc(850px - 70px);

    }
    .waviy span{
        font-size: 48px !important;
    }
    #slogan{
        justify-content: center;
        align-items: start !important;
        width: 45%;
        padding: 0 50px !important;
        gap: 40px !important;
        p{
            font-size: 1.3rem;
            text-align: start;
        }
    }
}
@media screen and (max-width: 414px){
    .box-hero{
        height: 280px;
        overflow: hidden;
    }
    p{
        font-size: 12px !important;
    }
}
</style>