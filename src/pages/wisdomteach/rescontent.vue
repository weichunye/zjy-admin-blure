
<template>
  <div class="resources-A warp-conetntA">
    <el-container>
      <el-container>
        <el-main>
          <div class="course-main">
            <div class="title">
              <h2>资源中心</h2>
              <button  class="right-bottom" @click="creatClassVisible=true">添加资源</button>
             <!-- <el-button type="primary" class="right-bottom" plain><router-link  :to="{path:'/addcourse',query:{id:'3'}}" >新建互动课程</router-link></el-button> -->
            </div>
     <router-link  :to="{path:'/respage',query:{id:'1'}}" >
                <div class="grid-content" v-for="item of dataList">
                    <div class="top">
                        <h4><p class="title-h4"><!--<i class="el-icon-postcard"></i>-->{{item.name}}</p><em>{{item.time}}</em></h4>
                        <span style="font-weight: bold; color: slateblue">{{item.type==1?"Word":item.type==2?"PDF":"IMG"}}</span>
                        <div class="p">{{item.desc}}</div>
                    </div>
                </div>
              <!-- <el-col :span="24">
                <div class="grid-content">
                  <div class="top">
                    <h4><p class="title-h4"><i class="el-icon-postcard"></i>这里是资源名称这里是资源名称这里是资源名称这里是资源名称这里是资源名称</p><em>2020-12-02</em></h4>
                    <span>这里是资源格式这里是资源格式这里是资源格式这里是资源格式这里是资源格式</span>
                    <div class="p">这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍这里是资源介绍</div>
                  </div>
                </div>
              </el-col> -->
              </router-link>
            <el-dialog
                title="上传资源"
                :visible.sync="creatClassVisible"
                width="60%"
                >
                <div class="creatClass-dia">
                  <el-form ref="form" :model="classForm" label-width="160px">
                    <el-form-item label="资源名称">
                      <el-input v-model="classForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="选择文件" prop="pic">
                      <el-upload class="upload-demo" action="" :auto-upload='false' :on-change='changeUpload'>
                        <el-button size="small" type="primary">点击上传</el-button>
                      </el-upload>
                    </el-form-item>
                    <el-form-item label="是否共享到平台资源库">
                      <el-radio v-model="radio" label="1">是</el-radio>
                      <el-radio v-model="radio" label="2">否</el-radio>
                    </el-form-item>
                    <el-form-item label="资源描述" prop="desc">
                      <el-input type="textarea" v-model="classForm.desc"></el-input>
                    </el-form-item>
                  </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
              <el-button @click="creatClassVisible = false">取 消</el-button>
              <el-button type="primary" @click="creatClassSuccess">确 定</el-button>
            </span>
              </el-dialog>
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
    return {
      dataList:[
        {type:'2',time: '2014-07-28',name:'《新概念英语》 1-4册 学生用书','desc':'《新概念英语》（New Concept English）作为享誉全球的最为经典地道的英语教材，以其严密的体系性、严谨的科学性、精湛的实用性、浓郁的趣味性深受英语学习者的青睐。'},
        {type:'2',time: '2012-08-16',name:'《新概念英语语法详解大全》','desc':'本书是专为帮助《新概念英语》的自学者学好语法而编写的。'},
        {type:'1',time: '2016-04-06',name:'考研背单词及重点阅读总汇','desc':'《考研背单词及重点阅读总汇》通过根认识字，提供了超过6000个丰富的英语单词在测试卷的读字真人发音，《考研背单词及重点阅读总汇》集中整理关键词的阅读理解。'},
        {type:'1',time: '2014-09-14',name:'《中华经典藏书(套装共50册)》','desc':'《中华经典藏书(套装共50册)》包含：“四书五经”、诸子百家，经典的价值和魅力在流光岁影里永不褪色，先贤圣哲的智慧光芒照耀着我们的现代生活。为在古代经典与现代经验间架起一座沟通的桥梁，中华书局推出“中华经典藏书”丛书。'},
        {type:'1',time: '2014-09-14',name:'《针灸图谱》-清晰PDF彩图+挂板大图','desc':'本图谱以国家技术监督局颁布的国家标准《经穴部位》为依据，收录经穴361个，经外奇穴48个。在编写形式上采用实体照片定位表现的方法，文字部分中英对照，形象直观，图文并茂，易学易用。'},
        {type:'2',time: '2016-06-15',name:'《膏药方集》扫描','desc':'中医外科膏药是运用中药归经原则，运用药物互相协调为用的效能，组成多味药物的大复方，以发挥药物的良好效果，由于膏药用于肌表薄贴，所以膏药中取气味具厚的药物，并加以引药率领群药，开结行滞直达病所，因此可透入皮肤产生消炎，止痛，活血化淤，通经走络，开窍透骨，祛风散寒等。'},
        {type:'2',time: '2013-09-28',name:'《古方妙用》','desc':'中医是指中国传统医学，是研究人体生理、病理，以及疾病的诊断和防治等的一门学科，它承载着中国古代人民同疾病作斗争的经验和理论知识，'},
        {type:'2',time: '2014-12-04',name:'《完全自杀手册》','desc':'《完全自杀手册》主要介绍药物、上吊、跳楼、割腕与刎颈、撞车、瓦斯中毒、触电、投水（投河、投海）、自焚、冻死及其他自杀方法如饿死、被动物咬死或以其他物理形式致死方法。'},
        {type:'2',time: '22016-08-18',name:'《人类之谜》扫描版','desc':'《人类之谜》介绍了人类起源、特异人种、迷离两性、扑朔孪生、奇妙节律、多重人格、五觉通感、记忆绝伦、视力超常、怪异睡眠、离奇梦幻、人体电磁、心灵感应、意念魔力、经络悬谜、气功奥秘、长生不老、死亡再生等内容，本书《人类之谜》的资料翔实、内容丰富，是了解人类起源的一本极佳参考书，值得一读。'},
        {type:'2',time: '2016-06-15',name:'《高峰实战武功》','desc':'武术，打拳和使用兵器的技术，是中国传统的体育项目，武术又称国术或武艺，中国传统体育项目，其内容是把踢、打、摔、拿、跌、击、劈、刺等动作按照一定规律组成徒手的和器械的各种攻防格斗功夫、套路和单势练习。'}
      ],
      creatClassVisible:false,
      classForm:{
        name:'',
        time:'',
        region:'bixiu',
        startTime:'',
        desc:'',
        imageUrl:'',

      },
      radio:'1'
    }
  },
  computed:{

  },
  mounted() {


  },
  methods: {
    handleClick() {
      var _this=this
      _this.$router.push({path:"/coursepage"})
    },
    creatClassSuccess(){
      let  _this=this
      this.creatClassVisible=false
      this.$message({
        message: '资源添加成功',
        type: 'success'
      })
      let newForm={type:3,name:this.classForm.name,desc:this.classForm.desc}
      _this.dataList.push(newForm)
    },
  }
}
</script>
<style lang="less">
.warp-conetntA{
  margin:0 auto;
  display: block;
  overflow: auto;
}
.btn-creat-class{
  float: right;
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background: #17ae54;
  cursor: pointer;
  border-radius: 6px;
}
.creatClass-dia{
  margin: 10px auto;
  width: 90%;
  min-height: 300px;
  .el-textarea__inner{
    height: 150px;
    overflow-y: auto;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
.resources-A {
  width:100%;
  height:100%;
  display: block;
  background: #fff;
  .el-header{
    padding:0;
  }
  .el-main{
    height: calc(100% - 100px);
    overflow: initial;
    background: #f4f4f4;
    .course-main{
      height:100%;
      background: #ffffff;
      padding:0 10px;
      .el-row{
        z-index:1;
      }
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
          display: inline-block;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          background: #ecf5ff;
          border: 1px solid #b3d8ff;
          color: #409EFF;
          -webkit-appearance: none;
          text-align: center;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          outline: 0;
          margin: 0;
          -webkit-transition: .1s;
          transition: .1s;
          font-weight: 500;
          padding: 12px 20px;
          font-size: 14px;
          border-radius: 4px;
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
        //width:100%;
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
  .el-dialog__footer{
    .el-button--primary{
      span{
        color: #ffffff;
      }
    }
  }
}

</style>
