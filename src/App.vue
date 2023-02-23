<template>
  <div>
    <Header/>
    <FooterContent/>
  </div>
</template>

<script>

import Header from "@/components/HeaderContent";
import FooterContent from "@/components/FooterContent";

export default {
  name: 'App',
  components: {Header, FooterContent},
}
</script>

<style>

/*#app {*/
/*  fonts-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-fonts-smoothing: antialiased;*/
/*  -moz-osx-fonts-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
