
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
              <el-button type="primary" class="right-bottom" plain><router-link  :to="{path:'/addcourse',query:{id:'3'}}" >新建互动课程</router-link></el-button>
            </div>
            <ul class="course-ul"><router-link  :to="{path:'/classdetaila',query:{id:'2'}}" >
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
              </li>
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
			return {}
		},
      computed:{

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
                overflow: hidden;
                color: #2b3b4e;
                margin-top:5px;
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
