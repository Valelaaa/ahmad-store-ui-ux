<template>
<section>
  <b-container class="zero_padding">
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1040"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide :img-src="require('@/assets/img/slide1.webp')">
            <b-button class="carousel-button" @click="onButtonClick(1)"><span class="button-text">Посмотреть</span></b-button>
      </b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide :img-src="require('@/assets/img/slide2.webp')">
        <b-button class="carousel-button" @click="onButtonClick(2)"><span class="button-text">Посмотреть</span></b-button>
      </b-carousel-slide>
      <!-- Slides with image only -->
      <b-carousel-slide :img-src="require('@/assets/img/slide3.webp')">
        <b-button class="carousel-button" @click="onButtonClick(3)"><span class="button-text">Посмотреть</span></b-button>

      </b-carousel-slide>
    </b-carousel>
</b-container>
</section>
</template>

<script>
  export default {
    name:"SliderContent",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style>


.zero_padding{
  padding:0 !important;
}

.carousel-button {
  border:none !important;
  outline:none !important;
  background: rgba(213, 210, 210, 0.5) !important;
  border-radius:9px !important;
  width: 212px;
  height: 38px;
  display: flex;
  margin-left:575px;
  margin-top:-100px;
}

.button-text {
  font-family: 'Roboto', sans-serif;
  color: var(--bs-text-color);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  /* identical to box height */
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  display: flex;
  letter-spacing: 0.068em;
}
</style>