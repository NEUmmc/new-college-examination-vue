import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


const state = {
  serviceURL:"http://127.0.0.1:8085"
  ,
  // 自主招生
  todos: [{
      id: 1,
      text: '.....',
      done: true
    },
    {
      id: 2,
      text: '...',
      done: false
    }
  ],
  count: 1,
  current_page_name: 'independentRecruitmentPolicy',
  pageOpenedList: [{
    // title: "首页",
    // path: "/independentRecruitment/main/home",
    // name: "/independentRecruitment/main/home"
    title: '自招政策解读',
    path: '/independentRecruitment/main/independentRecruitmentPolicy',
    name: 'independentRecruitmentPolicy'
  }],
  menuList: [{
      icon: 'university',
      title: '智能院校推荐',
      name: 'universityRecommend',
      children: [{
        icon: 'pound',
        name: 'universityRecommend',
        path: '/independentRecruitment/main/universityRecommend',
        title: '智能院校推荐'
      }]
    },
    {
      icon: 'ios-people',
      title: '量身赛事规划',
      name: 'competitionsPlanning',
      children: [{
        icon: 'compose',
        name: 'competitionsPlanning',
        path: '/independentRecruitment/main/competitionsPlanning',
        title: '量身赛事规划'
      }]
    },
    // {
    //   icon: 'document-text',
    //   title: '自招政策解读',
    //   name: 'independentRecruitmentPolicy',
    //   children: [{
    //     icon: 'compose',
    //     name: 'independentRecruitmentPolicy',
    //     path: '/independentRecruitment/main/independentRecruitmentPolicy',
    //     title: '自招政策解读'
    //   }]
    // },
    {
      icon: 'ios-paper',
      title: '初审通关秘笈',
      name: 'firstInterview',
      children: [{
        icon: 'compose',
        name: 'firstInterview',
        path: '/independentRecruitment/main/firstInterview',
        title: '初审通关秘笈'
      }]
    },
    {
      icon: 'ios-paper-outline',
      title: '复审高分宝典',
      name: 'lastInterview',
      children: [{
        icon: 'compose',
        name: 'lastInterview',
        path: '/independentRecruitment/main/lastInterview',
        title: '复审高分宝典'
      }]
    },
    {
      icon: 'checkmark-round',
      title: '综合评价录取',
      name: 'comprehensiveAssessment',
      children: [{
        icon: 'compose',
        name: 'comprehensiveAssessment',
        path: '/independentRecruitment/main/comprehensiveAssessment',
        title: '综合评价录取'
      }]
    }
  ],

};

const getters = { //实时监听state值的变化(最新状态)
  getCount() { //方法名随意,主要是用来承载变化的changableNum的值
    return state.count
  }
};

// mutations里面的方法 都是同步事务
const mutations = {
  setMenuList(state, menuList) {
    state.menuList = menuList;
  },
  pageOpenedList(state, pageOpenedList) {
    state.pageOpenedList = pageOpenedList;
  },
  current_page_name(state, current_page_name) {
    state.current_page_name = current_page_name;
  },
  count(state, count) {
    state.count = count;
  }
};

const actions = {
  // hideFooter(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
  //     context.commit('hide');
  // },
  getEnrollmentGuide(context){
    console.log("kjabsckjanskn")
    axios({
      method: 'post',
      url: context.state.serviceURL+'/getEnrollmentGuide'
    }).then(function(res){
      console.log(res)
      console.log("res.data.title: "+res.data.title)
    })
    .catch(function(err){
      console.log("getEnrollmentGuide有点小问题")
    })
  }


};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
export default store;
