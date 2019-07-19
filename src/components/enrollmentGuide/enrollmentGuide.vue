<template>
    <div class="font">
        <!-- <div class="breadcrumb"><Breadcrumb separator=">"><Breadcrumb-item class="font" href="/buttonHome"><Icon type="ios-home-outline"></Icon>首页</Breadcrumb-item><Breadcrumb-item><Icon type="ios-search"></Icon>政策解读</Breadcrumb-item></Breadcrumb></div> -->
        <br>
        <h1 class="h-AJK">&nbsp;&nbsp;&nbsp;招生简章</h1>
        <br>
        <br>

        <div>
            <Button class="back-button" type="text" @click="backToButtonHome">
                <Icon type="android-arrow-back" size="32" color="#fff"></Icon>
            </Button>
        </div>

        <div class="flex-div">
            <div class="selector-div">
                <!-- <al-selector style="width:250px"  level="0" data-type="name" @on-change="change" /> 用on-change也可以实现-->
                <!-- <al-selector style="width:210px;" level="0" @on-change="send" data-type="name" v-model="sname" searchable size="large"/> -->
                <div>
                    <i-input icon="ios-search-strong" placeholder="搜索高校" style="width:14rem"></i-input>
                    <i-button class="font" type="ghost" shape="circle" icon="ios-search"></i-button>
                    <div class="font">
                        <br>省份、学校：
                        <Cascader
                            :data="data1"
                            trigger="hover"
                            placeholder="请选择省份、学校"
                            class="cascader"
                            style="width: 15rem"
                            change-on-select
                        ></Cascader>
                    </div>
                </div>
            </div>

            <div class="card-div">
                <Card :bordered="false" class="PCard">
                    <Row :gutter="64">
                        <Col span="12">
                            <!-- 走马灯 -->
                            <Carousel
                                v-model="value2"
                                :height="setting.height"
                                :autoplay="setting.autoplay"
                                :autoplay-speed="setting.autoplaySpeed"
                                :dots="setting.dots"
                                :radius-dot="setting.radiusDot"
                                :trigger="setting.trigger"
                                :arrow="setting.arrow"
                            >
                                <CarouselItem>
                                    <div
                                        style="display:flex;align-items:center;justify-content:center;"
                                    >
                                        <img
                                            style="width:100%;height:auto;"
                                            src="https://i.loli.net/2019/06/07/5cf9c592dd34463360.jpg"
                                        >
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div
                                        style="display:flex;align-items:center;justify-content:center;"
                                    >
                                        <img
                                            style="width:100%;height:auto;"
                                            src="https://i.loli.net/2019/06/07/5cf9c7fd128b559705.jpg"
                                        >
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div
                                        style="display:flex;align-items:center;justify-content:center;"
                                    >
                                        <img
                                            style="width:100%;height:auto;"
                                            src="https://i.loli.net/2019/06/07/5cf9c8a254f9b45485.jpg"
                                        >
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div
                                        style="display:flex;align-items:center;justify-content:center;"
                                    >
                                        <img
                                            style="width:100%;height:auto;"
                                            src="https://static-data.eol.cn/upload/school/1551166022_6280_thumb.jpg"
                                        >
                                    </div>
                                </CarouselItem>
                            </Carousel>
                        </Col>

                        <Col span="12">
                            <Card :bordered="false" class="Card">
                                <p slot="title" style="font-size:1.25rem">{{title2}}</p>
                                
                                <p>
                                    <a
                                        class="link-a"
                                        @click="guideText"
                                    >l&nbsp;&nbsp;&nbsp;行者恒远丹心随 滋兰树蕙满庭芳——记中国科学院院士、信息科学与工程学院教授张嗣瀛</a>
                                </p>
                                <hr>
                                <p>
                                    <a
                                        class="link-a"
                                        @click="guideText"
                                    >l&nbsp;&nbsp;&nbsp;东北大学四捧全国大学生机器人竞赛Robocon冠军</a>
                                </p>
                                <hr>
                                <p>
                                    <a
                                        class="link-a"
                                        @click="guideText"
                                    >l&nbsp;&nbsp;&nbsp;辽宁省《人工智能导论》教学研讨活动在东北大学举行</a>
                                </p>
                                 <hr>
                                <p>
                                    <a
                                        class="link-a"
                                        @click="guideText"
                                    >l&nbsp;&nbsp;&nbsp;东北大学—泰克科技“智慧创新联合实验室”正式揭牌成立</a>
                                </p>
                            </Card>
                        </Col>
                    </Row>
                    <br>
                    <br>
                    <Row :gutter="64">
                        <Col span="12">
                            <Card :bordered="false" class="Card">
                                <p slot="title" style="font-size:1.25rem">{{university }}</p>
                                <p>
                                    <a
                                        class="link-school"
                                        @click="guideText(index)"
                                    >
                                        东北大学（Northeastern University），教育部直属的高水平研究型全国重点大学，坐落于东北中心城市沈阳，
                                        由教育部、辽宁省、沈阳市三方重点共建，是世界一流大学建设高校，
                                        国家首批“211工程”、“985工程”重点建设高校，
                                        国家建设高水平大学公派研究生项目、中国政府奖学金来华留学生接收院校、国家大学生创新性实验计划、国家级大学生创新创业训练计划、
                                        全国深化创新创业教育改革示范高校，全国首批博士、硕士、学士学位授予单位，
                                        中国最早设立研究生院的32所高校之一，研究生招生34所自主划线高校之一。
                                        始建于1923年4月。1928年8月至1937年1月，著名爱国将领张学良将军兼任校长。
                                    </a>
                                </p>
                            </Card>
                        </Col>
                        <Col span="12">
                            <Card :bordered="false" class="Card">
                                <p slot="title" style="font-size:1.25rem">{{title4}}</p>
                                <p>
                                    <a class="link-a" @click="guideText">>东北大学2019年本科生自主招生简章</a>
                                </p>
                                <p>
                                    <a class="link-a" @click="guideText">>东北大学2019年外语类保送生招生简章</a>
                                </p>
                                <p>
                                    <a class="link-a" @click="guideText">>东北大学2019年高水平运动队招生简章</a>
                                </p>
                                <p>
                                    <a class="link-a" @click="guideText">>东北大学2019年艺术类招生简章</a>
                                </p>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            modal: false,
            university: "东北大学",
            title2: "高校资讯",
            title4: "高校招生简章详情",
            content: "",
            value2: 0,
            setting: {
                height: 300,
                autoplay: true,
                autoplaySpeed: 4000,
                dots: "inside",
                radiusDot: false,
                trigger: "click",
                arrow: "always"
            },
            data1: [
                {
                    value: "beijing",
                    label: "北京",
                    children: [
                        {
                            value: "beijingdaxue",
                            label: "北京大学"
                        },
                        {
                            value: "qinghuadaxue",
                            label: "清华大学"
                        },
                        {
                            value: "beijinghangkonghangtiandaxue",
                            label: "北京航空航天大学"
                        }
                    ]
                },
                {
                    value: "liaoning",
                    label: "辽宁",
                    children: [
                        {
                            value: "dongbeidaxue",
                            label: "东北大学"
                        },
                        {
                            value: "dalianligongdaxue",
                            label: "大连理工大学"
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        send() {
            this.$http({
                method: "post",
                url:
                    "https://fantuan.wxhulu.com:8086/newEntrancePolicy/getProvince/getNewEntrancePolicy",
                data: {
                    province: this.sname[0]
                }
            })
                .then(resp => {
                    // console.log(resp);
                    // this.policyList = resp.data.data;
                    // this.title2=resp.data.data[0].title;
                    // this.content=resp.data.data[0].content;
                })
                .catch(resp => {
                    console.log(
                        "请求失败：" + resp.status + "," + resp.statusText
                    );
                });
        },
        backToButtonHome() {
            this.$router.push({
                path: "/buttonHome"
            });
        },
        guideText(data) {
            this.modal = true;
            this.count = data - 1;
        }
        // change(data){
        // 	this.sname = data;
        // },对应上方注释
    }
};
</script>

<style>
.flex-div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.selector-div {
    float: left;
}
.card-div {
    width: 75rem;
    float: right;
}
.h-AJK {
    font-size: 2.5rem;
}
.PCard {
    background-color: rgb(77, 182, 164, 0.5);
}
.Card {
    background-color: rgb(77, 182, 164, 0.2);
}
.breadcrumb {
    padding: 0.65rem;
    background-color: aliceblue;
}
.font {
    color: aliceblue;
}
.back-button {
    position: fixed;
    bottom: 2rem;
}
.cascader {
    width: 100%;
}
.link-a {
    font-size: 1.25rem;
    color: rgba(228, 217, 217, 0.945);
}

.link-school {
    font-size: 1rem;
    color: rgba(228, 217, 217, 0.945);
}

.right-col-textarea {
    float: right;
    background-color: aliceblue;
}
</style>
