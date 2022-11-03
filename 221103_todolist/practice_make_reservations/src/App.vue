<template>
  <div id="app">
    <ReservationTable 
      :times="times"
      :selectedTimes="selectedTimes"
      @select-new-time="selectNewTime"
    />
    <SelectedTime />
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
      selectedTimes: [
        "09:30"
      ]
    }
  },
  methods: {
    selectNewTime: function(timeData){
      this.selectedTimes.push(timeData);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
