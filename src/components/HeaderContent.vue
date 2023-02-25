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

      <div class = "col-lg-1 col-md-2">

        <b-navbar-brand href = "#">
          <IconLogo/>
        </b-navbar-brand>

      </div>

      <div class = "col-lg-3 col-md-3 col-sm-2">
        <b-button class = all-categories  @click = "toggleHamMenu">
          <IconHamburgerMenu />
          <span class = "categories">ВСЕ КАТЕГОРИИ</span>
        </b-button>
        <div class = "ham-menu-main d-flex" v-if = "isHamVisible">
          <div class = "ham-menu" id = "ham_item">

            <div class = "row ham-item-border">
              <div style="margin-top:20px" class = "ham-item">
<!--                <b-button-reset class="category-item-button" id = "ham_promotions" >-->
                  <a class = "ham-item-text" >
                    акции
                  </a>
<!--                </b-button-reset>-->
              </div>
            </div>
            <div class = "row ham-item-border">
              <div class = "ham-item">
<!--                <b-button-reset class="category-item-button" id = "ham_ahmad_tea" >-->
                  <a class = "ham-item-text">
                    ahmad tea
                  </a>
<!--                </b-button-reset>-->
              </div>
            </div>
            <div class = "row ham-item-border">
              <div class = "ham-item">
<!--                <b-button-reset class="category-item-button" id = "ham_voda" >-->
                  <a class = "ham-item-text">
                    morshynska
                  </a>
<!--                </b-button-reset>-->
              </div>
            </div>
            <div class = "row ham-item-border">
              <div class = "ham-item">
<!--                <b-button-reset class="category-item-button" id = "ham_pepsico">-->
                  <a class = "ham-item-text">
                    pepsico
                  </a>
<!--                </b-button-reset>-->
              </div>
            </div>
            <div class = "row ham-item-border">
              <div class = "ham-item">
<!--                <b-button-reset class="category-item-button" id = "ham_red_bull" >-->
                  <a class = "ham-item-text">
                    red bull
                  </a>
<!--                </b-button-reset>-->
              </div>
            </div>

          </div>
          <div class="ham-menu-secondary bg-white">
            <ul>


<!--              ТУТ БУДЕТ СПИСОК      -->


            </ul>
        </div>
<!--          <div class="">{{hamItemList}}</div>-->
        </div>
      </div>

      <div class = "d-flex col-lg-6 col-md-5 search-input justify-content-center align-items-center">
        <b-icon class = "search-bar search-bar-icon" icon = "search"></b-icon>
        <b-form-input  class = "bg-transparent searchingField no-clear" type = "search" placeholder = "Поиск в магазине" :no-animation = "true" />
      </div>

      <div class = "d-flex col-2 justify-content-end">
        <a class = "navbar-items" href = "/">
          <IconUser />
        </a>

        <a class = "navbar-items" href = "/">
          <IconHeart />
        </a>

        <a class = "navbar-items" href = "/">
          <IconShoppingBag />
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
import IconHamburgerMenu from "@/icons/HamburgerMenuIcon.vue";
import IconHeart from "@/icons/IconHeart.vue";
import IconShoppingBag from "@/icons/IconShoppingBag.vue";
import IconUser from "@/icons/IconUser.vue";

export default {
  name: 'HeaderContent',
  components: {IconUser, IconShoppingBag, IconHeart, IconHamburgerMenu, IconLogo},
  data() {
    return {
      active_el: 1,
      el: "#lang",
      isElVisible: false,
      isHamVisible: false,

    }
  },
  methods: {
    toggleElement() {
      this.isElVisible = !this.isElVisible
    },
    activate: function (el) {
      this.active_el = el;
    },
    toggleHamMenu() {
      this.isHamVisible = !this.isHamVisible
    },
  }
}
</script>
<style>
:root {
  --bs-text-color: black;
}
.product-bar-item {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 0.068em;
  height: 30px;
  display:flex;
  justify-content: center;
  align-items: center;
  color: var(--bs-text-color);
}

.products_bar {
  background: rgba(217, 217, 217, 0.26);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

* {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: var(--bs-text-color);
}

p {
  margin: 0;
}

.header {
  padding-top: 20px;

}

.info {
  display: flex;
  justify-content: space-between;
}

.address {
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.07em;
}

.phone {
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.07em;
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
  display: flex;
  justify-content: end;
  font-weight: 600;
  font-size: 14px;
  background: rgba(229, 229, 229, .6);
  border-radius: 6px;
  width: 64px;
  box-shadow: 0 2px 2px gray;
}

.active {
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
  background-color: transparent !important;
  border: none !important;
  text-decoration: none;
  box-shadow: none !important;
}

.categories {
  padding-left: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  letter-spacing: 0.068em;
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

.ham-menu {
  background: white;
  width: 395px;
  height: 450px;
}

.ham-item {
  display: flex;
  height: 70px;
  align-items: center;
  padding: 0 !important;
}

.ham-item:hover {
  box-shadow: 0.840042px 0.840042px 2.10011px 2.10011px rgba(0, 0, 0, 0.25);
}

.ham-item-text {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 129.4%;
  /* or 27px */
  text-transform: uppercase;
  display: flex;
  align-items: center;
  letter-spacing: 0.128em;
  margin-left: 108px;
  text-decoration: none;
  color: var(--bs-text-color)
}

.ham-item-border {
  padding: 0 !important;
  margin: 0 !important;
}

.ham-item-text:hover {
  font-weight: bold;
  color: var(--bs-text-color)
}

.ham-menu-main {
  position: absolute;
  z-index: 1;
  margin-top: 20px;
  width:1050px;
  background: white;
  border-radius: 0px 0px 17px 17px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  transition: opacity 0.5s ease-in-out;
}
.ham-menu-main.show {
  opacity: 1;
}

</style>
