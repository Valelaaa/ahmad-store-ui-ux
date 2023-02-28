<template>
  <article class = "container blog">
    <h2 class = "blog-title">НАШ БЛОГ</h2>
    <VueSlickCarousel :arrows = "true" class = "carousel" v-bind = "settings">
      <div class = "item" v-for="blog in Blogs" :key="blog.id">
        <div class = "item-width">
          <div class = "wrapper">
            <img alt = "blog" :src = "require(`@/images/${blog.img}.webp`)">
            <div class = "text-wrapper">
              <b>{{blog.title}}</b>
              <div><br>{{blog.description}}</div>
            </div>
            <div class="d-flex justify-content-end btn-left">
              <button class = "read-btn">Читать</button>
            </div>
          </div>
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
      "slidesToShow": 3,
      "slidesToScroll": 1,
    },
    Blogs: [{
      id: 1,
      title: "Секреты Maple Syrup: чая с ароматом кленового сиропа",
      img: "blog1",
      description: "Чай Ahmad Tea Maple Syrup производится на основе классического китайского зеленого чая"
    },
    {
      id: 2,
      title: "Секреты Maple Syrup: чая с ароматом кленового сиропа",
      img: "blog2",
      description: "Чай Ahmad Tea Maple Syrup производится на основе классического китайского зеленого чая"
    },
    {
      id: 3,
      title: "Секреты Maple Syrup: чая с ароматом кленового сиропа",
      img: "blog3",
      description: "Чай Ahmad Tea Maple Syrup производится на основе классического китайского зеленого чая"
    },
    {
      id: 4,
      title: "Секреты Maple Syrup: чая с ароматом кленового сиропа",
      img: "blog2",
      description: "Чай Ahmad Tea Maple Syrup производится на основе классического китайского зеленого чая"
    }
      ]
  }),
}
</script>

<style scoped>

::v-deep .slick-arrow:before {
  color: #2f3241;
  opacity: 1;
}

h2 {
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  letter-spacing: 0.068em;
  color: #000000;
  margin-left: 100px;
}

.wrapper {
  background: #FFFFFF;
  border-radius: 15px;
  padding-bottom: 15px;
}

.text-wrapper {
  padding: 10px 15px 15px 15px;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.068em;
  color: #000000;
}

.text-wrapper b {
  font-weight: 700;
  font-size: 14px;
}

.blog {
  background: url("@/images/img.webp") center center / cover no-repeat;
  min-height: 450px;
  padding: 33px 0 50px 0;
}

img {
  display: block;
  margin: auto;
}

.item-width {
  max-width: 250px;
  margin: auto;
}

.read-btn {
  width: 90px;
  height: 25px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 8px;
}
.btn-left {
  margin-right: 15px;
}

</style>