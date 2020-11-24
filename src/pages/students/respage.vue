<template>
  <div class="respage">
    <el-container>
      <el-header><Header  :activeName="'xs'"/></el-header>
      <el-container>
        <el-aside width="200px"><Left  :activeName="'xs'"/></el-aside>
        <el-main>
          <div class="pre-box content">
            <div class="title-left">
              <span class="link"><router-link  :to="{path:'/resources',query:{id:'1'}}" ><i class="el-icon-arrow-left"></i></router-link></span>
              <h3>资源预览</h3>
            </div>
            <div class="content-page">
              <div class="video-cont">
                <iframe align="center" width="100%" height="170" src="../../assets/img/资源记录.doc"  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
              </div>
              <div class="title-bottom">
                <h3>这里是资源名称这里是资源名称这里是资源名称这里是资源名称这里是资源名称</h3>
                <span>日期:2020-12-02</span>
                <span>这里是资源格式这里是资源格式这里是资源格式这里是资源格式这里是资源格式</span>
                <p>这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍</p>
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
      }
    }
  },
  computed:{

  },
  mounted() {


  },

  methods: {
    creatClassSuccess(){
      this.creatClassVisible=false
      this.$message({
        message: '课程修改成功',
        type: 'success'
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
    .content-page{
      width:100%;
      margin:30px auto;
      padding:0 30px;
      .title-bottom{
        width:100%;
        display: block;
        margin-top:20px;
        h3{
          display: block;
          font-size:16px;
          font-weight: bold;
          width:100%;
          line-height: 30px;
          margin-bottom:5px;
        }
        span{
          line-height: 24px;
          display: block;
          margin:0 auto;
          font-size:14px;
          width:100%;
        }
        p{
          display: block;
          width:100%;
          margin:5px auto;
          line-height: 20px;
        }
      }
    }
  }
}


</style>
