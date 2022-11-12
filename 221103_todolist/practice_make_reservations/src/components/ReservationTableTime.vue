<template>
  <span
    class="time"
    @click="isSelected"
  >{{ time }}</span>
</template>

<script>
export default {
  name: 'ReservationTableTime',
  props: {
    time: String,
    selectedTimes: Array,
  },
  methods: {
    isSelected(e){
      if (this.selectedTimes.includes(this.time)){
        this.$emit('delete-selected', this.time);
        e.target.style.backgroundColor = 'white';
      }
      else{
        if(this.selectedTimes.length === 5){
          alert('시간은 최대 5개까지 선택 가능합니다.');
        }
        else{
          this.$emit('push-selected', this.time);
          e.target.style.backgroundColor = '#E0F1FF';
        }
      }
    }
  },
}
</script>

<style>
.time {
  cursor: pointer;
  color: #84898C
}
</style>