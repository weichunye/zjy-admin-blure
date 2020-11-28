<template>
  <div class="respage warp-conetnt">
    <el-container>
      <el-header><Header  :activeName="'ls'"/></el-header>
      <el-container>
        <el-aside width="200px"><Left  :activeName="'ls'"/></el-aside>
        <el-main>
          <div class="content">
            <div class="title-left">
              <span class="link"><router-link  :to="{path:'/resources',query:{id:'1'}}" ><i class="el-icon-arrow-left"></i></router-link></span>
              <h3>资源预览</h3>
            </div>
            <div class="content-page">
     <!--         <div class="video-cont">
                <iframe align="center" width="100%" height="170" src="http://img.xuexi111.org/d/file/yingyv/fangfa/2014-07-28/0463cd0a3e0af2926fcf979161c18ee8.jpg"  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
              </div>-->
              <div class="img-box-p">
                <img :src="respageList.img" alt="">
              </div>
              <div class="title-bottom">
                <h3>{{respageList.name}}</h3>
                <span>日期:{{respageList.time}}</span>
                <span>IMG</span>
                <p>{{respageList.desc}}</p>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/heade.vue'
import Left from '@/components/leftcon.vue'
export default {
  name: 'Addcourse',
  components: {
    Header,
    Left,
  },
  data() {
    return {
      creatClassVisible:false,
      classForm:{
        name:'人工智能V1',
        time:'32',
        region:'bixiu',
        startTime:'2020-02-23',
        desc:'课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课\n' +
          '         程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课\n' +
          '         程简介课程简介课程简介'
      },
      respageList:''
    }
  },
  computed:{

  },
  mounted() {
    this.respageList=this.$route.params.respageList
  },

  methods: {
    creatClassSuccess(){
      this.creatClassVisible=false
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<div class="el-notification-top">课程修改成功 !</div>',
        type: ''
      });

    }

  }
}
</script>
<style lang="less">
.respage {
  .content{
    overflow: hidden;
    //margin-top: 15px;
    min-height: 600px;
    background: #fff;
    padding:10px;
    .title-left{
      display: flex;
      line-height: 40px;
      padding:0 10px;
      .el-icon-arrow-left{
        font-size:24px;
        margin-right:5px;
        cursor: pointer;
        margin-top:9px;
        color: #00a0e9;
      }
      h3{
        display: inline-block;
        line-height:40px;
        color: #00a0e9;
        font-size:18px;
        float: left;
        font-weight: normal;
      }
    }
    .content-page {
      width: 100%;
      margin: 30px auto;
      padding: 0 30px;

      .title-bottom {
        width: 100%;
        display: block;
        margin-top: 20px;

        h3 {
          display: block;
          font-size: 16px;
          font-weight: bold;
          width: 100%;
          line-height: 30px;
          margin-bottom: 5px;
        }

        span {
          line-height: 24px;
          display: block;
          margin: 0 auto;
          font-size: 14px;
          width: 100%;
        }

        p {
          display: block;
          width: 100%;
          margin: 5px auto;
          line-height: 20px;
        }
      }

      .img-box-p {
        margin: 20px auto;
        width: 80%;
        height: 500px;
        overflow: auto;

        img {
          width: 100%;
          height: auto;
        }

        &::-webkit-scrollbar { /*滚动条整体样式*/
          width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
          height: 10px;

        }

        &::-webkit-scrollbar-thumb { /*滚动条里面小方块*/

          border-radius: 10px;

          -webkit-box-shadow: none;

          background: #ffffff;

        }

        &::-webkit-scrollbar-track { /*滚动条里面轨道*/

          -webkit-box-shadow: none;

          border-radius: 10px;

          background: #ffffff;

        }
      }
    }
  }
  .img-box-p{
    margin: 20px auto;
    width: 80%;
    height: 500px;
    overflow: auto;
    img{
      width: 100%;
      height: auto;
    }
  }
}


</style>
