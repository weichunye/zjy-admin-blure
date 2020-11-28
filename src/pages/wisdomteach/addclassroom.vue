<template>
  <div class="addclassroom warp-conetnt">
    <el-container>
      <el-header><Header   :activeName="'ls'"/></el-header>
      <el-container>
        <el-aside width="200px"><Left   :activeName="'ls'"/></el-aside>
        <el-main>
          <div class="content">
            <div class="title-left">
              <div class="left-sapn">
                <span class="link"><router-link  :to="{path:'/classdetaila',query:{id:'1'}}" ><i class="el-icon-arrow-left"></i></router-link></span>
                <h3>互动课程</h3>
              </div>
              <el-button type="primary" class="right-bottom" plain @click="dialogVisible = true">添加互动课程</el-button>
            </div>
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              class="title-Class"
              width="40%"
              >
                <div class="text">
                  <span>课堂标题</span>
                  <el-input v-model="input" placeholder="请输入标题"></el-input>
                </div>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleClose">添 加</el-button>
              </span>
            </el-dialog>
            <div class="pre-box-ul">
                <ul>
                  <li v-for="item of actCourList">
                    <div class="text">
                      <div class="title-top">
                        <h4><i class="el-icon-s-order"></i>{{item.name}}</h4>
                      </div>
                      <div class="title-right">
                        <el-button type="primary" class="right-bottom" plain @click="dialogVisible = true">编辑</el-button>
                        <el-button type="primary" class="right-bottom" plain @click="assignments = true">添加课程作业</el-button>
                        <el-button type="primary" class="right-bottom" plain @click="activvote = true">添加投票</el-button>
                        <el-button type="primary" class="right-bottom" plain @click="handactiactiSign">签到</el-button>
                        <el-button type="primary" class="right-bottom" plain @click="activities = true">添加讨论</el-button>
                        <el-button type="primary" class="right-bottom" plain @click="answer = true">抢答</el-button>
                      </div>
                    </div>
                  </li>
                </ul>
                <el-dialog
                  title="课程作业"
                  :visible.sync="assignments"
                  class="title-Class"
                  width="40%"
                  >
                  <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="作业名称">
                      <el-input v-model="form.name1"></el-input>
                    </el-form-item>
                    <el-form-item label="开始时间">
                      <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                      </el-col>
                      <el-col class="line" :span="2">-</el-col>
                      <el-col :span="11">
                        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="作业描述">
                      <el-input type="textarea" v-model="form.desc1"></el-input>
                    </el-form-item>
                    <el-form-item label="作业答案">
                      <el-input type="textarea" v-model="form.desc2"></el-input>
                    </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                  <el-button @click="assignments = false">取 消</el-button>
                  <el-button type="primary" @click="handassignments">添 加</el-button>
                </span>
                </el-dialog>
                <el-dialog
                title="添加投票"
                :visible.sync="activvote"
                class="title-activities"
                width="40%"
                >
                  <div class="creatClass-dia">
                    <el-form ref="form" :model="discussForm" label-width="80px">
                      <el-form-item label="投票名称">
                        <el-input v-model="discussForm.name"></el-input>
                      </el-form-item>
                      <el-form-item label="投票描述" prop="desc">
                        <el-input type="textarea" v-model="discussForm.desc"></el-input>
                      </el-form-item>
                      <el-form-item label="投票选项">
                        <el-form-item label="选项A" style="margin:5px auto;">
                          <el-input v-model="discussForm.optionsA"></el-input>
                        </el-form-item>
                        <el-form-item label="选项B" style="margin:5px auto;">
                          <el-input v-model="discussForm.optionsB"></el-input>
                        </el-form-item>
                        <el-form-item label="选项C" style="margin:5px auto;">
                          <el-input v-model="discussForm.optionsC"></el-input>
                        </el-form-item>
                      </el-form-item>
                    </el-form>
                  </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="activvote = false">取 消</el-button>
                  <el-button type="primary" @click="handactiactivvote">添 加</el-button>
                </span>
              </el-dialog>
                <el-dialog
                  title="添加讨论"
                  :visible.sync="activities"
                  class="title-activities"
                  width="40%"
                  >
                <template>
                  <el-form :model="form">
                    <el-form-item label="讨论名称">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="讨论描述">
                      <el-input type="textarea" v-model="form.desc3"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="activities = false">取 消</el-button>
                  <el-button type="primary" @click="handactivities">添 加</el-button>
                </span>
              </el-dialog>
<!--                签到-->
                <el-dialog
                  title="签到"
                  :visible.sync="actiSign"
                  class="title-activities"
                  width="30%"
                  >
                  <div class="screen-box">
                    <img src="../../assets/img/erweim.png" alt="">
                    <p>扫码即可签到</p>
                  </div>
              </el-dialog>
<!--              抢答-->
              <el-dialog
                  title="抢答"
                  :visible.sync="answer"
                  class="title-activities"
                  width="30%"
                  >
                <el-form ref="form" :model="form" label-width="100px">
                  <el-form-item label="限制抢答人数">
                    <el-input v-model="form.name1"></el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="answer = false">取 消</el-button>
                  <el-button type="primary" @click="handactianswer">确 认</el-button>
                </span>
              </el-dialog>
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
  name: 'Addclassroom',
  components: {
    Header,
    Left,
  },
  data() {
    return {
      dialogVisible: false,
      assignments:false,
      activities:false,
      activvote:false,
      actiSign:false,
      answer:false,
      activeName: 'second',
      input: '',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      form: {
        name: '',
        desc:'',
        title:'',
        desc3:'',
      },
      discussForm:{
        name:'',
        desc:'',
        optionsA:'',
        optionsB:'',
        optionsC:'',
      },
      ruleForm: {
        name: '',
        name1: '',
        title:'',
        place:'',
        region: '',
        date1: '',
        date2: '',
        date3: '',
        date4: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        desc1: '',
        desc2: ''
      },
      formLabelWidth: '120px',
      actCourList: [{ // 互动课堂列表
        name: 'ceshi1'
      }],
      rules: {
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
      }
    }
  },
  computed:{

  },
  mounted() {


  },

  methods: {
    handleClose() {
      this.dialogVisible=false
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<div class="el-notification-top">互动课程添加成功 !</div>',
        type: ''
      });
      let bewObj = {name: this.input}
      this.actCourList.push(bewObj)
    },
    handassignments() {
      this.assignments=false
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<div class="el-notification-top">添加作业成功 !</div>',
        type: ''
      });
    },
    handactivities(){
      this.activities=false
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<div class="el-notification-top">添加讨论成功 !</div>',
        type: ''
      });
    },
    handactiactivvote(){
      this.activvote=false
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<div class="el-notification-top">添加投票成功 !</div>',
        type: ''
      });
    },
    handactiactiSign(){
      this.actiSign=true
      setTimeout(()=>{
        this.actiSign=false
      },3000)

    },
    handactianswer(){
      this.answer=false
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<div class="el-notification-top">抢答设置完毕 !</div>',
        type: ''
      });
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  }
}
</script>
<style lang="less">
.addclassroom {
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
      justify-content: space-between;
      .left-sapn{
        display: inline-block;
      }
      .el-icon-arrow-left{
        font-size:24px;
        margin-right:5px;
        cursor: pointer;
        margin-top:9px;
        color: #00a0e9;
        float: left;
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
  }
  .right-bottom{
    float:right;
    line-height: 16px;
    padding:10px;
    text-align: right;
    height:36px;
    display: inline-block;
    margin:4px 0;
    span{
      color: #409EFF;
    }
    &:hover{
      span{
        color: #ffffff;
      }
    }
    &:focus{
      span{
        color: #ffffff;
      }
    }
  }
  .pre-box-ul{
    width:100%;
    display: block;
    padding:20px 38px;
    li{
      padding:5px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border:1px solid #e6e6e6;
      .text{
        display: block;
        width:100%;
        .title-top{
          display: flex;
          align-items: center;
          justify-content: space-between;
          line-height: 36px;
          margin-bottom:5px;
          width:100%;
          h4{
            display: inline-block;
            float: left;
            width:60%;
            font-weight: normal;
            line-height: 36px;
            .el-icon-s-order{
              font-size:20px;
              color:#409EFF;
              margin-right:5px;
              position: relative;
              top:2px;
            }
          }
        }
        .title-right{
          display: inline-block;
          float: right;
          .right-bottom{
            display: inline-block;
            padding:3px 5px;
            line-height: 16px;
            height:auto;
            margin:0 5px;
            span{
              font-size:12px;
            }
          }
        }
      }
    }
  }
  .title-Class{
    .text{
      span{
        line-height: 24px;
        display: block;
        margin-bottom:6px;
        font-size:14px;
      }
    }
    .el-dialog__footer{
      .el-button{
        padding:5px 10px;
        line-height: 20px;
        height:auto;
        span{
          color: #66b1ff;
          font-size:12px;
        }
      }
      .el-button--primary{
        span{
          color: #ffffff;
        }
      }
    }
  }
  .title-activities{
    .el-dialog__body{
      padding:10px 20px;
    }

  }
  .el-dialog__footer{
    .el-button--primary{
      span{
        color: #ffffff;
      }
    }
  }
  .screen-box{
    width: 100%;
    text-align: center;
    img{
      width: 300px;
      height: 300px;
    }
    p{
      font-size: 16px;
      color: #999;
      line-height: 40px;
      text-align: center;
    }
  }
}


</style>
