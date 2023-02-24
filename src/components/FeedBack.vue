<template>
  <section class = "container feedback">
    <h2 class = "feedback-title">Узнай первым о наших акциях.</h2>
    <div class = "row mt-3">
      <div class = "col-lg-4">
        <b-form-input v-model = "text" placeholder = "Имя"></b-form-input>
      </div>
      <div class = "col-lg-4">
        <b-form-input v-model = "email" placeholder = "Email"></b-form-input>
      </div>
      <div class = "col-lg-4">
        <b-form-input v-model = "tel" placeholder = "Телефон"></b-form-input>
      </div>
      <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
        Согласен с политикой конфиденциальности
      </b-form-checkbox>
      <b-button></b-button>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeedBack",
  data() {
    return {
      status: 'not_accepted'
    }
  }
}
</script>

<style>
.feedback {
  height: 220px;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0 1.68008px 1.68008px rgba(0, 0, 0, 0.25);
  padding-top: 25px;
}

.feedback-title {
  font-weight: 600;
  font-size: 21px;
  letter-spacing: 0.068em;
  color: #000000;
}

</style>