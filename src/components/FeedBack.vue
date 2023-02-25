<template>
  <section class = "container feedback">
    <h2 class = "feedback-title">Узнай первым о наших акциях.</h2>
    <div class = "row mt-3" >
      <div class = "col-lg-4">
        <b-form-input v-model = "text" placeholder = "Имя"></b-form-input>
      </div>
      <div class = "col-lg-4">
        <b-form-input v-model = "email" placeholder = "Email"></b-form-input>
      </div>
      <div class = "col-lg-4">
        <b-form-input v-model = "tel" placeholder = "Телефон"></b-form-input>
      </div>
      <div class = "col-lg-4 offset-lg-1 d-flex align-items-center mt-3">
        <b-form-checkbox id = "checkbox-1" v-model = "status" name = "checkbox-1" size = "lg"
                         unchecked-value = "not_accepted" value = "accepted"></b-form-checkbox>
        <span class = "policy-agree">Согласен с политикой конфиденциальности</span>
      </div>
      <div class = "col-lg-3 d-flex align-items-center mt-3">
        <b-button class = "bg-black text-subscribe">Подписаться</b-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeedBack",
  data() {
    return {
      status: 'not_accepted',
    }
  }
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

.feedback {
  min-height: 220px;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0 1.68008px 1.68008px rgba(0, 0, 0, 0.25);
  padding: 25px 0;
}

.feedback-title {
  font-weight: 600;
  font-size: 21px;
  letter-spacing: 0.068em;
}

.policy-agree {
  font-weight: 300;
  font-size: 13px;
  letter-spacing: 0.068em;
  text-decoration-line: underline;
}

.text-subscribe {
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 0.068em;
  color: #FFFFFF;
}

</style>