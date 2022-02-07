<template>
    <NavBar/>
    <div class="content-container">
      <router-view></router-view>
    </div>
    <Footer/>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  components: { NavBar, Footer }
});
</script>

<style scoped>
  NavBar {
    @apply z-50;
  }
  .content-container {
    @apply z-40;
  }
</style>
