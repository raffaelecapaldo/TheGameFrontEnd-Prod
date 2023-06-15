<template>
    <main v-if="char" class="bg-dark">
        <div class="container showChar text-white">
            <div class="row py-5">
                <div class="col-12 col-lg-6 d-flex justify-content-center">
                    <img class="" :src="'/img/characters/' + (char.type.name).toLowerCase() + '.png'" alt="barbarian">
                </div>
                <div class="charInfo col-12 col-lg-6 pt-5 ">
                    <h1 class="text-center text-uppercase pb-3 px-3">{{ char.name }}</h1>
                    <h5 class="text-uppercase text-center my-4 className">{{ char.type.name }}</h5>
                    <div class="stats d-flex my-4 justify-content-evenly">
                        <div v-for="st in stats" class="stat d-flex">
                            <i class="fa-solid fa-sword"></i>
                            <h6>{{ char[st] }}</h6>
                        </div>
                    </div>
                    <div class="d-flex">
                        <p class="h5 ms-4 text-grey description">{{ char.type.description }}</p>
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
import axios from 'axios';
export default {
    name: 'CharacterView',
    data() {
        return {
            charId: this.$route.params.id,
            apiUlr: 'http://localhost:8000/api/characters',
            char: null,
            stats: ['attack', 'defence', 'speed', 'life'],
        }
    },
    methods: {
        getChar() {
            axios.get(`${this.apiUlr}/${this.charId}`).then(res => {
                this.char = res.data.results;
                console.log(this.char);
            });
        }
    },
    components: {

    },
    mounted() {
        this.getChar();
    }
}
</script>
  
<style lang="scss" scoped>
main {
    .showChar {
        .charInfo{
            margin-top: 6rem;
            .description {
                max-height: 300px;
                overflow: auto;
                padding: 3px;
            }
            h1 {
                font-weight: 700;
                font-size: 34px;
                line-height: 34px;
                letter-spacing: 0.38em;
                background: linear-gradient(90.02deg, rgba(248, 214, 127, 0) -4.78%, #F8D67F 48.47%, rgba(248, 214, 127, 0) 106.34%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .className{
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
}
</style>