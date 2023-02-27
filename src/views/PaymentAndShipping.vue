<template>
  <div class="payment_and_shipping">
    <HeaderContent/>
    <PaymentAndShippingContent/>
    <FooterContent/>
  </div>
</template>

<script>
import HeaderContent from "@/components/HeaderContent.vue";
import FooterContent from "@/components/FooterContent.vue";
import PaymentAndShippingContent from "@/components/PaymentAndShippingContent.vue";

export default {
  name: "PaymentAndShipping",
  components: {
    PaymentAndShippingContent,
    FooterContent,
    HeaderContent
  }
}
</script>

<style scoped>

</style>
