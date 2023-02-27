<template>
  <div>
    <HeaderContent/>
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
import HeaderContent from "@/components/HeaderContent.vue";
import FooterContent from "@/components/FooterContent.vue";
import FeedBack from "@/components/FeedBack.vue";
import SliderContent from "@/components/SliderContent.vue";
import ProductsContent from "@/components/ProductsContent.vue";
import OurBlog from "@/components/OurBlog.vue";
import AboutUsComponent from "@/components/AboutUsComponent.vue";


export default {
  name: 'HomeView',
  components: {
    AboutUsComponent,
    SliderContent,
    ProductsContent,
    OurBlog, HeaderContent,
    FeedBack,
    FooterContent,
  },
}
</script>