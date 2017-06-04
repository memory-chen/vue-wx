<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
      <img src="../../assets/timg.jpg" alt="" width="64" height="64">
      </div>
      <div class="content">
        <div class="login">
          <span class = "login-btn" @click = "login">登入</span>
        </div>
        <div class="regist">
          <span class = "regist-btn" @click = "regist">注册</span>
        </div>
      </div>
    </div>
    <div class="background">
      <img src="../../assets/tg-header1.jpg" alt="" width="100%" height="100%">
    </div>
    <transition name = "fade">
    
      <div class="mask" v-show = "maskShow">
      
        <div class="login-show">
          <div class="mask-close" @click = "hideMaskShow">
          x
          </div>
          <form action="">
            <label for="">userName:</label><input type="text" class = "user-name">
            <label for="">passWord:</label><input type="password" class = "pass-word">
          </form>
            <input type="button" value = "登入">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        maskShow: false
      };
    },
    methods: {
      login() {
        // console.log('login');
        this.maskShow = true;
      },
      regist() {
        console.log('regist');
      },
      hideMaskShow() {
        this.maskShow = false;
      }
    }
  };
</script>

<style lang="less">
  .header{
    position: relative;
    width:100%;
    height:100px;
    color:#fff;
    background:rgba(7,17,27,0.5);
    .content-wrapper{
      position:relative;
      padding:24px 12px 18px 24px;
      font-size: 0;
      .avatar{
        display:inline-block;
        vertical-align:top;
        img{
          border-radius:2px;
        }
      }
      .content{
        display:inline-block;
        vertical-align:top;
        margin-left:16px;
        font-size:14px;
        .login{
          margin:2px 0 8px 0;
          .login-btn{
            display: inline-block;
            vertical-align: top;
            width: 80px;
            height: 27px;
            letter-spacing: 6px;
            text-align: center;
            line-height: 27px;
            background: #31a4d2;
            border-radius: 5px;
            box-shadow: 1px 1px 2px 0px #000;
          }
        }
        .regist{
          margin:2px 0 8px 0;
          .regist-btn{
            display: inline-block;
            vertical-align: top;
            width: 80px;
            height: 27px;
            letter-spacing: 6px;
            text-align: center;
            line-height: 27px;
            background: #85bcd2;
            border-radius: 5px;
            box-shadow: 1px 1px 2px 0px #000;
          }
        }
      }
    }
    .background{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index:-1;
      filter:blur(1px);
    }
    .mask {
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.6);
      z-index: 20;
      opacity:1;
      &.fade-enter-active, &.fade-leave-active {
          transition: all 0.5s
      }
      &.fade-enter, &.fade-leave-active {
          opacity: 0;
          background:rgba(7,17,27,0);
      }
      .login-show {
        width: 80%;
        height:240px;
        margin: 0 auto;
        border: 1px solid;
        position: relative;
        padding: 10px;
        background: #39928f;
        top: 50%;
        transform: translateY(-50%);
        .mask-close{
          position:absolute;
          right:0px;
          padding:5px;
          top:0;
        }
      }
    }
  }
</style>