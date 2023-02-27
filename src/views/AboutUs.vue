<template>
  <div id="AboutUs">
    <HeaderContent/>
    <AboutCompany/>
    <FooterContent/>
  </div>
</template>

<script>
import HeaderContent from "@/components/HeaderContent.vue";
import FooterContent from "@/components/FooterContent.vue";
import AboutCompany from "@/components/AboutCompanyComponent.vue";

export default {
  name: "AboutUs",
  components: {
    AboutCompany,
    HeaderContent,
    FooterContent,
  },
}
</script>

<style scoped>

</style>