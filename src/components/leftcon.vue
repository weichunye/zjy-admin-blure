<template>
	<div class="left-lessons">
    <el-row class="tac">
      <el-col v-if="this.activeName=='ls'" :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <router-link  :to="{path:'/enter',query:{id:'1'}}" >
          <el-menu-item index="/enter">
            <i class="el-icon-menu"></i>
            <span slot="title">智慧教学</span>
          </el-menu-item></router-link>
          <router-link  :to="{path:'/resources',query:{id:'2'}}" >
          <el-menu-item index="/resources">
            <i class="el-icon-document"></i>
            <span slot="title">资源中心</span>
          </el-menu-item></router-link>
        </el-menu>
      </el-col>
      <el-col v-if="this.activeName=='xs'" :span="24">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
          <router-link  :to="{path:'/my-course'}" >
            <el-menu-item index="/enter">
              <i class="el-icon-menu"></i>
              <span slot="title">我的课堂</span>
            </el-menu-item></router-link>
          <router-link  :to="{path:'/resources-s'}" >
            <el-menu-item index="/resources">
              <i class="el-icon-document"></i>
              <span slot="title">资源中心</span>
            </el-menu-item></router-link>
        </el-menu>
      </el-col>
      <el-col v-if="this.activeName=='pt'" :span="24">
      <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
        <router-link  :to="{path:'/platformmant'}" >
          <el-menu-item index="/platformmant">
            <i class="el-icon-document"></i>
            <span slot="title">资源中心</span>
          </el-menu-item></router-link>
      </el-menu>
    </el-col>
      <el-col v-if="this.activeName=='yx'" :span="24">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
          <router-link  :to="{path:'/collegesmant'}" >
            <el-menu-item index="/collegesmant">
              <i class="el-icon-document"></i>
              <span slot="title">资源中心</span>
            </el-menu-item></router-link>
        </el-menu>
      </el-col>
    </el-row>
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
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
	}
</script>
<style lang="less">
  *{
    box-sizing: border-box;
  }
	.left-lessons {
    position: fixed;
    top: 60px;
    left: 0;
    width:200px;
    display: inline-block;
    height:100%;
    .el-col-24{
      height:100%;
      //padding:10px 0;
      .el-menu{
        height:100%;
        padding:10px 0;
      }
    }
    .el-row{
      height:100%;
    }
    .el-menu-item{
      a{
        display: block;
        width:100%;
      }
      &.is-active{
        span{
          color:#00a0e9;
        }
      }
    }
	}



</style>
