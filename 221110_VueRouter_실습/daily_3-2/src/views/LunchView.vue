<template>
  <div>
    <h1>์ ์ฌ๋ฉ๋ด</h1>
    <button
      @click="pickMenu"
    >Pick Menu๐ฑ</button>
    <p>{{ menu }}</p>
    <h2>๋ก๋ ๋ฝ์ผ๋ฌ ๊ฐ์๊ถ~</h2>
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
      menus: ['์๊ตญ์', '์งํ์ฒ (1ํธ์ )', '๊ท์นด์ธ ใ', '๋ช์ธ๋ง๋', '๋ผ๋ฉ', 'ํ๋ฒ์ด', '๊ตญ๋', '๋~', '์ฐ๋๋ช๊ฐ๊ธฐ๋ฆฌ์ผ๋ง๋ณธ์ง', 'ํ์ฅ'],
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
