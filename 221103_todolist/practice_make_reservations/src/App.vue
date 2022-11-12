<template>
  <div id="app">
    <h1>버튼 박스 제작</h1>
    <ReservationTable 
      :times="times"
      :selectedTimes="selectedTimes"
      @delete-selected="deleteSelected"
      @push-selected="pushSelected"
    />
    <hr>
    <SelectedTime 
      :selectedTimes="selectedTimes"
    />
  </div>
</template>

<script>
import SelectedTime from '@/components/SelectedTime';
import ReservationTable from '@/components/ReservationTable';

export default {
  name: 'App',
  components: {
    SelectedTime, 
    ReservationTable,
  },
  data: function(){
    return{
      times: [
        "09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
        "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
        "19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
      ],
      selectedTimes: [],
    }
  },
  methods: {
    pushSelected(time){
      this.selectedTimes.push(time);
      this.selectedTimes.sort();
    },
    deleteSelected(time){
      const idx = this.selectedTimes.indexOf(time);
      this.selectedTimes.splice(idx, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #424242;
  margin-top: 60px;
}
hr{
  border: 0;
  height: 2px;
  width: 80%;
  background-color: #0f4c81;
}
</style>
