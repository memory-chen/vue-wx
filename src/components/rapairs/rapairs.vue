<template>
  <div class = "rapairs">
    <div class="image-head">
      <div class = "back">
      <router-link to="/">
        <-
      </router-link>
      </div>
      <img src="../../assets/header.jpg" alt="" height = "100" width= "100%">
    </div>
    <div class="content">
      <div class="editor">
        <span>已经绑定了{{lists.length}}位</span>
        <div class="editor-btn">
          <span class= "icon"></span>
          <span class = "text">编辑</span>
        </div>
      </div>
      <ul>
        <li v-for = "item in lists" class = "lists">
          <div class="avatar-img">
            <img src="../../assets/timg.jpg" alt="" width = "48" height = "48">
          </div>
          <div class="content-list">
            <div class="name">
              <span>{{item.name}}</span>
              <span>{{item.telephone}}</span>
            </div>
            <div class="adr">
              <p>{{item.adr}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="foot-addUser" @click = "selectAdduser" >
      增加用户信息
    </div>
    <addUser ref="addUser" :lists = "lists"></addUser>
  </div>
</template>

<script>
import addUser from '../addUser/addUser';
  export default {
    data() {
      return {
        lists: [{
            name: '张三',
            telephone: 12306,
            adr: '宇宙中心太阳系'
          }, {
            name: '李四',
            telephone: 12306888,
            adr: '宇宙中心木哈拉星系'
          }, {
            name: '王五',
            telephone: 12306999,
            adr: '宇宙中心吉姆斯基星系'
          }
        ]
      };
    },
    methods: {
      selectAdduser() {
        this.$refs.addUser.show();
      }
    },
    components: {
      addUser
    }
  };
</script>

<style lang="less">
  .rapairs{
    font-size:0;
    .image-head{
      .back{
        position: absolute;
        font-size:16px;
        color: #987f7f;
        padding: 10px;
        font-weight: 700
      }
    }
    .content{
      font-size:14px;
      position:relative;
      .editor{
        position:relative;
        padding:5px 10px;
        height:30px;
        line-height:30px;
        background:#eee;
        .editor-btn{
          position: absolute;
          top:5px;
          right:10px;
        }
      }
      .lists {
        border-bottom: 1px solid #eee;
        height: 50px;
        padding: 10px;
        .avatar-img{
          float:left;
        }
        .content-list {
          display: inline-block;
          margin-left: 10px;
          font-size: 15px;
          .name{
            padding:5px;
            color:red;
            font-size:18px;
          }
          .adr{
            padding:5px;
            font-size:14px;
          }
        }
      }
    }
    .foot-addUser{
      position:fixed;
      width:100%;
      height:50px;
      bottom:0;
      background:#3e80e6;
      color:#fff;
      font-size: 20px;
      text-align:center;
      line-height:50px;
    }
  }
</style>