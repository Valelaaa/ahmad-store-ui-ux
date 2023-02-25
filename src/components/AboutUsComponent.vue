<template>
  <b-container class = "beautiful_back">
    <div class = "aboutUs-paragraph">
      <h2 class = "aboutUs-title">О компании ahmadStore</h2>
      <p class = "aboutUs-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div class = "w-auto d-flex justify-content-end">
        <b-button class = "view-more__button">Узнать больше</b-button>
    </div>
    <div class="view-more__image">
            <b-img  :src="require('@/assets/img/buttonDecor.png')"></b-img>
    </div>
  </b-container>
</template>
<script>
export default {
  name: "AboutUs",
}
</script>
<style>

* {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: black;
}

.aboutUs-title {
  font-weight: 900;
  font-size: 21px;
  letter-spacing: 0.068em;
  text-transform: uppercase;
}

.beautiful_back {
  background-image: url("@/assets/img/back.webp");
}

.aboutUs-paragraph {
  padding-left: 115px;
  padding-top: 30px;
}

.aboutUs-text {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.068em;

  word-break: keep-all;
  padding-top: 40px;
  max-width: 700px;
}


.view-more__button {
  font-family: 'Roboto', sans-serif !important;
  background:black!important;
  color:#fff !important;
  margin-right: 120px;
}
.view-more__image{
  width: auto;
  display: flex;
  justify-content: end;
  margin-right: -40px;
  margin-top:-132px;
  pointer-events: none;
}
</style>