<template>
  <article class = "container blog">
    <VueSlickCarousel :arrows = "true" class = "carousel" v-bind = "settings">
      <div class = "item">
        <div>
          <img alt = "blog" src = "@/images/blog1.png">
          <b>Секреты Maple Syrup: чая с ароматом кленового сиропа</b>
          <br>Чай Ahmad Tea Maple Syrup производится на основе классического китайского зеленого чая
        </div>
      </div>
      <div class = "item">
        <div>
          <img alt = "blog" src = "@/images/blog2.png">
          <b>Секреты Maple Syrup: чая с ароматом кленового сиропа</b>
          <br>Чай Ahmad Tea Maple Syrup производится на основе классического китайского зеленого чая
        </div>
      </div>
      <div class = "item">
        <div>
          <img alt = "blog" src = "@/images/blog3.png">
          <b>Секреты Maple Syrup: чая с ароматом кленового сиропа</b>
          <br>Чай Ahmad Tea Maple Syrup производится на основе классического китайского зеленого чая
        </div>
      </div>
    </VueSlickCarousel>
  </article>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "OurBlog",
  components: {VueSlickCarousel},
  data: () => ({
    settings: {
      "slidesToShow": 2,
      "slidesToScroll": 1,
    }
  }),
}
</script>

<style scoped>

::v-deep .slick-arrow:before {
  color: #2f3241;
  opacity: 1;
}

img {
  display: block;
  margin: auto;
}

</style>