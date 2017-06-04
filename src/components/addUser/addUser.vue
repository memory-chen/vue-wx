<template>
  <transition name = "move">
    <div class = "addUser" v-show = "showFlag" >
      <div class="header-img">
        <div class="back" @click = "hide">
          <-
        </div>
        <img src="../../assets/header.jpg" alt="" height = "100" width= "100%">
      </div>
      <div class="addInfo">
        <div class="img">
          <img src="../../assets/person.png" alt="">
          <input type="text" placeholder="请填写用户名" v-model = "name">
        </div>
      </div>
      <div class="add-btn" @click = "applyRapair" :class= "{'active':this.name !== ''}">
        申请报修
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      lists: {
        type: Array
      }
    },
    data() {
      return {
        showFlag: false,
        name: ''
      };
    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      },
      applyRapair() {
        if (this.name === '') return;
        // console.log(this.lists);
        let addName = {
          name: this.name,
          telephone: '12345',
          adr: '即可立即离开'
        };
        this.lists.push(addName);
        // console.log(this.name);
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
    font-size:14px;
    &.move-enter-active,&.move-leave-active{
			transition:all 0.2s linear;
		}
		&.move-enter,&.move-leave-active{
			transform:translate3d(100%,0,0);
		}
    .back{
      font-size:20px;
      position:absolute;
    }
    .addInfo {
      height: 100px;
      text-align: center;
      line-height: 100px;
      border-bottom: 1px solid #eee;
      img{
        vertical-align:middle;
      }
      input[type="text"] {
          outline: 0;
          height: 31px;
          padding-left: 10px;
          font-size: 20px;
          vertical-align: middle;
          padding: 0px;
          width: 150px;
          margin-left: 10px;
      }
    }
    .add-btn{
      position:fixed;
      width:100%;
      height:50px;
      line-height:50px;
      bottom:0;
      background:#eee;
      color:#fff;
      text-align:center;
      font-size:20px;
      font-weight:700;
      &.active{
        background:#3e80e6;
      }
    }
  }
</style>