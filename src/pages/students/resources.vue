
<template>
  <div class="resources warp-conetnt">
    <el-container>
      <el-header><Header :activeName="'xs'"/></el-header>
      <el-container>
        <el-aside width="200px"><Left :activeName="'xs'"/></el-aside>
        <el-main>
          <div class="course-main">
            <div class="title">
              <h2>资源中心</h2>
<!--              <el-button type="primary" class="right-bottom" plain><router-link  :to="{path:'/addcourse',query:{id:'3'}}" >新建互动课程</router-link></el-button>-->
            </div>
            <el-row><router-link  :to="{path:'/respage',query:{id:'1'}}" >
              <el-col :span="24">
                <div class="grid-content">
                    <div class="top">
                        <h4><p class="title-h4"><i class="el-icon-postcard"></i>这里是资源名称这里是资源名称这里是资源名称这里是资源名称这里是资源名称</p><em>2020-12-02</em></h4>
                        <span>这里是资源格式这里是资源格式这里是资源格式这里是资源格式这里是资源格式</span>
                        <div class="p">这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍</div>
                    </div>
                </div>
              </el-col>
              <el-col :span="24"><div class="grid-content">
                <div class="top">
                  <h4><p class="title-h4"><i class="el-icon-postcard"></i>这里是资源名称这里是资源名称这里是资源名称这里是资源名称这里是资源名称</p><em>2020-12-02</em></h4>
                  <span>这里是资源格式这里是资源格式这里是资源格式这里是资源格式这里是资源格式</span>
                  <div class="p">这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍</div>
                </div>
              </div></el-col></router-link>
            </el-row>
            <el-pagination class="pagination-fy" background layout="prev, pager, next" :total="1000">
            </el-pagination>
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
  name: 'Resources',
  components: {
    Header,
    Left,

  },
  data() {
    return {}
  },
  computed:{

  },
  mounted() {


  },
  methods: {
    handleClick() {
      var _this=this
      _this.$router.push({path:"/coursepage"})
    }
  }
}
</script>
<style lang="less">
.warp-conetnt{
  margin:0 auto;
  display: block;
  min-width:1200px;
  overflow: auto;
}
.resources {
  width:100%;
  height:100%;
  display: block;
  background: #fff;
  .el-header{
    padding:0;
  }
  .el-main{
    height: calc(100% - 100px);
    overflow: auto;
    background: #f4f4f4;
    .course-main{
      height:100%;
      background: #ffffff;
      padding:0 10px;
      .title{
        margin:0 auto;
        padding:20px 10px;
        display: flex;
        width:100%;
        align-items: center;
        justify-content: space-between;
        h2{
          display: inline-block;
          line-height:40px;
          color: #00a0e9;
          font-size:18px;
          float: left;
          font-weight: normal;
        }
        .right-bottom{
          float:right;
          span{
            color: #409EFF;
          }
          &:hover{
            span{
              color: #ffffff;
            }
          }
        }
      }
      .el-row{
        margin:0 10px;
      }
      .grid-content{
        width:100%;
        display: block;
        padding:10px 15px;
        margin-bottom:20px;
        cursor: pointer;
        background: #ffffff;
        border:1px solid #ffffff;
        box-shadow: 0 18px 30px rgba(54,33,251,.09);
        &:hover{
          background:#ffffff;
          border-color: #00a0e9;
          box-shadow: none;
          h4{
            .title-h4{
              color:#00a0e9;
              i{
                color:#00a0e9;
              }
            }
          }
        }
        h4{
          display:flex;
          line-height: 30px;
          font-weight: normal;
          font-size:16px;
          //margin-bottom:4px;
          width:100%;
          align-items: center;
          justify-content: space-between;
          i{
            font-size:18px;
            margin-right:5px;
            position: relative;
            top:2px;
          }
          .title-h4{
            width:75%;
            display: inline-block;
            float: left;
          }
          em{
            display: inline-block;
            float:right;
            text-align: right;
            font-size:14px;
            line-height: 30px;
            color: #b3b3b3;
            font-style: normal;
          }
        }
        span{
          color:#6f7882;
          line-height:24px;
          font-size:13px;
          margin-bottom:4px;
          display: block;
        }
        .p{
          line-height: 20px;
          font-size:13px;
          height:40px;
          overflow:hidden;
          width:100%;
        }
      }
    }
    .pagination-fy{
      display: block;
      padding:30px 0;
      text-align: right;
    }
  }
}

</style>
