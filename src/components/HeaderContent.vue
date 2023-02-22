<template>
  <header class = "header container">
    <div class = "info row">
      <div class = "col-lg-3 address">КОДРИЛОР 16, МУН. КИШИНЁВ</div>
      <div class = "col-lg-2 offset-6 phone">+373 22 155 155
        <b-icon icon = "chevron-down"></b-icon>
      </div>
      <div class = "col-lg-1">
        <div class="language">
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
            <div class = "col-lg-6 col-md-5">
            <b-form-input type = "search"></b-form-input>
              </div>
            <div class = "d-flex col offset-1">
              <a class="navbar-items">
              <IconUser/>
              </a>
              <a class="navbar-items">
                <IconHeart/>
              </a>
              <a class="navbar-items">
                <IconShoppingBag/>
              </a>
            </div>
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
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  background: rgba(0, 0, 0, .1);
  border-radius: 5px;
  width: 50px;
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
.navbar-items{
  margin-left:35px;
}
</style>
