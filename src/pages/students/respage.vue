<template>
  <div class="respage warp-conetnt">
    <el-container>
      <el-header><Header  :activeName="'xs'"/></el-header>
      <el-container>
        <el-aside width="200px"><Left  :activeName="'xs'"/></el-aside>
        <el-main>
          <div class="pre-box content">
            <div class="title-left">
              <span class="link"><router-link  :to="{path:'/resources-s',query:{id:'1'}}" ><i class="el-icon-arrow-left"></i></router-link></span>
              <h3>资源预览</h3>
            </div>
            <div class="content-page">
<!--              <div class="video-cont">-->
<!--                <iframe align="center" width="100%" height="170" src="http://img.xuexi111.org/d/file/yingyv/fangfa/2014-07-28/0463cd0a3e0af2926fcf979161c18ee8.jpg"  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>-->
<!--              </div>-->
              <div class="img-box-p">
                <img src="../../assets/img/pic_1.jpg" alt="">
              </div>
              <div class="title-bottom">
                <h3>《新概念英语》 1-4册 学生用书</h3>
                <span>日期:2014-07-28</span>
                <span>PDF</span>
                <p>《新概念英语》 1-4册 学生用书','desc':'《新概念英语》（New Concept English）作为享誉全球的最为经典地道的英语教材，以其严密的体系性、严谨的科学性、精湛的实用性、浓郁的趣味性深受英语学习者的青睐。</p>
                  <span>当前预览时长：23分钟</span>
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
