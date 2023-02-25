<template>
  <div>
    <Header/>
    <ProductsContent title = "АКЦИИ"/>
    <OurBlog/>
    <ProductsContent title = "ПОПУЛЯРНЫЕ ТОВАРЫ"/>
    <FeedBack/>

    <FooterContent/>
  </div>
</template>

<script>

import Header from "@/components/HeaderContent";
import FooterContent from "@/components/FooterContent";
import FeedBack from "./components/FeedBack"
import ProductsContent from "@/components/ProductsContent";
import OurBlog from "@/components/OurBlog";

export default {
  name: 'App',
  components: {ProductsContent, OurBlog, Header, FeedBack, FooterContent},
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
