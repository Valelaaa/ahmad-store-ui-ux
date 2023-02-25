<template>
  <section class = "container sales-content">
    <h2>{{title}}</h2>
    <div class = "my-carousel">
      <VueSlickCarousel :arrows = "true" class = "carousel" v-bind = "settings">
        <div class = "item">
          <img alt = "tea" src = "@/images/item1.png">
          <div class = "item-info">English Breakfast Tea
            <div class = "d-flex flex-row gap-5">
              <div class = "item-price"><span class = "real-price">39.90 MDL</span><span
                  class = "price"><s>&nbsp;44.90 MDL</s></span></div>
              <IconShop/>
            </div>
          </div>
        </div>
        <div class = "item">
          <img alt = "tea" src = "@/images/item2.png">
          <div class = "item-info">Cinnamon Haze Tea
            <div class = "d-flex flex-row gap-5">
              <div class = "item-price"><span class = "real-price">36.50 MDL</span><span
                  class = "price"><s>&nbsp;39.90 MDL</s></span></div>
              <IconShop/>
            </div>
          </div>
        </div>
        <div class = "item">
          <img alt = "tea" src = "@/images/item3.png">
          <div class = "item-info">Vanilla Tranquillity Tea
            <div class = "d-flex flex-row gap-5">
              <div class = "item-price"><span class = "real-price">37.90 MDL</span><span
                  class = "price"><s>&nbsp;41.90 MDL</s></span></div>
              <IconShop/>
            </div>
          </div>
        </div>
        <div class = "item">
          <img alt = "tea" src = "@/images/item4.png">
          <div class = "item-info">Winter Charm Infusion
            <div class = "d-flex flex-row gap-5">
              <div class = "item-price"><span class = "real-price">40.90 MDL</span><span
                  class = "price"><s>&nbsp;48.80 MDL</s></span></div>
              <IconShop/>
            </div>
          </div>
        </div>
        <div class = "item">
          <img alt = "tea" src = "@/images/item2.png">
          <div class = "item-info">Cinnamon Haze Tea
            <div class = "d-flex flex-row gap-5">
              <div class = "item-price"><span class = "real-price">36.50 MDL</span><span
                  class = "price"><s>&nbsp;39.90 MDL</s></span></div>
              <IconShop/>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import IconShop from '@/icons/IconShop'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'ProductsContent',
  components: {VueSlickCarousel, IconShop},
  data: () => ({
    settings: {
      "slidesToShow": 4,
      "slidesToScroll": 1,
    }
  }),
  props:{
    title: String
  }
}

</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: black;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.068em;
}
.sales-content {
  padding: 30px 0 60px 0;
}
h2 {
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  letter-spacing: 0.068em;
  color: #000000;
  margin-left: 100px;
}
img {
  display: block;
  margin: auto;
}


::v-deep .slick-arrow:before {
  color: #2f3241;
  opacity: 1;
}

.item-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.real-price {
  display: block;
}

.price {
  display: block;
  opacity: .6;
}

.item-price {
  display: flex;
  flex-direction: column;
}

</style>