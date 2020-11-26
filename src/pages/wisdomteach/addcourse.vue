<template>
  <div class="addcourse warp-conetnt">
    <el-container>
      <el-header><Header   :activeName="'ls'"/></el-header>
      <el-container>
        <el-aside width="200px"><Left   :activeName="'ls'"/></el-aside>
        <el-main>
          <div class="pre-box content">
            <div class="title-left">
              <span class="link"><router-link  :to="{path:'/classdetaila',query:{id:'1'}}" ><i class="el-icon-arrow-left"></i></router-link></span>
              <h3>课程详情</h3>
            </div>
            <div class="text-box">
              <div class="creatClass-dia">
                <el-form ref="form" :model="classForm" label-width="80px">
                  <el-form-item label="课程名称">
                    <el-input v-model="classForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="课程封面" prop="pic">
                    <!--            <img style=" height: 100px" src="../assets/teacher/pic_1.png" alt="">-->
                    <el-upload class="upload-demo" action="" :auto-upload='false' :on-change='changeUpload'>
                      <el-button size="small" type="primary">重新上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </el-form-item>
                  <el-form-item label="课时">
                    <el-input-number v-model="classForm.time" controls-position="right"></el-input-number>
                  </el-form-item>
                  <el-form-item label="开课日期">
                    <el-date-picker
                      v-model="classForm.startTime"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </el-form-item>
<!--                  <el-form-item label="课程类型">-->
<!--                    <el-select v-model="classForm.region" placeholder="请选择活动区域">-->
<!--                      <el-option label="必须课" value="bixiu"></el-option>-->
<!--                      <el-option label="选修课" value="xuanxiu"></el-option>-->
<!--                    </el-select>-->
<!--                  </el-form-item>-->
                  <el-form-item label="课程简介" prop="desc">
                    <el-input type="textarea" v-model="classForm.desc"></el-input>
                  </el-form-item>
                  <el-row>
                    <el-col :span="24" class="botton-con">
                      <el-button type="primary" class="btn-creat-class" plain>取消</el-button>
                      <el-button type="primary" class="btn-creat-class" @click="creatClassSuccess" plain>保存</el-button>
                    </el-col>
                  </el-row>
                </el-form>
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
        name:'',
        time:'',
        region:'',
        startTime:'',
        desc:''
      },
			type: ''
    }
  },
  computed:{

  },
  created () {
  	this.getParams()
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
	  let _this = this
		if(this.type == '编辑') {
			this.$router.push({
				path: '/enter',
				query: {
				 }
			})
		} else {
			this.$router.push({
				path: '/enter',
				query: {
				 classForm: _this.classForm,
				 }
			})
		}
  },
  getParams(){ // 判断新增还是编辑
		this.type = this.$route.query.type
		if(this.type == '编辑') {
			this.classForm = this.$route.query.classForm
		} else {
			this.classForm = {}
		}
	},
  changeUpload (file) {
		console.log(file)
	}
}}
</script>
<style lang="less">
.addcourse {
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
    float:initial;
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
  margin: 0px auto;
  width: 100%;
  min-height: 300px;
  .el-textarea__inner{
    height: 150px;
    overflow-y: auto;
  }
  .el-form-item__label{
    text-align: left;
  }
  .el-form-item__content{
    .el-button--primary{
      span{
        color: #ffffff;
      }
    }
  }
}

</style>
