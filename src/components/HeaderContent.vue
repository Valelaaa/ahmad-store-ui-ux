<template>
  <header class = "header container">
    <div class = "info row">
      <div class = "col-lg-3 col-md-4 col-sm-5 address">КОДРИЛОР 16, МУН. КИШИНЁВ</div>
      <div class = "col-lg-3 offset-lg-5 col-md-4 offset-md-2 col-sm-4 offset-sm-1 phone">
        <p>+373 22 155 155
          <b-icon role = 'button' icon = "chevron-down" @click = "toggleElement"></b-icon>
        </p>
        <div class = "phone-active" v-if = "isElVisible">
          <p><span role="button">+373 22 155 155</span> <b-icon role = 'button' icon = "chevron-up" @click = "toggleElement"></b-icon>
          </p>
          <p class="phone-mr"><span role="button">+373 67 155 155</span></p>
          <p class = "clock">
            <b-icon icon = "clock" font-scale = "2"></b-icon>
            ПН-ПТ: 9.00-19.00 <br>СБ-ВС: 10.00-18.00
          </p>
        </div>
      </div>
      <div class = "col-lg-1 col-md-2 col-sm-2 d-flex justify-content-end language-content">
        <div class = "language" id = "lang">
          <div class = "language-ro" id = "lang-ro" @click = "activate(1)" :class = "{active: active_el === 1}">
            RO
          </div>
          <div class = "language-ru" id = "lang-ru" @click = "activate(2)" :class = "{active: active_el === 2}">
            RU
          </div>
        </div>
      </div>
    </div>
    <b-navbar toggleable = "lg" type = "dark" class = "bg-white row" variant = "info">
      <div class = "col-lg-1 col-md-2 ml-5">
        <b-navbar-brand href = "#">
          <IconLogo/>
        </b-navbar-brand>
      </div>

      <div class = "col-lg-2 col-md-2 col-sm-2">
        <a class = "all-categories" href = "#">
          <HamburgerMenu/>
          <span class = "categories">ВСЕ КАТЕГОРИИ</span>
        </a>
      </div>

      <!--        <div class = "d-flex col-lg-6 col-md-5 search-input justify-content-center align-items-center">-->
      <div class = "d-flex col-lg-7 col-md-5 search-input justify-content-center align-items-center">

        <b-icon class = "search-bar search-bar-icon" icon = "search"></b-icon>
        <b-form-input v-model = "searchQuery" class = "bg-transparent searchingField no-clear" type = "search"
                      placeholder = "Поиск в магазине" :no-animation = "true"/>

      </div>
      <!--        <div class = "d-flex col-3 justify-content-end">-->
      <div class = "d-flex col-2 justify-content-end">
        <a class = "navbar-items" href = "/">
          <IconUser/>
        </a>

        <a class = "navbar-items" href = "/">
          <IconHeart/>
        </a>

        <a class = "navbar-items" href = "/">
          <IconShoppingBag/>
        </a>
      </div>
    </b-navbar>

    <b-navbar class = "row products_bar text-center">
      <div class = "product-bar-item col">акции</div>
      <div class = "product-bar-item col">ahmad tea</div>
      <div class = "product-bar-item col">morshynska</div>
      <div class = "product-bar-item col">pepsico</div>
      <div class = "product-bar-item col">red bull</div>
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
  el: "#lang",
  data() {
    return {
      active_el: 1,
      isElVisible: false
    }
  },
  methods: {
    toggleElement() {
      this.isElVisible = !this.isElVisible
    },
    activate: function (el) {
      this.active_el = el;
    }
  }
}

</script>

<style>

.product-bar-item {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 0.068em;
  color: #000000;
}

.products_bar {
  background: rgba(217, 217, 217, 0.26);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
}

* {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

p {
  margin: 0;
}

.header {
  padding: 20px 0;
}

.info {
  display: flex;
  justify-content: space-between;
}

.address {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.07em;
  color: #000000;
}

.phone {
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.07em;
  color: #000000;
}

.phone-active {
  padding: 15px 0;
  z-index: 1;
  position: absolute;
  width: 215px;
  height: 130px;
  background: #F7F7F7;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}

.phone-mr {
  margin-right: 17px;
}

.clock {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.language {
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: end;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  background: rgba(229, 229, 229, .6);
  border-radius: 6px;
  width: 64px;
  box-shadow: 0 2px 2px gray;
}

.active {
  color: #000000;
  background: rgba(217, 217, 217, .9);
  border-radius: 6px;
}

.language-ro, .language-ru {
  width: 32px;
  text-align: center;
  cursor: pointer;
}

.language-content {
  padding: 0;
  height: 21px;
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
  padding-left: 30px;
  padding-right: 35px;
}

.searchingField {
  border-color: transparent !important;
}

div .searchingField:focus,
.searchingField:active {
  outline: none;
  box-shadow: none !important;
  border-color: transparent !important;
}
</style>
