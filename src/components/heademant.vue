<template>
	<div class="heademant-lessons">
      <div class="logo">
        LOGO
      </div>
      <ul class="ul-list">
        <li class="active"><router-link  :to="{path:'/collegesmant',query:{id:'1'}}" >资源中心</router-link></li>
      </ul>

      <div class="right-text">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">
              <span class="text">院校管理员</span>
                  <span class="img">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                  </span>
            </template>
            <el-menu-item index="2-1">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
	</div>
</template>

<script>

	export default {
		name: 'Enter',
		components: {

		},
		data() {
			return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        activeIndex: '1',
        activeIndex2: '1'
      }
		},
      computed:{

      },
		mounted() {


		},
    filters:{
      reBytesStr: function(str) {
        str=str.replace(/<\/?.+?>/g,"").replace(/ /g,"").replace(/&(\S*)?;/g,"")
        if((!str && typeof(str) != 'undefined')) {
          return '';
        }
        var num = 0;
        var str1 = str;
        var str = '';
        for(var i = 0, lens = str1.length; i < lens; i++) {
          num += ((str1.charCodeAt(i) > 255) ? 2 : 1);
          if(num > 108) {
            break;
          } else {
            str = str1.substring(0, i + 1);
          }
        }
        if(num>108){
          return str+"……";
        }else{
          return str
        }
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
	}
</script>
<style lang="less">
  *{
    box-sizing: border-box;
  }
	.heademant-lessons {
    width:100%;
    height:60px;
    padding:0 30px;
		background: #fff;
    box-shadow: 0 18px 30px rgba(54,33,251,.09);
    position: fixed;
    left:0;
    top:0;
    z-index:9;
    .logo{
      float: left;
      height:40px;
      margin:10px 0;
      display: inline-block;
      line-height:40px;
      color: #3621fb;
      font-size:30px;
      width:300px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .ul-list{
      line-height:40px;
      margin:10px 15px;
      display: inline-block;
      width:auto;
      li{
        line-height:40px;
        position: relative;
        display: inline-block;
        margin:0 20px;
        float: left;
        a{
          display: block;
        }
        &::after{
          position: absolute;
          left:50%;
          width:0;
          bottom:0;
          content:"";
          height:2px;
          background:#3621fb;
          transition: 0.3s;
        }
        &.active{
          color: #3621fb;
          a{
            color: #3621fb;
          }
          &::after{
            width:100%;
            margin-left:-50%;
          }
        }
        &:hover{
          color: #3621fb;
          a{
            color: #3621fb;
          }
          &::after{
            width:100%;
            margin-left:-50%;
          }
        }
      }
    }
    .right-text{
      display: inline-block;
      float:right;
      text-align: right;
      line-height: 40px;
      //margin-top:-20px;
      .text{
        margin:0 10px;
        line-height:40px;
      }
      .el-avatar{
        text-align: center;
        width:35px!important;
        height:35px!important;
        img{
          display: block;
        }
      }
      .el-submenu__title{
        padding:0;
        border-bottom:none;
        border-color:#ffffff;
      }
      .el-menu.el-menu--horizontal{
        border-bottom:none;
      }
    }

	}



</style>
