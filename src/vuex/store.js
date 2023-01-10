import VUE from 'vue'
import VUEX from 'vuex'

VUE.use(VUEX)

const state = {
  isPractice: false, //练习模式标志
  flag: false, //菜单栏左右滑动标志
  userInfo: null,
  menu: [{
      index: '1',
      title: '课程信息管理',
      icon: 'icon-kechengbiao',
      content:[{item1:'课程查询',path:'selectExam'},{item2:'添加课程',path:'/addExam'}],
     },
    // {
    //   index: '2',
    //   title: '题库管理',
    //   icon: 'icon-tiku',
    //   content:[{item1:'所有题库',path:'/selectAnswer'},{item2:'增加题库',path:'/addAnswer'},{path: '/addAnswerChildren'}],
    // },
    // {
    //   index: '3',
    //   title: '成绩查询',
    //   icon: 'icon-performance',
    //   content:[{item1:'学生成绩查询',path:'/allStudentsGrade'},{path: '/grade'},{item2: '成绩分段查询',path: '/selectExamToPart'},{path: '/scorePart'}],
    // },
    // {
    //   index: '4',
    //   title: '实验管理',
    //   icon: 'icon-tiku',
    //   content:[{item1:'发布实验',path:'labPublish'}],
    // },
    {
      index: '4',
      title: '课程资料管理',
      icon: 'icon-performance',
      content:[{item1:'课程资料管理',path:'/studentManage'},{item2: '添加资料',path: '/addStudent'}],
    }


  ],
  sysmenu: [
    {
    index: '1',
    title: '管理课程类型',
    icon: 'icon-kechengbiao',
    content:[{item1:'课程查询',path:'selectcourse'},{item2:'添加课程类型',path:'/addCourseType'}],
  },
    {
      index: '1',
      title: '用户状态管理',
      icon: 'icon-kechengbiao',
      content:[{item1:'用户查询',path:'selectUser'}],
    },

  ],

  leadermenu: [
    {
      index: '1',
      title: '课程信息统计',
      icon: 'icon-kechengbiao',
      content:[{item1:'课程信息统计',path:'/infoCount'}],
    },
    {
      index: '1',
      title: '课程教学视频统计',
      icon: 'icon-kechengbiao',
      content:[{item1:'课程教学视频统计',path:'videoCount'}],
    },

  ],
}
const mutations = {
  practice(state,status) {
    state.isPractice = status
  },
  toggle(state) {
    state.flag = !state.flag
  },
  changeUserInfo(state,info) {
    state.userInfo = info
  }
}
const getters = {

}
const actions = {
  getUserInfo(context,info) {
    context.commit('changeUserInfo',info)
  },
  getPractice(context,status) {
    context.commit('practice',status)
  }
}
export default new VUEX.Store({
  state,
  mutations,
  getters,
  actions,
  // store
})
