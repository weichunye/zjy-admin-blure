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
          <el-menu-item index=""  @click="dialogSharing = true">
            <i class="el-icon-monitor"></i>
            <span slot="title">共享屏幕</span>
          </el-menu-item>

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
            <el-menu-item index="/collegesmant" >
              <i class="el-icon-document"></i>
              <span slot="title">资源中心</span>
            </el-menu-item></router-link>
        </el-menu>
      </el-col>


    </el-row>
    <div class="close-btn" @click="outSharing">
      退出共享
    </div>
    <iframe style="display: none; position: fixed; left:5%;top:3%;width:90%;height:90%; z-index: 10000;"  id="imgPre" src="http://127.0.0.1:8090/#/rescontent"></iframe>
    <div style="display: none" class="marking"></div>
    <el-dialog
        title="共享屏幕"
        :visible.sync="dialogSharing"
        width="40%"
        :modal="false"
        class="Sharing-cont"
        >
        <div class="text">
          <span>确定要共享资源中心吗？</span>
      <!--    <div class="demo-image__preview">
            <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :preview-src-list="srcList">
            </el-image>
          </div>-->
          <p><img src="../assets/img/pic-img.png" style="width:200px;"/></p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogSharing=false">取消</el-button>
          <el-button type="primary" @click="handleSharing">确定</el-button>
        </span>
    </el-dialog>
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
        activeIndex2: '1',
        dialogSharing:false,
        isShowImgPre:false,
        url:require('../assets/img/pic-img.png') ,
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
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
      },
      handleSharing(done) {
        this.dialogSharing=false
        $('.marking').fadeIn()
        $('#imgPre').fadeIn()
        $('.el-header').fadeOut()

      },
      outSharing(){
        $('.marking').fadeOut()
        $('#imgPre').fadeOut()
        $('.el-header').fadeIn()
      }
    }
	}
</script>
<style lang="less">
  *{
    box-sizing: border-box;
  }
  .marking{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
  }
  .close-btn{
    position: fixed;
    right: 5px;
    top: 5px;
    padding:5px 10px;
    font-size: 14px;
    color: #fff;
    background: #de370a;
    z-index: 99999;
    cursor: pointer;
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
.wap-con{
  width:100%;
  display: block;
  .el-dialog{
    width:90%;
    max-height:700px;
    overflow: auto;
    img{
      width:100%;
      height:100%;
    }
  }
}
.Sharing-cont{
  background: rgba(0,0,0,0.8);
  //position: relative;
  z-index:999999!important;
  .el-dialog__body{
    .text{
      span{
        text-align: center;
        line-height: 40px;
      }
      p{
        img{
          border:2px solid #409eff;
        }
      }
    }
  }
}


</style>
