<template>
	<div class="header-lessons">
      <div class="logo">
<!--        LOGO<span style="font-size:12px; color:#00a0e9;">(第二版)</span>-->
      </div>
      <div class="right-text">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">
              <span class="text">{{this.activeName=="ls"?"赵雨泽":this.activeName=="xs"?"钱浩明":this.activeName=="pt"?"李雪菲":"孙春婷"}}</span>
                <span style="color: #00a0e9;">{{this.activeName=="ls"?"老师":this.activeName=="xs"?"学生":this.activeName=="pt"?"平台管理员":"院校管理员"}}</span>
<!--                  <span class="img">-->
<!--&lt;!&ndash;                    <el-avatar :size="50" :src="circleUrl"></el-avatar>&ndash;&gt;-->
<!--                    <img src="../assets/img/img-gr.png"/>-->
<!--                  </span>-->
            </template>
              <router-link  :to="{path:'/'}" >
                <el-menu-item index="2-1">退出登录</el-menu-item>
              </router-link>
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
      props:['activeName'],
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
	.header-lessons {
    width:100%;
    height:60px;
    padding:0 30px;
		background: #fff;
    box-shadow: 0 4px 15px rgba(0,160,233,.08);
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
      color: #00a0e9;
      font-size:30px;
      width:300px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .right-text{
      display: inline-block;
      float:right;
      text-align: right;
      line-height: 40px;
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
      .img{
        width:50px;
        height:50px;
        display: inline-block;
        img{
          display: block;
          width:100%;
          height:100%;
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
  .el-menu--popup{
    text-align: center;
    min-width:120px;
    .router-link-active{
      text-align: center;
    }
  }



</style>
