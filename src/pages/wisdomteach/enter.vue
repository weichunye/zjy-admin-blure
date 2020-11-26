
<template>
	<div class="enter warp-conetnt">
    <el-container>
      <el-header><Header   :activeName="'ls'"/></el-header>
      <el-container>
        <el-aside width="200px"><Left  :activeName="'ls'"/></el-aside>
        <el-main>
          <div class="course-main">
            <div class="title">
                <h2>互动课程</h2>
              <el-button type="primary" class="right-bottom" plain><router-link  :to="{path:'/addcourse',query:{id:'3', type: '新增'}}" >新建互动课程</router-link></el-button>
            </div>
            <ul class="course-ul"><router-link  :to="{path:'/classdetaila',query:{id:'2', type: '新增'}}" >
              <li v-for="item of dataList">
                <span class="img">
                  <!-- <img src="../../assets/img/pic.jpg"/> -->
                  <img :src="item.img"/>
                </span>
                <div class="right-text">
                  <h3><i>课程标题</i>{{item.name}}</h3>
                  <span class="span">学时:{{item.time}}学时</span>
                  <p class="desc">
                    {{item.desc}}
                  </p>
                </div>
              </li>
              <!-- <li>
                <span class="img">
                  <img src="../../assets/img/pic.jpg"/>
                </span>
                <div class="right-text">
                  <h3><i>课程标题</i>第一节课程，课程数学</h3>
                  <span class="span">学时:20学时</span>
                  <p>
                    第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍
                  </p>
                </div>
              </li>
              <li>
                <span class="img">
                  <img src="../../assets/img/pic.jpg"/>
                </span>
                <div class="right-text">
                  <h3><i>课程标题</i>第一节课程，课程数学</h3>
                  <span class="span">学时:20学时</span>
                  <p>
                    第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍第一节课程文字介绍
                  </p>
                </div>
              </li> -->
            </router-link>
            </ul>
            <el-pagination class="pagination-fy"
              background
              layout="prev, pager, next"
              :total="1000">
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
		name: 'Enter',
		components: {
      Header,
      Left,
		},
		data() {
			return {
        dataList:[
          {name:'操作技能-临床急救技能操作',desc:"涵盖了临床医生（医学生）需掌握的临床急救基本操作技能。以视频示教为特色，模拟教学为工具，医学人文和医疗安全贯穿始终，各操作过程均配有规范的视频，对临床操作的重点、难点配图像详细标识，操作视频清晰，有分解动作、慢动作解析和规范化的演示。",time:'30',img:'http://img.pmphmooc.com//data/jpg//mooc_course/cover_img/2020/10/23/732550f0-ccf6-41b6-98dd-0cd243fc4137.jpg'},
          {name:'药用植物学',desc:"本课程的目的是使学生在学习药用植物学后，掌握植物细胞、组织、器官的形态、显微特征及实验技能，熟练地运用分类学的原则、原理，识别和鉴别药用植物；初步掌握植物化学成分及其与植物亲缘关系的规律、药用植物与环境的相关性、药用植物资源研究的基本理论和技能，了解药用植物学的最新研究成果和进展。",time:'30',img:'http://img.pmphmooc.com//data/jpg/1454/2018/03/30/ca9292f8-4faf-4323-ba63-2673cb2010a9.jpg'},
          {name:'大学生劳动就业法律问题解读',desc:"大学生在就业过程中将要面临的一系列法律问题，而了解和掌握劳动法的一般原理和基本知识，以及劳动就业中常见的劳动法律问题，不仅对就业有直接的帮助，而且对大学生依法维护自身合法权益都具有重要的意义。",time:'30',img:'http://edu-image.nosdn.127.net/ECE7D58D0A3B2F568B8385CC81669BD2.png?imageView&thumbnail=426y240&quality=100'},
          {name:'心动之旅|心血管影像诊断实战集训营',desc:"本课程根据教育部颁布的临床医学专业的培养标准，由教育部评审的国家级实验示范中心联席会议临床学组组织，由中山大学医学院及其附属医院的高年资临床一线医师撰写脚本和演示拍摄，全面系统地将实用的临床操作技能规范展示给医护人员，又兼顾住院医师规范化培养的需要，有利于提高医学生的培养水平。",time:'30',img:'http://img.pmphmooc.com//data/png//mooc_course/cover_img/2020/10/22/52a89f1c-dc28-4a71-a91d-ef06e6b2d730.png'},
          {name:'医务人员赴外交流英语培训项目',desc:"本培训旨在培养我国高层次医务人员出国后的英语综合应用能力，特别是医学英语听说能力，使其在国外工作与交流中能用英语有效地获取信息并就本专业话题进行口头交流，适应英语环境下的工作与生活，同时增强其自主学习能力，提高综合文化和专业素养。",time:'30',img:'http://img.pmphmooc.com//data/png//mooc_course/cover_img/2020/06/15/79bc53a0-a57e-48ed-ad7b-85f5e71c9ea9.png'},
          {name:'内科基本操作技能',desc:"本课程共包括16个视频，时长102分钟。涵盖了临床医生（医学生）需掌握的内科基本操作技术。",time:'30',img:'http://img.pmphmooc.com//data/jpg//mooc_course/cover_img/2020/10/16/15d7668a-eb2d-4bc5-b594-b5e913600d21.jpg'},
          {name:'外科基本操作技能',desc:"以视频示教为特色，模拟教学为工具，医学人文和医疗安全贯穿始终，各操作过程均配有规范的视频，对临床操作的重点、难点配图像详细标识，操作视频清晰，有分解动作、慢动作解析和规范化的演示。",time:'30',img:'http://img.pmphmooc.com//data/jpg//mooc_course/cover_img/2020/10/20/c649a528-5f5d-406d-8d8e-195785e69c6b.jpg'},
          {name:'儿童口腔医学',desc:"儿童口腔医学是一门理论与实践紧密结合的学科。为了能更好地掌握所学知识并取得优异成绩，学员观看教学视频的同时需阅读规划和参考教材，并进行相应的实践操作。",time:'30',img:'http://img.pmphmooc.com//data/jpg/1372/2018/03/02/cb6a86b3-885e-47e4-9337-eceeac3a9d1b.jpg'},
        ],
      }
		},
      computed:{

      },
	  created(){
	        	this.getParams()
	      },
		mounted() {


		},
    filters:{
      reBytesStr: function(str) {
        str=str.replace(/<\/?.+?>/g,"").replace(/ /g,"").replace(/&(\S*)?;/g,"")
        if((!str && typeof(str) != 'undefined')) {
          return '';
        }
        var num = 0;
        var str1 = str;
        var str = '';
        for(var i = 0, lens = str1.length; i < lens; i++) {
          num += ((str1.charCodeAt(i) > 255) ? 2 : 1);
          if(num > 108) {
            break;
          } else {
            str = str1.substring(0, i + 1);
          }
        }
        if(num>108){
          return str+"……";
        }else{
          return str
        }
      }
    },
	methods: {
      handleClick() {
        var _this=this
        _this.$router.push({path:"/coursepage"})
      },
	  getParams(){
			// 取到路由带过来的参数
			const routerParams = this.$route.query.classForm
			console.log(routerParams)
			// 将数据放在当前组件的数据内
			if (routerParams != null && routerParams !=undefined && routerParams != {}) {
				this.dataList.push(routerParams)
			}
		}
    }
}
</script>
<style lang="less">
  .warp-conetnt{
    margin:0 auto;
    display: block;
    min-width:1100px;
    overflow: auto;
  }
	.enter {
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
        .course-ul{
          display: block;
          width:100%;
          min-height:200px;
          a{
            display: block;
          }
          li{
            padding:15px 10px;
            border-bottom:1px solid #eeeeee;
            //border-radius: 16px;
            display: flex;
            align-items: center;
            //justify-content: center;
            cursor: pointer;
            .img{
              width:200px;
              height:120px;
              img{
                width:100%;
                height:100%;
                border-radius: 16px;
                display: block;
              }
            }
            .right-text{
              width:78%;
              padding-left:3%;
              display: inline-block;
              h3{
                font-size:14px;
                line-height: 24px;
                display: block;
                width:100%;
                margin-bottom:10px;
                color: #1a1a1a;
                font-weight: normal;
                i{
                  height:22px;
                  line-height: 22px;
                  color: #ffffff;
                  background:#409EFF ;
                  padding:0 10px;
                  display: inline-block;
                  margin-right:10px;
                  font-weight: normal;
                  font-style: normal;
                  font-size:14px;
                }
              }
              .span{
                color: #6f7882;
                line-height:20px;
                display: block;
                width:100%;
              }
              p{
                display: block;
                width:100%;
                height:40px;
                line-height: 20px;
                color: #2b3b4e;
                margin-top:5px;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }

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
