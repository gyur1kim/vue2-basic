<template>
  <span 
    @click="checkSelected"
    @mouseover="changeCursor"
  >
    {{ time }}
  </span>
</template>

<script>
export default {
  name: 'ReservationTableTime',
  props: {
    time: String,
    selectedTimes: Array,
  },
  methods: {
    checkSelected: function(){
      const idx = this.selectedTimes.indexOf(this.time);
      console.log(this.selectedTimes);
      if(idx !== -1){
        if(this.selectedTimes.length > 5){
          alert('최대 5개까지만 누르세요');
        }
      }
      else{
        console.log('없는걸 선택함');
        this.$emit('select-new-time', this.time);
      }
    },
    // changeCursor: function(){
    //   document.getElementsByTagName('span').style.cursor = "pointer";
    // }
  },
}
</script>

<style>

</style>