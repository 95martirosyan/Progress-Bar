<template>
  <div class="progress" :style="progress">
    <div class="progress-value" :style="progressVal"></div>
    <p class="text" :style="text" >{{percent}}%</p>
  </div>
</template>

<script>
  export default {
    name: 'CoProgress',
    data: function () {
      return {

      }
    },
    props: {
      percent: {
        required: true,
        type: Number,
        default: 0,
      },
      bgColor: {
        required: false,
        type: String,
        default: 'white',
      },
      color: {
        required: false,
        type: String,
        default: 'red',
      },
      showText: {
        required: false,
        type: Boolean,
        default: true,
      },
      textColor: {
        required: false,
        type: String,
        default: 'black',
      },
      textSize: {
        required: false,
        type: String,
        default: 'larger',
      },
    },
    created: function () {},
    watch: {},
    mounted () {},
    computed: {
      progressVal() {
        return {
          width: `${this.percent}%`,
          background: this.color,
        };
      },
      progress() {
        return {
          background: this.bgColor,
        };
      },
      text() {
        return {
          color: this.textColor,
          'font-size':this.textSize,
          display: this.showText == 'false' ? 'none' : '',
        };
      }
    }
  }

</script>

<style>
  body{
    background: black;
  }
  .progress {
    background: #fff;
    justify-content: flex-start;
    border-radius: 100px;
    align-items: center;
    position: relative;
    display: flex;
    height: inherit;
    width: 100%;
  }

  .progress-value {
    animation: load 3s normal forwards;
    border-radius: 100px;
    background: red;
    height: 100%;
    width: 0;
  }
  .text{
    position: absolute;
    height: fit-content;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
</style>