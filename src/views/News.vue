<template>
  <div class="news">
    <HeaderContent/>
    <NewsContainer/>
    <FooterContent/>
  </div>
</template>

<script>
import HeaderContent from "@/components/HeaderContent.vue";
import NewsContainer from "@/components/NewsContent.vue";
import FooterContent from "@/components/FooterContent.vue";

export default {
  name: "NewsView",
  components: {
    FooterContent,
    NewsContainer,
    HeaderContent
  }
}
</script>

<style scoped>

</style>