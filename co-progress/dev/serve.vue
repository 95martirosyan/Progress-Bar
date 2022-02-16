<script>
import { defineComponent } from 'vue';
import CoProgress from '@/co-progress.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    CoProgress
  }
});
</script>

<template>
  <div id="app">
    <co-progress percent="40"/>
  </div>
</template>
