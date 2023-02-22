<template>
  <header class = "header container">
    <div class = "info row">
      <div class = "col-lg-3 address">КОДРИЛОР 16, МУН. КИШИНЁВ</div>
      <div class = "col-lg-2 offset-6 phone">+373 22 155 155
        <b-icon icon = "chevron-down"></b-icon>
      </div>
      <div class = "col-lg-1 language">
        <div class = "language-ro">
          RO
        </div>
        <div class = "language-ru">
          RU
        </div>
      </div>
    </div>
    <b-navbar toggleable = "lg" type = "dark" class = "bg-white" variant = "info">

    </b-navbar>
  </header>
</template>


<script>
export default {
  name: 'HeaderContent',

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
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.068em;
  color: #000000;
}

.phone {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.068em;
  color: #000000;
}

.language {
  display: flex;
  justify-content: space-around;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  background: rgba(0, 0, 0, .1);
  border-radius: 4px;
  width: 50px;
}

.language-ru {
  width: 20px;
  color: #000000;
  background: rgba(0, 0, 0, .3);
  border-radius: 4px;
}

</style>
