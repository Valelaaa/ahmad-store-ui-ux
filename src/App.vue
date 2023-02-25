<template>
  <div>
    <Header/>
    <SliderContent/>
    <ProductsContent title = "АКЦИИ"/>
    <AboutUsComponent/>
    <ProductsContent title = "ПОПУЛЯРНЫЕ ТОВАРЫ"/>
    <OurBlog/>
    <FeedBack/>

    <FooterContent/>
  </div>
</template>

<script>

import Header from "@/components/HeaderContent";
import FooterContent from "@/components/FooterContent";
import FeedBack from "./components/FeedBack"
import SliderContent from "@/components/SliderContent.vue";
import ProductsContent from "@/components/ProductsContent";
import OurBlog from "@/components/OurBlog";
import AboutUsComponent from "@/components/AboutUsComponent.vue";

export default {
  name: 'App',
  components: {AboutUsComponent, SliderContent, ProductsContent, OurBlog, Header, FeedBack, FooterContent},
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
