<template>
  <BContainer class = "news__container">
    <BBreadcrumb class = "news__breadcrumb">
      <BBreadcrumb-item class = "news__breadcrumb-item" to = "/">
        <spam class = "breadcrumb-item__text">
          Главная
        </spam>
      </BBreadcrumb-item>
      <BBreadcrumb-item class = "news__breadcrumb-item" :active = "true" to = "/payment-shipping">
        <spam class = "breadcrumb-item__text"> Оплата и доставка</spam>
      </BBreadcrumb-item>
    </BBreadcrumb>
    <h2 class = "news__title">Оплата и доставка</h2>
    <div class = "news_place"></div>
  </BContainer>
</template>

<script>
export default {
  name: "PaymentAndShippingContent"
}
</script>

<style scoped>
.news__container {
  min-height: 950px;
  padding: 0;
}

.news__breadcrumb {
  margin: 30px 0px 0px 80px;
  background-color: transparent;
  font-size: inherit;
}

.news__breadcrumb-item {
  margin-right: 0.5rem;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  /* identical to box height */
  display: flex;
  align-items: center;
  letter-spacing: 0.078em;

  padding: 0 !important;
  color: #000000;
}
.news__breadcrumb-item a {
  text-decoration: none;
}
.news__breadcrumb-item:hover {
  text-decoration: none;

}
.news__breadcrumb-item.active {
  background: inherit;
}

.news__title {
  text-transform: uppercase;
  margin: 30px 0 0 80px;
  padding: 0 0 0 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  /* identical to box height */

  letter-spacing: 0.068em;

  color: #000000;

}
</style>