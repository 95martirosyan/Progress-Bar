<template>
  <div style="height: 20px;width: 300px">
    <co-progress :percent="80" bgColor="white" color="green" showText=true textColor="black" textSize="small"/>
  </div>

</template>

<script>
import coProgress from './components/coProgress.vue'

export default {
  name: 'App',
  components: {
    coProgress
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
