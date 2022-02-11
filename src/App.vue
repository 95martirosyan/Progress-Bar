<template>
  <div style="height: 20px;width: 300px">
    <Progress :percent="80" bgColor="white" color="green" showText=true textColor="black" textSize="small"/>
  </div>

</template>

<script>
import Progress from './components/Progress.vue'

export default {
  name: 'App',
  components: {
    Progress
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
