<template>
  <div style="height: 20px;width: 300px">
    <co-progress :percent="20" bgColor="white" color="green" showText=true textColor="black" textSize="small"/>
  </div>

</template>

<script>
import CoProgress from './components/CoProgress.vue'

export default {
  name: 'App',
  components: {
    CoProgress
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
