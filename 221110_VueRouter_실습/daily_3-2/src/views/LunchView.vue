<template>
  <div>
    <h1>점심메뉴</h1>
    <button
      @click="pickMenu"
    >Pick Menu🍱</button>
    <p>{{ menu }}</p>
    <h2>로또 뽑으러 가자궁~</h2>
    <button
      @click="pickLotto"
    >Pick Lotto</button>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
const _ = require('lodash')

export default {
  name: 'LunchView',
  data(){
    return{
      menus: ['쌀국수', '지하철(1호선)', '규카츠ㅋ', '명인만두', '라멘', '햄벅어', '국뚜', '뜅~', '우동명가기리야마본진', '한솥'],
      menu: '.',
    }
  },
  methods: {
    pickMenu(){
      this.menu = _.sample(this.menus)
      console.log();
    },
    pickLotto(){
      this.$router.push({ name: 'lotto' })
    } 
  }
}
</script>

<style>

</style>
