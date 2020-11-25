
<template>
  <div class="collegesmant">
    <el-container>
    <el-header><Header :activeName="'pt'"/></el-header>
    <div class="collegesmant-cont">
      <el-aside width="200px"><Left :activeName="'pt'"/></el-aside>
      <div class="sechinput">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <ul style="margin-left: 150px;display: flex;flex-wrap: wrap;">
        <li v-for="(item, index) of dataList" :key='index' style="height: 120px;">
          <div class="top">
            <h4 class="title">{{item.name}}</h4>
            <!-- <div class="right">
              <el-button type="primary" class="right-bottom" plain @click="dialogVisible = true" >审核</el-button>
              <el-button type="primary" class="right-bottom" plain>上传</el-button>
            </div> -->
            <div class="right">
              <el-button v-if="!item.isAccess" type="primary" class="right-bottom" plain @click="dialogVisible = true,itemNum=index" >审核</el-button>
              <el-button v-else disabled type="info" plain  >审核</el-button>
            </div>
          </div>
          <span>{{item.desc}}</span>
        </li>
        <!-- <li class="active">
          <div class="top">
            <h4 class="title">这里是资源标题这里是资源标题</h4>
            <div class="right">
              <el-button type="info" class="right-bottom" plain @click="dialogVisible = true" disabled>审核</el-button>
              <el-button type="info" class="right-bottom" plain disabled>上传</el-button>
            </div>
          </div>
          <span>这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述</span>
        </li> -->
      </ul>
      <!-- <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        class="title-Class"
        width="40%"
        :before-close="handleClose">
        <div class="text">
          <span>是否审核通过？</span>
        </div>
        <span slot="footer" class="dialog-footer">
                <el-button>否</el-button>
                <el-button type="primary" @click="handleClose">是</el-button>
              </span>
      </el-dialog> -->
      <el-dialog
        title="审核"
        :visible.sync="dialogVisible"
        class="title-Class"
        width="40%"
        :before-close="handleClose">
        <div class="text">
          <el-form ref="form" :model="classForm" label-width="160px">
            <el-form-item label="审核是否通过">
              <el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="0">否</el-radio>
            </el-form-item>
            <el-form-item v-if="radio==0" label="审核意见" prop="desc">
              <el-input type="textarea" v-model="classForm.desc"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible=false">取消</el-button>
                <el-button type="primary" @click="handleClose">确定</el-button>
              </span>
      </el-dialog>
    </div>
    </el-container>
  </div>
</template>

<script>
  import Header from '@/components/heade.vue'
  import Left from '@/components/leftcon.vue'
	export default {
		name: 'Collegesmant',
		components: {
      Header,
          Left
		},
		data() {
			return {
        input: '',
        dialogVisible:false,
        radio:'1',
        itemNum:0,
        classForm:{
          desc:''
        },
        dataList:[
          {type:'2',time: '2014-07-28',name:'《新概念英语》 1-4册 学生用书','desc':'《新概念英语》（New Concept English）作为享誉全球的最为经典地道的英语教材，以其严密的体系性、严谨的科学性、精湛的实用性、浓郁的趣味性深受英语学习者的青睐。', isAccess: true},
          {type:'2',time: '2012-08-16',name:'《新概念英语语法详解大全》','desc':'本书是专为帮助《新概念英语》的自学者学好语法而编写的。', isAccess: true},
          {type:'1',time: '2016-04-06',name:'考研背单词及重点阅读总汇','desc':'《考研背单词及重点阅读总汇》通过根认识字，提供了超过6000个丰富的英语单词在测试卷的读字真人发音，《考研背单词及重点阅读总汇》集中整理关键词的阅读理解。',isAccess: true},
          {type:'1',time: '2014-09-14',name:'《中华经典藏书(套装共50册)》','desc':'《中华经典藏书(套装共50册)》包含：“四书五经”、诸子百家，经典的价值和魅力在流光岁影里永不褪色，先贤圣哲的智慧光芒照耀着我们的现代生活。为在古代经典与现代经验间架起一座沟通的桥梁，中华书局推出“中华经典藏书”丛书。', isAccess: true},
          {type:'1',time: '2014-09-14',name:'《针灸图谱》-清晰PDF彩图+挂板大图','desc':'本图谱以国家技术监督局颁布的国家标准《经穴部位》为依据，收录经穴361个，经外奇穴48个。在编写形式上采用实体照片定位表现的方法，文字部分中英对照，形象直观，图文并茂，易学易用。', isAccess: false},
          {type:'2',time: '2016-06-15',name:'《膏药方集》扫描','desc':'中医外科膏药是运用中药归经原则，运用药物互相协调为用的效能，组成多味药物的大复方，以发挥药物的良好效果，由于膏药用于肌表薄贴，所以膏药中取气味具厚的药物，并加以引药率领群药，开结行滞直达病所，因此可透入皮肤产生消炎，止痛，活血化淤，通经走络，开窍透骨，祛风散寒等。', isAccess: false},
          {type:'2',time: '2013-09-28',name:'《古方妙用》','desc':'中医是指中国传统医学，是研究人体生理、病理，以及疾病的诊断和防治等的一门学科，它承载着中国古代人民同疾病作斗争的经验和理论知识，', isAccess: true},
          {type:'2',time: '2014-12-04',name:'《完全自杀手册》','desc':'《完全自杀手册》主要介绍药物、上吊、跳楼、割腕与刎颈、撞车、瓦斯中毒、触电、投水（投河、投海）、自焚、冻死及其他自杀方法如饿死、被动物咬死或以其他物理形式致死方法。', isAccess: true},
          {type:'2',time: '22016-08-18',name:'《人类之谜》扫描版','desc':'《人类之谜》介绍了人类起源、特异人种、迷离两性、扑朔孪生、奇妙节律、多重人格、五觉通感、记忆绝伦、视力超常、怪异睡眠、离奇梦幻、人体电磁、心灵感应、意念魔力、经络悬谜、气功奥秘、长生不老、死亡再生等内容，本书《人类之谜》的资料翔实、内容丰富，是了解人类起源的一本极佳参考书，值得一读。', isAccess: false},
          {type:'2',time: '2016-06-15',name:'《高峰实战武功》','desc':'武术，打拳和使用兵器的技术，是中国传统的体育项目，武术又称国术或武艺，中国传统体育项目，其内容是把踢、打、摔、拿、跌、击、劈、刺等动作按照一定规律组成徒手的和器械的各种攻防格斗功夫、套路和单势练习。', isAccess: true}
        ],
      }
		},
      computed:{

      },
		mounted() {


		},
		methods: {
      // handleClose() {
      //   this.dialogVisible=false
      //   this.$message({
      //     message: '互动课程添加成功',
      //     type: 'success'
      //   });
      // },
      handleClose() {
        this.dialogVisible=false
        this.$message({
          message: '审核完成',
          type: 'success'
        });
        this.dataList[this.itemNum].isAccess=true
      },
    }
	}
</script>
<style lang="less">
.collegesmant{
  //width:100%;
  display: block;
  padding:20px 0 20px 0;
  margin:100px 60px;
  background: #ffffff;
  .collegesmant-cont{
    min-height:300px;
    display: block;
    .sechinput{
      display: flex;
      padding:20px 20px;
      width:100%;
      text-align: right;
      justify-content: flex-end;
      .el-input{
        display: block;
        width:30%;
        float:right;
      }
      .el-button{
        float:right;
        margin:0 10px;
        background: #3621fb;
        .el-icon-search{
          color: #ffffff;
        }
        span{
          color: #ffffff;
        }
      }
    }
    ul{
      padding:0 20px;
      li{
        width:48%;
        margin:0 2% 2% 0;
        display: inline-block;
        align-items: center;
        justify-content: center;
        border:1px solid #e3e3e3;
        padding:15px;
        &.active{
          .top .el-button{
            background: #e3e3e3;
            span{
              color:#B3B3B3;
            }
            &:hover{
              background: #e3e3e3;
              span{
                color:#B3B3B3;
              }
            }
          }
        }
        &:hover{
          border-color:#3621fb;
          box-shadow: 0 18px 30px rgba(54,33,251,.09);
        }
        &:nth-child(2n){
          margin-right:0;
        }
        .top{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom:6px;
          line-height: 30px;
          .title{
            font-weight: normal;
            font-size:16px;
            cursor: pointer;
          }
          .el-button{
            padding:0 10px;
            line-height:22px;
            height:auto;
            span{
              color: #3621fb;
              font-size:12px;
            }
            &:hover{
              background: #3621fb;
              span{
                color: #ffffff;
              }
            }
            &:focus{
              background: #3621fb;
              span{
                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }
}

</style>
