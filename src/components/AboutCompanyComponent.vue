<template>
  <BContainer class = "about__container">
    <BBreadcrumb class = "about__breadcrumb">
      <BBreadcrumb-item class = "about__breadcrumb-item" to = "/">
        <spam class = "breadcrumb-item__text">
          Главная
        </spam>
      </BBreadcrumb-item>
      <BBreadcrumb-item class = "about__breadcrumb-item" :active = "true" to = "/about">
        <spam class = "breadcrumb-item__text"> О нас</spam>
      </BBreadcrumb-item>
    </BBreadcrumb>
    <h2 class = "about__title">о компании ahmad store</h2>
    <BCard class = "about__bcard" img-alt = "Card Image" overlay :img-top = "true"
           :img-src = "require('@/assets/img/background__crop.png')">
      <BCardText class = "about__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum.
      </BCardText>
      <div class = "d-flex justify-content-end">
        <BImg :src = "require('@/assets/img/kettle.png')" class = "about__card-image"/>
      </div>
    </BCard>
  </BContainer>
</template>

<script>
export default {
  name: "AboutCompanyComponent.vue",
}
</script>

<style scoped>
.about__container {
  min-height: 950px;
  padding: 0;
}

.about__breadcrumb {
  margin: 30px 0px 0px 80px;
  background-color: transparent;
  font-size: inherit;
}

.about__breadcrumb-item {
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
.about__breadcrumb-item a {
  text-decoration: none;
}
.about__breadcrumb-item:hover {
  text-decoration: none;

}
.about__breadcrumb-item.active {
  background: inherit;
}

.about__title {
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

.about__bcard {
  padding: 0;
  border: none;
  box-shadow: none;
  margin: 35px 0 0px 0;
}

.about__text {
  max-width: 605px;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 25px;
  letter-spacing: 0.108em;
  margin: 60px 0 0 80px;
}

.about__card-image {
  margin: -60px -36px 0px 0;
}
</style>