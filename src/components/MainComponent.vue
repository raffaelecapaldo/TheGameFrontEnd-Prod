<template>
    <main>
        <div class="home">
            <div class="box-hero mb-3">
                <img src="/img/homepage/landscape-mobile.png" alt="" class="landscape-mobile">
            </div>
            <div id="slogan" class="d-flex flex-column align-items-center h-100 gap-5">
                <h1 class="home-title" :class="{ 'animate': isAnimated }" id="wave-text">WAR PRIME</h1>
                <p class="text-white fs-5">{{ typedText }}</p>
                <button :class="{ 'opacity-0': isHidden }"><span>PLAY NOW</span></button>
            </div>
        </div>
    </main>
</template>
  
<script>
export default {
    name: 'MainComponent',
    data() {
        return {
            text: "Immerse yourself in a captivating gameplay experience as you collect and deploy a diverse array of cards featuring iconic characters and mystical creatures. Unearth ancient artifacts, unleash devastating spells, and command legendary heroes to conquer your foes and emerge victorious.",
            typedText: "",
            isAnimated: false,
            isHidden: true
        }
    },
    methods: {
        typeWriter() {
            let i = 0;
            const delay = 20;
            const interval = setInterval(() => {
                this.typedText += this.text.charAt(i);
                i++;
                if (i === this.text.length) {
                    clearInterval(interval);
                }
            }, delay);
        }
    },
    components: {
        
    },
    mounted() {
        this.isAnimated = true;
        setTimeout(() => {
            document.querySelector('.home').style.opacity = 1;
        }, 500);
        setTimeout(() => {
            this.typeWriter();
        }, 4000);
        setTimeout(() => {
            this.isHidden = false;
        }, 10000);
    }
}
</script>
  
<style lang="scss" scoped>
// HOMEPAGE
main{
    overflow-x: hidden;
    overflow-y: hidden;
    height: calc(100vh - 70px);
    background-color: #202020;
}
.home{
    padding: 0 50px;
    height: calc(100vh - 70px);
    width: 100vw;
    overflow-x: hidden;
    overflow-y: hidden;
    font-family: 'Play', sans-serif;
    opacity: 0;
    transition: opacity 8s;
    .home-title{
        font-weight: 700;
        font-size: 48px;
        line-height: 36px;
        letter-spacing: 0.38em;
        background: linear-gradient(90.02deg, rgba(248, 214, 127, 0) -4.78%, #F8D67F 48.47%, rgba(248, 214, 127, 0) 106.34%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        width: 50%;
    }
    #wave-text {
        display: inline-block;
        animation-name: wave-animation;
        animation-duration: 5s;
        animation-iteration-count: 1;
    }
    @keyframes wave-animation {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        25% {
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    p{
        height: 280px;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 0.38em;
        transition: opacity 5s;
    }
    button{
        min-width: 15%;
        // padding: 6px 57px;
        border: 1px solid #F8D67F;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: 0.38em;
        background-color: transparent;
        color: white;
        transition: opacity 5s;
        margin-top: -70px;
    }
    .box-image{
        min-width: 1200px;
        img{
            width: 100%;
        }
    }

}
@media screen and (min-width: 1600px){
    #slogan{
        p{
            font-size: 1.3rem !important;
            width: 40% !important;
        }
    }
}
@media screen and (min-width: 1600px){
    .home{
        background-image: url(../../public/img/homepage/landscape.png);
        background-size: 1800px 1400px !important;
        background-position: right;
    }
    #slogan{
        height: calc(100vh - 170px) !important;
        justify-content: center !important;
    }
    p{
        width: 642px !important;
    }
}
@media screen and (min-width: 992px){
    .home{
        background-image: url(../../public/img/homepage/landscape.png);
        background-size: 1100px 900px;
        background-repeat: no-repeat;
        background-position: right;
        width: 110%;
        height: 110%;
    }
    #slogan{
        height: calc(100vh - 170px) !important;
        justify-content: center !important;
    }
    p{
        width: 40%;
        font-size: 1rem !important;
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
        .home-title{
            width: 100%;
        }
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