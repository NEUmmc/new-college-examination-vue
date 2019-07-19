<template>
    <div class="font">
        <!-- 专业选择指导<div class="breadcrumb"><Breadcrumb separator=">"><Breadcrumb-item class="font" href="/buttonHome"><Icon type="ios-home-outline"></Icon>首页</Breadcrumb-item><Breadcrumb-item><Icon type="ios-search"></Icon>专业选择指导</Breadcrumb-item></Breadcrumb></div> -->
        <br>
        <h1 class="h-AJK">专业指导</h1>
        <br>
        
        <div class="tabs-style">
            <Tabs type="card" name="name1">
                <TabPane label="按分数查询" icon="md-school" name="name1">
                    <Row>
                        <Col span="3">
                            <al-selector
                                style="width:9rem"
                                :not-found-text="['无此省']"
                                level="0"
                                v-model="sNotFound"
                                data-type="name"
                                @on-change="change"
                            />
                        </Col>
                        <Col span="1" style="font-size:1.25rem;color:white">科类 ></Col>
                        <Col span="3" style="font-size:1.25rem;">
                            <RadioGroup v-model="artsAndSciences" type="button" size="large">
                                <Radio label="理科"></Radio>
                                <Radio label="文科"></Radio>
                            </RadioGroup>
                        </Col>
                        <Col span="5" style="font-size:1.25rem;color:white">
                            <!-- <Input placeholder="请输入分数..." v-model="score"></Input> -->
                            点击预测查看结果(成绩采用近三次录入结果)
                        </Col>
                        <Col span="3" style="font-size:1.25rem;">
                            &nbsp;
                            <Button class="button" icon="ios-search" @click="scorePredict">预测</Button>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane label="新高考志愿填报指导" icon="md-school" name="name2">
                    <Row>
                        <Col span="3">
                            <al-selector
                                style="width:9rem"
                                :not-found-text="['无此省']"
                                level="0"
                                v-model="sNotFound"
                                data-type="name"
                                @on-change="change"
                            />
                        </Col>
                        
                        <Col span="3" style="font-size:1.25rem;">
                            <Input placeholder="请输入位次..."></Input>
                        </Col>
                        <Col span="3" style="font-size:1.25rem;">
                            &nbsp;
                            <Button class="button" icon="ios-search" @click="positionPredict">预测</Button>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
        <br>
        <div>
            
                <div class="more-search">
                    <span class="title">录取概率 ></span>
                    <span class="span" v-for="(c1,index) in choice1" @click="handleClick1(index,c1)":class="{'spanActive':current1===index}">
                        {{c1}}&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
                <br>
                <div class="more-search">
                    <span class="title">目标省份 ></span>
                    <span class="span" v-for="(c2,index) in choice2" v-model="province" @click="handleClick2(index,c2)":class="{'spanActive':current2===index}">
                        {{c2}}&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
                <br>
                <div class="more-search">
                    <span class="title">高校层次 ></span>
                    <span class="span" v-for="(c3,index) in choice3" @click="handleClick3(index)":class="{'spanActive':current3===index}">
                        {{c3}}&nbsp;&nbsp;&nbsp;
                    </span>
                </div>
                <br>
                <!-- 暂时不要的功能 -->
                <!-- <div class="more-search">
                    <span class="title">录取批次 ></span>
                    <span v-for="(c4,index) in choice4" @click="handleClick4(index)":class="{'spanActive':current4===index}">
                        {{c4}}&nbsp;&nbsp;&nbsp;
                    </span>
                    
                </div> -->
            
        </div>

        <div id="resultDiv" hidden="hidden">
            <Table border :columns="columns" :data="sccessUniversity"></Table>
        </div>

        <div id="PDiv" hidden="hidden">
            <Table border :columns="columns" :data="PsccessUniversity"></Table>
        </div>


        <div>
            <Button class="back-button" type="text" @click="backToButtonHome">
                <Icon type="android-arrow-back" size="32" color="#fff"></Icon>
            </Button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current1: 0,
            current2: 0,
            current3: 0,
            current4: 0,
            choice1:["全部","冲刺","稳妥","保底"],
            choice2:[
                    "全部",
                    "北京",
                    "辽宁",
                    "河南",
                    "河北",
                    "天津",
                    "山东",
                    "山西",
                    "陕西",
                    "内蒙古",
                    "吉林",
                    "黑龙江",
                    "上海",
                    "江苏",
                    "安徽",
                    "江西",
                    "湖北",
                    "湖南",
                    "重庆",
                    "四川",
                    "贵州",
                    "云南",
                    "广东",
                    "广西",
                    "福建",
                    "甘肃",
                    "宁夏",
                    "新疆",
                    "西藏",
                    "海南",
                    "浙江",
                    "青海",
                ],
            choice3:["全部","985工程","211工程","","一流大学建设高校","一流学科建设高校","教育部直属","中央部委","自主招生试点"],
            choice4:["全部","本科提前批","本科批","地方专项计划本科批","专科提前批","专科批"],
            columns:[
                {
                    title: '学校名称',
                    key: 'name',
                },
                {
                    title: '所在省份',
                    key: 'province'
                },
                {
                    title: '2018年最高分数',
                    key: 'highScore'
                },
                {
                    title: '2018年最低分数',
                    key: 'lowScore'
                },
                {
                    title: '录取批次',
                    key: 'degree'
                },
                {
                    title: '知名专业',
                    key: 'major'
                },
            ],
            universities:[
                {
                    name: "清华大学",
                    province:"北京",
                    degree:"本科批",
                    major: "土木工程，计算机科学与技术，软件工程",
                    highScore: 650,
                    lowScore: 600,
                },
                {
                    name: "北京大学",
                    province:"北京",
                    degree:"本科批",
                    major: "土木工程，计算机科学与技术，软件工程",
                    highScore: 660,
                    lowScore: 620,
                },
                {
                    name: "东北大学",
                    province:"辽宁",
                    degree:"本科批",
                    major: "自动化，计算机科学与技术，软件工程",
                    highScore: 600,
                    lowScore: 550,
                },
                {
                    name: "大连理工大学",
                    province:"辽宁",
                    degree:"本科批",
                    major: "水产养殖，计算机科学与技术，软件工程",
                    highScore: 610,
                    lowScore: 580,
                },
                {
                    name: "华北电力大学",
                    province:"北京",
                    degree:"本科批",
                    major: "机械自动化，电气自动化，软件工程",
                    highScore: 540,
                    lowScore: 522,
                },
                {
                    name: "天津大学",
                    province:"天津",
                    degree:"本科批",
                    major: "经济管理，电气自动化，软件工程",
                    highScore: 630,
                    lowScore: 590,
                },
                {
                    name: "郑州大学",
                    province:"河南",
                    degree:"本科批",
                    major: "土木工程，计算机科学与技术，软件工程",
                    highScore: 550,
                    lowScore: 500,
                }
                ],
            artsAndSciences: "sciences",
            score: 650,
            position:"",
            sccessUniversity: [],
            PsccessUniversity: [],
        };
    },
    methods: {
        handleClick1(index,c1){
            this.current1 = index
            let probability = c1;
            console.log(probability)
            let successMatch = [];
            if(probability == "全部"){
                for (let i = 0; i < this.sccessUniversity.length; i += 1) {
                const name = this.sccessUniversity[i].name;
                const province = this.sccessUniversity[i].province;
                const degree = this.sccessUniversity[i].degree;
                const major = this.sccessUniversity[i].major;
                const highScore = this.sccessUniversity[i].highScore;
                const lowScore = this.sccessUniversity[i].lowScore;                                    
                    
                        successMatch.push({
                            name: name,
                            province: province,
                            degree: degree,
                            major: major,
                            highScore: highScore,
                            lowScore: lowScore,    
                        });
                }
            }else if(probability == "冲刺"){

            }else if(probability == "稳妥"){

            }else{
                
            }
            
        },
        handleClick2(index,c2){
            this.current2 = index
            let Cprovince = c2;
            console.log(Cprovince)
            let successMatch = [];
            if(Cprovince == "全部"){
                for (let i = 0; i < this.sccessUniversity.length; i += 1) {
                const name = this.sccessUniversity[i].name;
                const province = this.sccessUniversity[i].province;
                const degree = this.sccessUniversity[i].degree;
                const major = this.sccessUniversity[i].major;
                const highScore = this.sccessUniversity[i].highScore;
                const lowScore = this.sccessUniversity[i].lowScore;                                    
                    
                        successMatch.push({
                            name: name,
                            province: province,
                            degree: degree,
                            major: major,
                            highScore: highScore,
                            lowScore: lowScore,    
                        });
                }    
            }else{
            for (let i = 0; i < this.sccessUniversity.length; i += 1) {
                const name = this.sccessUniversity[i].name;
                const province = this.sccessUniversity[i].province;
                const degree = this.sccessUniversity[i].degree;
                const major = this.sccessUniversity[i].major;
                const highScore = this.sccessUniversity[i].highScore;
                const lowScore = this.sccessUniversity[i].lowScore;                                    
                    if (Cprovince == province) {
                        successMatch.push({
                            name: name,
                            province: province,
                            degree: degree,
                            major: major,
                            highScore: highScore,
                            lowScore: lowScore,    
                        });
                    }
                }
            }    
            this.PsccessUniversity = successMatch;
            document.getElementById("resultDiv").hidden = "hidden";
            document.getElementById("PDiv").hidden = null;
        },
        handleClick3(index){
            this.current3 = index
        },
        handleClick4(index){
            this.current4 = index
        },
        backToButtonHome() {
            this.$router.push({
                path: "/buttonHome"
            });
        },
        
        // positionPredict() {
        //     let position = this.position;
        //     let successMatch = [];
        //     //要推荐专业时，数据库专业对应的分数为一个lst，嵌套for
        //     if (position == ""){
        //         this.$Message.warning("请先输入位次");
        //     }else{
        //         this.$Notice.open({
        //         title: "推荐规则",
        //         desc:
        //             "1、本系统数据均由高校提供，具备参考价值；\n" +
        //             "2、考生输入分数，系统将根据在当省招生的高校录取情况，推荐合适的高校\n" +
        //             "3、本系统推荐的院校名单，仅供志愿参考。",
        //         duration: 6
        //     });
        //         for (let i = 0; i < this.universities.length; i += 1) {
        //             const name = this.universities[i].name;
        //             const province = this.universities[i].province;
        //             const degree = this.universities[i].degree;
        //             const major = this.universities[i].major;
        //             const highScore = this.universities[i].highScore;
        //             const lowScore = this.universities[i].lowScore;
                                        
        //                 if (lowScore <= score) {
        //                     successMatch.push({
        //                         name: name,
        //                         province: province,
        //                         degree: degree,
        //                         major: major,
        //                         highScore: highScore,
        //                         lowScore: lowScore,    
        //                     });
        //                 }
        //             }
                
        //         this.sccessUniversity = successMatch;
        //         document.getElementById("resultDiv").hidden = null;
        //         document.getElementById("PDiv").hidden = "hidden";
        //         }
        //     } 
        // },
        scorePredict() {
            let score = this.score;
            let successMatch = [];
            //要推荐专业时，数据库专业对应的分数为一个lst，嵌套for
            if (score == ""){
                this.$Message.warning("请先输入分数");
            }else{
                this.$Notice.open({
                title: "推荐规则",
                desc:
                    "1、本系统数据均由高校提供，具备参考价值；\n" +
                    "2、考生输入分数，系统将根据在当省招生的高校录取情况，推荐合适的高校\n" +
                    "3、本系统推荐的院校名单，仅供志愿参考。",
                duration: 6
            });
                for (let i = 0; i < this.universities.length; i += 1) {
                    const name = this.universities[i].name;
                    const province = this.universities[i].province;
                    const degree = this.universities[i].degree;
                    const major = this.universities[i].major;
                    const highScore = this.universities[i].highScore;
                    const lowScore = this.universities[i].lowScore;
                                        
                        if (lowScore <= score) {
                            successMatch.push({
                                name: name,
                                province: province,
                                degree: degree,
                                major: major,
                                highScore: highScore,
                                lowScore: lowScore,    
                            });
                        }
                    }
                
                this.sccessUniversity = successMatch;
                document.getElementById("resultDiv").hidden = null;
                document.getElementById("PDiv").hidden = "hidden";
                }
            } 
        }   
    };
</script>

<style scoped>
.button{
    border-radius: 0.3rem;
    width: 5rem;
    height: 2rem;
    font-size: .7rem;
    background-color:rgb(233, 175, 17);
    border: none;
    color: white;
}
.h-AJK{
  font-size: 2.5rem;
}
.center{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.span{
    font-size: 1rem;
}
.spanActive{
    color: wheat;
    font-size: 1.1rem;
}
.back-button {
    position: fixed;
    bottom: 2rem;
}
.breadcrumb {
    padding: 0.65rem;
    background-color: aliceblue;
}
.font {
    color: aliceblue;
}
.title::before {
    content: "";
    width: 0.3125rem;
    height: 1rem;
    display: inline-block;
    margin-right: 0.625rem;
    border-radius: 0.25rem;
    background-color: #0d9ae6;
    vertical-align: -0.125rem;
}
.title {
    font-size: 0.9rem;
}
.tabs-style > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    border-radius: 0;
    background: #fff;
}
.tabs-style > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    border-top: 1px solid #3399ff;
}
.tabs-style
    > .ivu-tabs.ivu-tabs-card
    > .ivu-tabs-bar
    .ivu-tabs-tab-active:before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #3399ff;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
