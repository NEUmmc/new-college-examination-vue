import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import buttonHome from '@/components/buttonHome'
// 自主招生模块
import main from '@/components/independentRecruitment/Main'
import home from '@/components/independentRecruitment/home'
import universityRecommend from '@/components/independentRecruitment/universityRecommend/universityRecommend'
import competitionsPlanning from '@/components/independentRecruitment/competitionsPlanning/competitionsPlanning'
import independentRecruitmentPolicy from '@/components/independentRecruitment/independentRecruitmentPolicy/independentRecruitmentPolicy'
import comprehensiveAssessment from '@/components/independentRecruitment/comprehensiveAssessment/comprehensiveAssessment'
import firstInterview from '@/components/independentRecruitment/firstInterview/firstInterview'
import lastInterview from '@/components/independentRecruitment/lastInterview/lastInterview'
// 其他模块
import checkScores from '@/components/checkScores/checkScores'
import eliteSchool from '@/components/eliteSchool/eliteSchool'
import enrollmentGuide from '@/components/enrollmentGuide/enrollmentGuide'
import majorExplanation from '@/components/majorExplanation/majorExplanation'
import majors from '@/components/majorExplanation/majors'
import policy from '@/components/policy/policy'
import professionTest from '@/components/professionTest/professionTest'
import voluntaryReporting from '@/components/voluntaryReporting/voluntaryReporting'

Vue.use(Router)

export default new Router({
  routes: [
    // login
    {
      path: '/',
      name: 'buttonHome',
      component: buttonHome
    }
    , 
    // buttonHome
    {
      path: '/buttonHome',
      name: 'buttonHome',
      component: buttonHome
    }
    // 自主招生
    , {
      path: '/buttonHome/independentRecruitment/main',
      name: 'main',
      component: main,
      children: [
        // {
        //   path: 'home',
        //   title: '首页',
        //   name: 'home',
        //   component: home
        // },
        {
          path: 'universityRecommend',
          title: '智能院校推荐',
          name: 'universityRecommend',
          component: universityRecommend
        },
        {
          path: 'competitionsPlanning',
          title: '量身赛事规划',
          name: 'competitionsPlanning',
          component: competitionsPlanning
        },
        {
          path: 'independentRecruitmentPolicy',
          title: '自招政策解读',
          name: 'independentRecruitmentPolicy',
          component: independentRecruitmentPolicy
        },
        {
          path: 'firstInterview',
          title: '初审通关秘笈',
          name: 'firstInterview',
          component: firstInterview
        },
        {
          path: 'lastInterview',
          title: '复试高分宝典',
          name: 'lastInterview',
          component: lastInterview
        },
        {
          path: 'comprehensiveAssessment',
          title: '综合评价录取',
          name: 'comprehensiveAssessment',
          component: comprehensiveAssessment
        }
      ]
    }
    // 政策解读
    , {
      path: '/buttonHome/policy',
      name: 'policy',
      component: policy
    }
    // 专业详解
    , {
      path: '/buttonHome/majorExplanation',
      name: 'majorExplanation',
      component: majorExplanation,
    }
    // 专业大类
    , {
      path: '/buttonHome/majorExplanation/majors',
      name: 'majors',
      component: majors
    },
    // 招生简章
    , {
      path: '/buttonHome/enrollmentGuide',
      name: 'enrollmentGuide',
      component: enrollmentGuide
    }
    // 名校直通车
    , {
      path: '/buttonHome/eliteSchool',
      name: 'eliteSchool',
      component: eliteSchool
    }
    // 志愿填报查询
    , {
      path: '/buttonHome/voluntaryReporting',
      name: 'voluntaryReporting',
      component: voluntaryReporting
    }
    // 职业测试
    , {
      path: '/buttonHome/professionTest',
      name: 'professionTest',
      component: professionTest
    }
    // 查看成绩
    , {
      path: '/buttonHome/checkScores',
      name: 'checkScores',
      component: checkScores
    }

  ]
})
