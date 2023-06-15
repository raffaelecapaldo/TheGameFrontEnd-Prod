<template>
  <HeaderComponent/>
  <RouterView/>
  <FooterComponent/>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
  name: 'HomeView',
  data() {
      return {

      }
  },
  methods: {

  },
  components: {
    HeaderComponent,
    FooterComponent
},
  mounted() {

  }
}
</script>

<style lang="scss" scoped></style>