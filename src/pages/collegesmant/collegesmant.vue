
<template>
  <div class="collegesmant">
    <el-container>
    <el-header><Header :activeName="'yx'"/></el-header>
    <div class="collegesmant-cont">
      <el-aside width="200px"><Left :activeName="'yx'"/></el-aside>
      <div class="sechinput">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <ul>
        <li>
          <div class="top">
            <h4 class="title">这里是资源标题这里是资源标题</h4>
            <div class="right">
              <el-button type="primary" class="right-bottom" plain @click="dialogVisible = true" >审核</el-button>
              <el-button type="primary" class="right-bottom" plain>上传</el-button>
            </div>
          </div>
          <span>这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述</span>
        </li>
        <li class="active">
          <div class="top">
            <h4 class="title">这里是资源标题这里是资源标题</h4>
            <div class="right">
              <el-button type="info" class="right-bottom" plain @click="dialogVisible = true" disabled>审核</el-button>
              <el-button type="info" class="right-bottom" plain disabled>上传</el-button>
            </div>
          </div>
          <span>这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述这里是资源描述</span>
        </li>
      </ul>
      <el-dialog
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
