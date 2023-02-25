<template>
  <footer class = "container footer">
    <div class = "row">
      <div class = "col-lg-8 offset-lg-2">
        <ul class = "info-box">
          <li><a href = "#" class = "info-box-item">О Нас</a></li>
          <li><a href = "#" class = "info-box-item">Акции</a></li>
          <li><a href = "#" class = "info-box-item">Новости</a></li>
          <li><a href = "#" class = "info-box-item">Доставка и оплата</a></li>
          <li><a href = "#" class = "info-box-item">Контакты</a></li>
        </ul>
      </div>
      <div class = "col-lg-4 offset-lg-4 info-box-item">
        Мы в социальных сетях
      </div>
      <div class = "col-lg-2 offset-lg-5 d-flex justify-content-center gap-4 mt-4">
        <b-icon icon = "facebook" scale = "2" role = "button"></b-icon>
        <b-icon icon = "youtube" scale = "2" role = "button"></b-icon>
        <b-icon icon = "instagram" scale = "2" role = "button"></b-icon>
      </div>
      <div class = "col-lg-10 offset-lg-1 d-flex mt-4 justify-content-between">
        <div class = "info-box-copyright">
          Copyright © 2023 AhmadStore. Все права защищены
        </div>
        <div class = "info-box-policy">
          Политика конфиденциальности.
        </div>
        <div class = "d-flex gap-4">
          <VisaIcon/>
          <MasterCardIcon/>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import VisaIcon from "../icons/VisaIcon"
import MasterCardIcon from "../icons/MasterCardIcon"

export default {
  name: "FooterContent",
  components: {VisaIcon, MasterCardIcon}

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

.footer {
  min-height: 210px;
  color: gray;
  padding-bottom: 13px;
}

.info-box {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding-top: 60px;
}

.info-box-item {
  color: black;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.09em;
  text-align: center;
}

.info-box-copyright {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.068em;
}

.info-box-policy {
  font-size: 14px;
  letter-spacing: 0.068em;
}

</style>