<template>
  <div>
    <h2>예약 페이지</h2>
    <h3>시간 선택</h3>
    <div>
      <ReservationTableTime 
        v-for="(time, index) in times" 
        :key="index" 
        :time="time" 
        :selectedTimes="selectedTimes" 
        @delete-selected="deleteSelected"
        @push-selected="pushSelected"
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
    deleteSelected(time){
      this.$emit('delete-selected', time);
    },
    pushSelected(time){
      this.$emit('push-selected', time);
    }
  }
}
</script>

<style>

</style>