<template>
  <section class = "container sales-content">
    <h2>{{ title }}</h2>
    <div class = "my-carousel">
      <VueSlickCarousel :arrows = "true" :slidesToScroll = "1" :slidesToShow = "4" class = "carousel">
        <div v-for = "product in Products" :key = "product.id" class = "item">
          <img alt = "tea" :src = "require(`@/images/${product.image}.webp`)">
          <div class = "item-info">{{ product.title }}
            <div class = "text-al d-flex flex-row">
              <div class = "item-price"><span class = "real-price">{{ product.price }}</span><span class = "price"><s>&nbsp;{{ product.old_price }}</s></span>
              </div>
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
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'ProductsContent',
  components: {VueSlickCarousel, IconShop},
  data: () => ({
    Products: [{
      id: 1,
      title: "English Breakfast Tea",
      image: "item1",
      price: "39.90 MDL",
      old_price: "44.90 MDL"
    },
    {
      id: 2,
      title: "Cinnamon Haze Tea",
      image: "item2",
      price: "36.50 MDL",
      old_price: "39.90 MDL"
    },
    {
      id: 3,
      title: "Vanilla Tranquillity Tea",
      image: "item3",
      price: "37.90 MDL",
      old_price: "41.90 MDL"
    },
    {
      id: 4,
      title: "Winter Charm Infusion",
      image: "item4",
      price: "40.90 MDL",
      old_price: "48.80 MDL"
    },
    {
      id: 5,
      title: "Cinnamon Haze Tea",
      image: "item2",
      price: "36.50 MDL",
      old_price: "39.90 MDL"
    },
    ]
  }),
  props: {
    title: String
  },
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

.text-al {
  margin-top: 10px;
  gap: 30px;
}

</style>