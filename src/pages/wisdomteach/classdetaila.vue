<template>
	<div class="classdetaila">
    <el-container>
      <el-header><Header/></el-header>
      <el-container>
        <el-aside width="200px"><Left/></el-aside>
        <el-main>
        <div class="pre-box content">
          <div class="title-left">
            <span class="link"><router-link  :to="{path:'/enter',query:{id:'1'}}" ><i class="el-icon-arrow-left"></i></router-link></span>
            <h3>课程详情</h3>
          </div>
         <div class="text-box">
           <div class="img">
             <img src="../../assets/img/pic.jpg"/>
           </div>
           <div class="text">
             <p>
               <span>课程名称：</span>人工智能V1
             </p>
             <p>
               <span>开课日期：</span>2020-02-23
             </p>
             <p>
               <span>课时：</span>32
             </p>
             <p>
               <span >课程封面：</span>
             </p>
             <p>
               <span>课程简介：</span>课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课
               程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课
               程简介课程简介课程简介
             </p>
           </div>
         </div>
          <el-row>
            <el-col :span="24" class="botton-con">
              <router-link  :to="{path:'/addcourse',query:{id:'1'}}" >
                <el-button type="primary" class="btn-creat-class" plain>编辑互动课程</el-button>
              </router-link>
              <router-link  :to="{path:'/addclassroom',query:{id:'4'}}" >
                <el-button type="primary" class="btn-creat-class" plain>新建互动课堂</el-button>
              </router-link>
            </el-col>
          </el-row>
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
		name: 'ClassDetaila',
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
	.classdetaila {
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

      .text-box{
        padding:40px;
        display: flex;
        .img{
          width:36%;
          height:230px;
          float: left;
          img{
            width:100%;
            height:100%;
            display: block;
          }
        }

        .text{
          width:56%;
          margin-left:3%;
          float: left;;
          p{
            margin:0 auto;
            width:100%;
            font-size: 14px;
            line-height: 28px;
            //padding:0 15px;
            span{
              font-weight: normal;
              font-size: 14px;
            }
            img{
              height: 150px;
            }

          }
        }
      }

    }
    .botton-con{
      text-align: center;
      margin:50px auto;
    }
    .btn-creat-class{
      margin: 10px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      span{
        color: #409EFF;
      }
      &:focus{
        span{
          color: #ffffff;
        }
      }
      &:hover{
        span{
          color: #ffffff;
        }
      }
    }
	}
  .creatClass-dia{
    margin: 10px auto;
    width: 90%;
    min-height: 300px;
    .el-textarea__inner{
      height: 150px;
      overflow-y: auto;
    }
  }

</style>
