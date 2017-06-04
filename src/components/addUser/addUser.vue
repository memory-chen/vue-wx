<template>
  <transition name = "move">
    <div class = "addUser" v-show = "showFlag" >
      <div class="back" @click = "hide">
        <-
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        showFlag: false
      };
    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      }
    }
  };
</script>

<style lang="less">
  .addUser{
    position:fixed;
    top:0;
    left:0;
    z-index:30;
    width:100%;
    height:100%;
    background:#fff;
    transform:translate3d(0,0,0);
    &.move-enter-active,&.move-leave-active{
			transition:all 0.2s linear;
		}
		&.move-enter,&.move-leave-active{
			transform:translate3d(100%,0,0);
		}
    .back{
      font-size:20px;
    }
  }
</style>