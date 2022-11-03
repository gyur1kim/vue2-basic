<template>
  <div>
    <h1>예약 페이지</h1>
    <h3>시간 선택</h3>
    <div>
      <ReservationTableTime 
        v-for="(time, index) in times" 
        :key="index" 
        :time="time" 
        :selectedTimes="selectedTimes" 
        @select-new-time="selectNewTime"
      />
    </div>
  </div>
</template>

<script>
import ReservationTableTime from '@/components/ReservationTableTime';

export default {
  name: 'ReservationTable',
  components: {
    ReservationTableTime,
  },
  props: {
    times: Array,
    selectedTimes: Array,
  },
  methods: {
    selectNewTime: function(timeData){
      this.$emit('select-new-time', timeData);
    }
  }
}
</script>

<style>

</style>