<template>
  <p v-if="loading">Loading</p>
  <div v-else="members" class="mainContainer">
    <div class="container px-4 py-4">
      <h1 class="text-uppercase fw-bold home-title text-center mb-5 py-5">OUR TEAM</h1>
      <div class="members py-5 d-flex flex-column">
        <div v-for="member in members" class="row singleMember">
          <div class="col-12 col-lg-6">
            <img class="img-fluid" :src="'/img/team/' + member.name + '.png'" :alt="member.name">
          </div>
          <div class="col-12 col-lg-6 d-flex flex-column memberInfo justify-content-center">
            <h3 class="text-golden fw-bold text-uppercase">{{ member.name }}</h3>
            <div class="stats">
              <div class="singleStat text-white d-flex gap-3">
                <div v-for="st in stats" class="stat d-flex align-items-center gap-1">
                  <i :class="icons[st]"></i>
                  <h6 class="mb-0 h4">{{ member[st] }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'
export default {
  name: 'TeamView',
  data() {
    return {
      stats: ['attack', 'defence', 'speed', 'life'],
      icons: {
        attack: "fa-solid fa-gun",
        defence: "fa-solid fa-shield",
        speed: "fa-solid fa-gauge-simple-high",
        life: "fa-solid fa-heart-circle-plus"
      },
      members: [
        {
          name: 'filecc',
          attack: '40',
          defence: '36',
          speed: '55',
          life: '3',
        },
        {
          name: 'nicolozibra1',
          attack: '35',
          defence: '20',
          speed: '20',
          life: '50',
        },
        {
          name: 'lip',
          attack: '30',
          defence: '30',
          speed: '3',
          life: '70',
        },
        {
          name: 'raffaelecapaldo',
          attack: '30',
          defence: '99',
          speed: '30',
          life: '0',
        },
        {
          name: 'totarochristian',
          attack: '30',
          defence: '40',
          speed: '20',
          life: '40',
        },
      ],
    }
  },
  methods: {
    getMembers() {
      axios.get('http://127.0.0.1:8000/api/team_members').then(res => {
        if (res.data.success) {
          this.members = res.data.results;
        }
      })
    }
  },
  components: {

  },
  mounted() {

  }
}
</script>
  
<style lang="scss" scoped>
@use '../../src/assets/styles/partials/variables' as *;

a {
  text-decoration: none;
  color: inherit;
}

img {
  height: 100%;
  min-height: 200px;
}

.mainContainer {
  min-height: 100vh;
}

.mainContainer,
.card {
  background-color: $primary-dark;
}

.card {
  color: white;
  background-color: #303030;
  border-radius: 0 !important;
}

.home-title {
  font-weight: 700;
  font-size: 48px;
  line-height: 36px;
  letter-spacing: 0.38em;
  background: linear-gradient(90.02deg, rgba(248, 214, 127, 0) -4.78%, #F8D67F 48.47%, rgba(248, 214, 127, 0) 106.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
}

.char-title {
  background: linear-gradient(90.02deg, rgba(155, 118, 24, 0) -4.78%, #F8D67F 48.47%, rgba(255, 189, 22, 0) 106.34%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 20px;
  line-height: 15px;
  letter-spacing: 0;

}

select,
option {
  background-color: #404040;
  color: white;
  padding: 0 5px;
  border-radius: 5px;
}

.text-golden {
  background: linear-gradient(90.02deg, rgb(255, 224, 146) -4.78%, #c39a3b 48.47%, rgba(190, 148, 40, 0) 160%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.1em;
  font-weight: 600;
  font-size: 2rem;
  word-break: break-word;
}

.members .singleMember:nth-child(even) {
  flex-direction: row-reverse;
  .memberInfo{
    align-items: end;
  }
}
.members .singleMember:nth-child(odd) {
  .memberInfo{
    align-items: start;
  }
}

.members {
  .row {
    --bs-gutter-x: 3rem;
    .singleStat{
      h6{
        font-size: 1rem;
      }
    }
  }
}
</style>