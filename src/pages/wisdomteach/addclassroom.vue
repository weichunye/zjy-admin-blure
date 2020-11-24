<template>
  <div class="addclassroom">
    <el-container>
      <el-header><Header   :activeName="'ls'"/></el-header>
      <el-container>
        <el-aside width="200px"><Left   :activeName="'ls'"/></el-aside>
        <el-main>
          <div class="pre-box content">
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
              :before-close="handleClose">
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
                  <li>
                    <div class="text">
                      <div class="title-top">
                        <h4><i class="el-icon-s-order"></i>这里是互动课堂标题</h4>
                      </div>
                      <div class="title-right">
                        <el-button type="primary" class="right-bottom" plain @click="dialogVisible = true">编辑</el-button>
                        <el-button type="primary" class="right-bottom" plain @click="assignments = true">添加课程作业</el-button>
                        <el-button type="primary" class="right-bottom" plain @click="activities = true">添加课堂活动</el-button>
                      </div>
                    </div>
                  </li>
                </ul>
                <el-dialog
                  title="课程作业"
                  :visible.sync="assignments"
                  class="title-Class"
                  width="40%"
                  :before-close="handassignments">
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
                title="课堂活动"
                :visible.sync="activities"
                class="title-activities"
                width="40%"
                :before-close="handactivities">
                  <template>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                      <el-tab-pane label="讨论" name="first">
                        <el-form :model="form">
                          <el-form-item label="讨论名称">
                            <el-input v-model="form.name" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="讨论描述">
                            <el-input type="textarea" v-model="form.desc3"></el-input>
                          </el-form-item>
                        </el-form>
                      </el-tab-pane>
                      <el-tab-pane label="签到" name="second">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                          <el-form-item label="签到姓名" >
                            <el-input v-model="form.title" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="签到时间" required>
                            <el-col :span="11">
                              <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date4" style="width: 100%;"></el-date-picker>
                              </el-form-item>
                            </el-col>
                          </el-form-item>
                          <el-form-item label="签到地点" >
                            <el-input v-model="form.place" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-form>
                      </el-tab-pane>
                    </el-tabs>
                  </template>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="activities = false">取 消</el-button>
                  <el-button type="primary" @click="handactivities">添 加</el-button>
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
      activeName: 'second',
      input: '',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      form: {
        name: '',
        desc:'',
        title:'',
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
        message: '互动课程添加成功',
        type: 'success'
      });
    },
    handassignments() {
      this.assignments=false
      this.$message({
        message: '添加作业成功',
        type: 'success'
      });
    },
    handactivities(){
      this.activities=false
      this.$message({
        message: '添加课堂活动',
        type: 'success'
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
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
}


</style>
