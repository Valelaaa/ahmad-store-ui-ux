<template>
  <header class = "header container">
    <div class = "info row">
      <div class = "col-lg-3 address">КОДРИЛОР 16, МУН. КИШИНЁВ</div>
      <div class = "col-lg-2 offset-6 phone">+373 22 155 155
        <b-icon icon = "chevron-down"></b-icon>
      </div>
      <div class = "d-flex col-lg-1 language-content justify-content-end">
        <div class = "language">
          <div class = "language-ro">
            RO
          </div>
          <div class = "language-ru">
            RU
          </div>
        </div>
      </div>
    </div>
    <b-navbar toggleable = "lg" type = "dark" class = "bg-white row" variant = "info">
      <div class = "col-lg-1 col-md-2 ml-5">
        <b-navbar-brand href = "#">
          <IconLogo />
        </b-navbar-brand>
      </div>

      <div class = "col-lg-2 col-md-2 col-sm-2">
        <a class = "all-categories" href = "#">
          <HamburgerMenu />
          <span class = "categories">ВСЕ КАТЕГОРИИ</span>
        </a>
      </div>

      <!--        <div class = "d-flex col-lg-6 col-md-5 search-input justify-content-center align-items-center">-->
      <div class = "d-flex col-lg-7 col-md-5 search-input justify-content-center align-items-center">

        <b-icon class = "search-bar search-bar-icon" icon = "search"></b-icon>
        <b-form-input v-model = "searchQuery" class = "bg-transparent searchingField no-clear" type = "search" placeholder = "Поиск в магазине" :no-animation = "true" />

      </div>
        <!--        <div class = "d-flex col-3 justify-content-end">-->
      <div class = "d-flex col-2 justify-content-end">
        <a class = "navbar-items" href="/">
          <IconUser />
        </a>

        <a class = "navbar-items" href="/">
          <IconHeart />
        </a>

        <a class = "navbar-items" href="/">
          <IconShoppingBag />
        </a>
      </div>
    </b-navbar>

    <b-navbar class ="row products_bar text-center">
      <div class="product-bar-item col">акции</div>
      <div class="product-bar-item col">ahmad tea</div>
      <div class="product-bar-item col">morshynska</div>
      <div class="product-bar-item col">pepsico</div>
      <div class="product-bar-item col">red bull</div>
    </b-navbar>

  </header>
</template>


<script>
import IconLogo from "@/icons/IconLogo.vue";
import HamburgerMenu from "@/icons/HamburgerMenu.vue";
import IconHeart from "@/icons/IconHeart.vue";
import IconShoppingBag from "@/icons/IconShoppingBag.vue";
import IconUser from "@/icons/IconUser.vue";

export default {
  name: 'HeaderContent',
  components: {IconUser, IconShoppingBag, IconHeart, HamburgerMenu, IconLogo},

}
</script>
<style>

.product-bar-item{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  text-transform: uppercase;
  /* identical to box height */

  letter-spacing: 0.068em;

  color: #000000;
}
.products_bar{
  background:rgba(217, 217, 217, 0.26);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.header {
  padding: 20px 0;
}

.info {
  display: flex;
  justify-content: space-between;
}

.address {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.068em;
  color: #000000;
}

.phone {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.068em;
  color: #000000;
}

.language {
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: end;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  background: rgba(0, 0, 0, .1);
  border-radius: 5px;
  width: 56px;
}

.language-ru {
  width: 25px;
  color: #000000;
  background: rgba(0, 0, 0, .3);
  border-radius: 4px;
  text-align: center;
}

.language-ro {
  width: 25px;
  text-align: center;
}

.language-content {
  padding: 0px;
}

.all-categories {
  text-decoration: none;
  color: black;
}

.categories {
  font-family: 'Roboto', sans-serif;
  padding-left: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.068em;

  color: #000000;
}

.navbar-items {
  margin-left: 35px;
}

.search-input {

  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  background: #D9D9D9;
  opacity: 0.6;
  border-radius: 17px;
  height: 60px
}

.search-bar {
  /*border-style:outline;*/
  outline: none;
  outline-offset: 0;
  padding-left:30px;
  padding-right: 35px;
}

.searchingField{
  border-color: transparent !important;
}
div .searchingField:focus,
.searchingField:active {
  outline: none;
  box-shadow: none !important;
  border-color: transparent !important;
}
</style>
