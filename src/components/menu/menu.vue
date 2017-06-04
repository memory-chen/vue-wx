<template>
  <div class="menu">
    <v-header></v-header>
    <div class="select-menu">
      <div class="tab-item repairs">
        <router-link to ="/rapairs"></router-link>
        <img src="../../assets/报修 (1).png" alt="" width="24" height="24">
        <span>报修</span>
      </div>
      <div class="tab-item stop">
        <router-link to="/stop"></router-link>
        <img src="../../assets/停.png" alt="" width="24" height="24">
        <span>停供</span>
      </div>
      <div class="tab-item pay">
        <router-link to="/pay"></router-link>
        <img src="../../assets/缴费 (1).png" alt="" width="24" height="24">
        <span>缴费</span>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import header from '../header/header.vue';
  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style lang="less">
  .menu{
    .select-menu{
      display:flex;
      width:100%;
    }
    .tab-item{
      flex:1;
      height: 57px;
      line-height: 40px;
      font-size: 12px;
      padding: 5px;
      text-align: center;
      position: relative;
      padding-top: 22px;
      padding-left: 14px;
      border-bottom: 1px solid #f3f3f3;
      border-right: 1px solid #f3f3f3;
      &>a {
        display: block;
        font-size: 14px;
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
      }
      &:last-child{
        border-right:none;
      }
      span{
        position: relative;
        top: 17px;
        left: -30px;
      }
    }
  }
</style>