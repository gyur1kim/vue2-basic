<template>
  <div class="lotto">
    <h1>일확천금</h1>
    <button
      @click="getRandomNums"
    >오늘의 랜덤 번호는!!</button>
    <p>
      <span v-for="(num, idx) in luckyNums" :key="idx">  {{ num }}  </span>
    </p>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
const _ = require('lodash')
export default {
  name: 'LottoView',
  data(){
    return{
      nums: new Array(45).fill(1).map((v, i)=>v+i),
      luckyNums: null,
    }
  },
  methods: {
    getRandomNums(){
      console.log(this.nums);
      this.luckyNums = _.sampleSize(this.nums, 6).sort((a, b)=>a-b);
    }
  }
}
</script>
