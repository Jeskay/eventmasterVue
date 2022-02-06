<template>
    <NavBar/>
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

<style>
</style>
