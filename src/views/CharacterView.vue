<template>
    <main v-if="char" class="bg-dark pageWrap">
        <div class="container showChar text-white">
            <div class="row py-5">
                <div class="col-12 col-lg-6 d-flex justify-content-center">
                    <img class="" :src="'/img/characters/' + (char.type.name).toLowerCase() + '.png'" alt="barbarian">
                </div>
                <div class="charInfo col-12 col-lg-6 pt-5 ">
                    <h1 class="text-center text-uppercase pb-3 px-3">{{ char.name }}</h1>
                    <h5 class="text-uppercase text-center my-4 className">{{ char.type.name }}</h5>
                    <div class="stats t-shadow d-flex my-4 pt-1 justify-content-evenly">
                        <div v-for="st in stats" class="stat d-flex align-items-center gap-2">
                            <i :class="icons[st]"></i>
                            <h6 class="mb-0">{{ char[st] }}</h6>
                        </div>
                    </div>
                    <div class="d-flex">
                        <p v-html="formatDesc(char.type.description)" class="t-shadow h5 ms-4 p-3 text-grey description"></p>
                    </div>

                    <!-- <div class="stats text-center">
                    <h3>Stats</h3>
                    <p>Attack: {{ $char->attack }}</p>
                    <p>Defence: {{ $char->defence }}</p>
                    <p>Speed: {{ $char->speed }}</p>
                    <p>Life: {{ $char->life }}</p>
                </div>
                <div class="weapons text-center">
                    <h2>Weapons</h2>
                    @foreach ($char->items as $item)
                        <span class="badge rounded-pill text-bg-info">{{$item->name}}</span>
                    @endforeach
                </div> -->
                </div>
            </div>
        </div>
    </main>
</template>
  
<script>
import { useResultStore } from '../stores/results';
export default {
    name: 'CharacterView',
    data() {
        return {
            charId: this.$route.params.id,
            apiUlr: 'http://localhost:8000/api/characters',
            char: null,
            stats: ['attack', 'defence', 'speed', 'life'],
            icons: {
                attack: "fa-solid fa-gun",
                defence: "fa-solid fa-shield",
                speed: "fa-solid fa-gauge-simple-high",
                life: "fa-solid fa-heart-circle-plus"
            },
            store: useResultStore(),
        }
    },
    watch: {
        'store.singleResult'(value) {
            if (value != this.char) {
                this.char = value;
                console.log('valore:', value);
            }
        }
    },
    methods: {
        async getChar() {
            const store = useResultStore()
            store.getOneResultWithID(this.charId)              
        },
        formatDesc(text) {
            return (text.replace(/#+/g, '<br>')).replace(/<br>/, '');
        }
    },
    components: {

    },
    mounted() {
        this.getChar()
    }
}
</script>
  
<style lang="scss" scoped>
main {
    background-image: url('/img/bgs/bg-characters.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 1000px;
    .t-shadow{
        text-shadow: 0 0 10px black;
    }
    .showChar {
        .charInfo {
            margin-top: 6rem;
            backdrop-filter: blur(5px);
            border-radius: 20%;

            .description {
                max-height: 300px;
                overflow: auto;
                padding: 3px;
            }

            h1 {
                font-weight: 700;
                font-size: 40px;
                line-height: 40px;
                letter-spacing: 0.38em;
                background: linear-gradient(90.02deg, rgba(248, 214, 127, 0) -4.78%, #F8D67F 48.47%, rgba(248, 214, 127, 0) 106.34%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .className {
                text-shadow: 0 0 10px black;
            }
        }


        /* Webkit (Chrome, Safari, Opera) */
        ::-webkit-scrollbar {
            width: 6px;
        }

        ::-webkit-scrollbar-track {
            background-color: #212529;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #B07156;
            border-radius: 3px;
        }

        /* Firefox */
        ::-moz-scrollbar {
            width: 6px;
        }

        ::-moz-scrollbar-track {
            background-color: #212529;
        }

        ::-moz-scrollbar-thumb {
            background-color: #B07156;
            border-radius: 3px;
        }

        /* Edge e IE */
        ::-ms-scrollbar {
            width: 6px;
        }

        ::-ms-scrollbar-track {
            background-color: #212529;
        }

        ::-ms-scrollbar-thumb {
            background-color: #B07156;
            border-radius: 3px;
        }

    }
}</style>