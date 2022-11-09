<template>
  <div>
    <button @click="getDogImage">멍멍아 이리온</button><br><br>
    <img v-if="imgSrc" :src="imgSrc" alt="#"><br>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name:'DogComponent',
  data() {
    return {
      imgSrc: null,
    }
  },
  methods:{
    getDogImage() {
      const dogImageSearchURL = 'https://dog.ceo/api/breeds/image/random'
      console.log('get dog image method 실행!');
      
      axios({
        method: 'get',
        url: dogImageSearchURL
      })
        .then((response) => {
          const imgSrc = response.data.message
          this.imgSrc = imgSrc
        })
        .then(()=>{
          console.log('메서드 실행 완료!');
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created(){
    console.log('Dog component created!');
    this.getDogImage();
  },
  mounted(){
    console.log('Dog component mounted!');
  },
  updated(){
    console.log('Dog component updated!');
  }
}
</script>

<style>

</style>
