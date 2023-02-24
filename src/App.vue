<template>
  <div>
    <Header />
    <FeedBack />
    <FooterContent/>
  </div>
</template>

<script>

import Header from "@/components/HeaderContent";
import FooterContent from "@/components/FooterContent";
import FeedBack from "./components/FeedBack"

export default {
  name: 'App',
  components: {Header, FeedBack, FooterContent},
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
