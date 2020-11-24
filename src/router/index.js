import Vue from 'vue'
import Router from 'vue-router'
import Enter from '@/pages/wisdomteach/enter'
import Addcourse from '@/pages/wisdomteach/addcourse'
import ClassDetaila from '@/pages/wisdomteach/classdetaila'
import Addclassroom from '@/pages/wisdomteach/addclassroom'
import Resources from '@/pages/wisdomteach/resources'
import Respage from '@/pages/wisdomteach/respage'
import Collegesmant from '@/pages/collegesmant/collegesmant'
import Platformmant from '@/pages/platformmant/platformmant'
import Login from '@/pages/login'
//学生
import Mycourse from '@/pages/students/course'
import ClassDetailaS from '@/pages/students/classdetaila'
import ResourcesS from '@/pages/students/resources'
import RespageS from '@/pages/students/respage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/enter',
      name: 'Enter',
      meta:{title:'首页'},
      component: Enter
    },
    {
      path: '/my-course',
      name: 'Mycourse',
      meta:{title:'我的课程'},
      component: Mycourse
    },
    {
      path: '/',
      name: 'login',
      meta:{title:'登录'},
      component: Login
    },
    {
      path: '/addcourse',
      name: 'Addcourse',
      meta:{title:'新建互动课程'},
      component: Addcourse
    },
    {
      path: '/classdetaila',
      name: 'ClassDetaila',
      meta:{title:'课程详情'},
      component: ClassDetaila
    },
    {
      path: '/classdetaila-s',
      name: 'ClassDetailaS',
      meta:{title:'课程详情-学生'},
      component: ClassDetailaS
    },
    {
      path: '/addclassroom',
      name: 'Addclassroom',
      meta:{title:'课堂互动'},
      component: Addclassroom
    },
    {
      path: '/collegesmant',
      name: 'Collegesmant',
      meta:{title:'院校管理资源'},
      component: Collegesmant
    },
    {
      path: '/platformmant',
      name: 'Platformmant',
      meta:{title:'平台管理资源'},
      component: Platformmant
    },
    {
      path: '/resources',
      name: 'Resources',
      meta:{title:'资源中心'},
      component: Resources
    },
    {
      path: '/resources-s',
      name: 'ResourcesS',
      meta:{title:'资源中心'},
      component: ResourcesS
    },
    {
      path: '/respage',
      name: 'Respage',
      meta:{title:'资源预览'},
      component: Respage
    },
    {
      path: '/respage-s',
      name: 'RespageS',
      meta:{title:'资源预览-学生'},
      component: RespageS
    },
  ]
})
