<template>
    <div class="font">
        <!-- 专业详解<div class="breadcrumb"><Breadcrumb separator=">"><Breadcrumb-item class="font" href="/buttonHome"><Icon type="ios-home-outline"></Icon>首页</Breadcrumb-item><Breadcrumb-item><Icon type="ios-search"></Icon>专业详解</Breadcrumb-item></Breadcrumb></div> -->
        <br>
        <h1 class="h-AJK">&nbsp;&nbsp;&nbsp;专业详解</h1>
        <br>
        <br>
        
        <div class="flex-div">
            <div>
                <i-input v-model="searchedMajor" icon="ios-search-strong" placeholder="搜索专业" style="width: 200px"></i-input>
                <i-button class="font" type="ghost" shape="circle" icon="ios-search" @click="searchMajor"></i-button>
                
            </div>
            
            <div class="card-div">
                <Card :bordered="false" class="PCard">
                    <div >
                        <span style="font-size:1.5rem">专业选择 ></span>
                        <span class="span" v-for="(c,index) in majorSpecificType" @click="MhandleClick(index,c)":class="{'spanActive':current===index}">
                            {{c}}&nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                    <br>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <td >专业类别</td>
                                    <td >专业名称</td>
                                    <td>报考热度排名</td>
                                    <td>层次</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td rowspan="4">哲学类</td>
                                    <td >哲学</td>
                                    <td>全国25 哲学类1</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >逻辑学</td>
                                    <td>全国93 哲学类2</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >宗教学</td>
                                    <td>全国714 哲学类4</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >伦理学</td>
                                    <td>全国682 哲学类3</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td rowspan="6">经济学类</td>
                                    <td >经济学</td>
                                    <td>全国1067 经济学类13</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >经济统计学</td>
                                    <td>全国1158 经济学类15</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >国民经济管理</td>
                                    <td>全国42 经济学类4</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >资源与环境经济学</td>
                                    <td>全国199 经济学类7</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >商务经济学</td>
                                    <td>全国2 经济学类1</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >能源经济</td>
                                    <td>全国200 经济学类8</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td rowspan="2">财政学类</td>
                                    <td >财政学</td>
                                    <td>全国18 财政学类2</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >税收学</td>
                                    <td>全国1179 财政学类16</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td rowspan="8">金融学类</td>
                                    <td >金融学</td>
                                    <td>全国1033 金融学类12</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >金融工程</td>
                                    <td>全国24 金融学类3</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >保险学</td>
                                    <td>全国1188 金融学类17</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >投资学</td>
                                    <td>全国663 金融学类9</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >金融数学</td>
                                    <td>全国123 金融学类6</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >信用管理</td>
                                    <td>全国686 金融学类11</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >经济与金融</td>
                                    <td>全国115 金融学类5</td>
                                    <td>本科</td>
                                </tr>
                                <tr
                                    @click="majorInfo"
                                    
                                >
                                    <td >精算学</td>
                                    <td>全国1257 金融学类18</td>
                                    <td>本科</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
        
        
            
        <!-- 收入modal -->
        <Modal class="modal" v-model="mainModal" width="1200">
            <p slot="header" style="color:black;text-align:center;font-size:1.25rem;">
                <span>收入最高的十大专业</span>
            </p>
            <div>
                &nbsp;&nbsp;&nbsp;&nbsp;家长在为孩子选择大学专业时，毕业后的工资收入、福利待遇是一个重要的参考标准。
                <br>&nbsp;&nbsp;&nbsp;&nbsp;什么专业领跑月收入排行榜？
                <br>&nbsp;&nbsp;&nbsp;&nbsp;2017年就业蓝皮书数据显示：本科方面，2016届毕业半年后月收入较高的专业是信息安全（5906元），其次是软件工程（5869元）……
            </div>
            <div class="mainbody-con">
                <div class="mainbody-per">
                    <div class="mainbody-per-num">
                        <p style="font-size:3rem;margin-left:4.6rem">1</p>
                    </div>
                    <div class="mainbody-per-txt">
                        <div class="mainbody-per-start">
                            <strong>信息安全</strong>
                        </div>
                        <div class="mainbody-per-nowtxtbox">
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">毕业半年后月收入：</span>5906元
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">专业介绍：</span>本专业培养能够独立建立、维护网络的安全认证系统，保障网络安全运营的高级应用型人才...
                                <a
                                    @click="majorInfo"
                                >[详细]</a>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active">
                                    专业层次：
                                    <em>本科</em>
                                </span>
                                <span class="bold">
                                    专业类别：
                                    <em>理学</em>
                                </span>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active1">
                                    开设院校：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                                <span class="bold">
                                    就业前景：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mainbody-per">
                    <div class="mainbody-per-num">
                        <p style="font-size:3rem;margin-left:4.6rem">2</p>
                    </div>
                    <div class="mainbody-per-txt">
                        <div class="mainbody-per-start">
                            <strong>软件工程</strong>
                        </div>
                        <div class="mainbody-per-nowtxtbox">
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">毕业半年后月收入：</span>5869元
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">专业介绍：</span>培养适应计算机应用学科的发展，毕业后能在IT行业、科研机构、企事业中从事计算机应用软件系统的开发和研制的高级软件工程技术人才...
                                <a
                                    @click="majorInfo"
                                >[详细]</a>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active">
                                    专业层次：
                                    <em>本科</em>
                                </span>
                                <span class="bold">
                                    专业类别：
                                    <em>工学</em>
                                </span>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active1">
                                    开设院校：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                                <span class="bold">
                                    就业前景：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mainbody-per">
                    <div class="mainbody-per-num">
                        <p style="font-size:3rem;margin-left:4.6rem">3</p>
                    </div>
                    <div class="mainbody-per-txt">
                        <div class="mainbody-per-start">
                            <strong>网络工程</strong>
                        </div>
                        <div class="mainbody-per-nowtxtbox">
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">毕业半年后月收入：</span>5600元
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">专业介绍：</span>网络工程专业是教育部第二类特色专业。本专业培养具有良好的网络技术与工程素养，系统地掌握网络工程的基本理论、基本技能与基本方法...
                                <a
                                    @click="majorInfo"
                                >[详细]</a>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active">
                                    专业层次：
                                    <em>本科</em>
                                </span>
                                <span class="bold">
                                    专业类别：
                                    <em>工学类</em>
                                </span>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active1">
                                    开设院校：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                                <span class="bold">
                                    就业前景：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mainbody-per">
                    <div class="mainbody-per-num">
                        <p style="font-size:3rem;margin-left:4.6rem">4</p>
                    </div>
                    <div class="mainbody-per-txt">
                        <div class="mainbody-per-start">
                            <strong>微电子学</strong>
                        </div>
                        <div class="mainbody-per-nowtxtbox">
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">毕业半年后月收入</span>：5503元
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">专业介绍：</span>培养掌握微电子学专业所必需的基础知识、基本理论和基本实验技能，能在微电子学及相关领域从事科研、科技开发、工程技术等工作的高级专门人才...
                                <a
                                    @click="majorInfo"
                                >[详细]</a>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active">
                                    专业层次：
                                    <em>本科</em>
                                </span>
                                <span class="bold">
                                    专业类别：
                                    <em>理学类</em>
                                </span>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active1">
                                    开设院校：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                                <span class="bold">
                                    就业前景：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mainbody-per">
                    <div class="mainbody-per-num">
                        <p style="font-size:3rem;margin-left:4.6rem">5</p>
                    </div>
                    <div class="mainbody-per-txt">
                        <div class="mainbody-per-start">
                            <strong>计算机科学与技术</strong>
                        </div>
                        <div class="mainbody-per-nowtxtbox">
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">毕业半年后月收入：</span>5452元
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">专业介绍：</span>本专业培养具有良好的科学素养，系统地、较好地掌握计算机科学与技术包括计算机硬件、软件与应用的基本理论、基本知识和基本技能与方法...
                                <a
                                    @click="majorInfo"
                                >[详细]</a>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active">
                                    专业层次：
                                    <em>本科</em>
                                </span>
                                <span class="bold">
                                    专业类别：
                                    <em>工学类</em>
                                </span>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active1">
                                    开设院校：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                                <span class="bold">
                                    就业前景：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mainbody-per">
                    <div class="mainbody-per-num">
                        <p style="font-size:3rem;margin-left:4.6rem">6</p>
                    </div>
                    <div class="mainbody-per-txt">
                        <div class="mainbody-per-start">
                            <strong>法语</strong>
                        </div>
                        <div class="mainbody-per-nowtxtbox">
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">毕业半年后月收入：</span> 5426元
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">专业介绍：</span>培养具有扎实的相应语语言基础比较广泛的科学文化知识，能在外事、经贸、文化、新闻出版、旅游等部门从事翻译、教学等语言高级专门人才...
                                <a
                                    @click="majorInfo"
                                >[详细]</a>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active">
                                    专业层次：
                                    <em>本科</em>
                                </span>
                                <span class="bold">
                                    专业类别：
                                    <em>文学类</em>
                                </span>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active1">
                                    开设院校：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                                <span class="bold">
                                    就业前景：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mainbody-per">
                    <div class="mainbody-per-num">
                        <p style="font-size:3rem;margin-left:4.6rem">7</p>
                    </div>
                    <div class="mainbody-per-txt">
                        <div class="mainbody-per-start">
                            <strong>信息工程</strong>
                        </div>
                        <div class="mainbody-per-nowtxtbox">
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">毕业半年后月收入：</span>5388元
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">专业介绍：</span>培养能在信息产业等国民经济部门及国防部门从事信息系统的研究、设计、集成以及制造等方面工作的信息工程学科的高级工程技术人才...
                                <a
                                    @click="majorInfo"
                                >[详细]</a>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active">
                                    专业层次：
                                    <em>本科</em>
                                </span>
                                <span class="bold">
                                    专业类别：
                                    <em>工学类</em>
                                </span>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active1">
                                    开设院校：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                                <span class="bold">
                                    就业前景：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mainbody-per">
                    <div class="mainbody-per-num">
                        <p style="font-size:3rem;margin-left:4.6rem">8</p>
                    </div>
                    <div class="mainbody-per-txt">
                        <div class="mainbody-per-start">
                            <strong>物联网工程</strong>
                        </div>
                        <div class="mainbody-per-nowtxtbox">
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">毕业半年后月收入：</span>5363元
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">专业介绍：</span>培养建设、应用、维护和管理物联网系统所需要的系统规划设计、产品制造、系统集成等方面的综合性的具有国际视野和国际竞争力的高级工程技术人才...
                                <a
                                    @click="majorInfo"
                                >[详细]</a>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active">
                                    专业层次：
                                    <em>本科</em>
                                </span>
                                <span class="bold">
                                    专业类别：
                                    <em>工学类</em>
                                </span>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active1">
                                    开设院校：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                                <span class="bold">
                                    就业方向：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mainbody-per">
                    <div class="mainbody-per-num">
                        <p style="font-size:3rem;margin-left:4.6rem">9</p>
                    </div>
                    <div class="mainbody-per-txt">
                        <div class="mainbody-per-start">
                            <strong>电子科学与技术</strong>
                        </div>
                        <div class="mainbody-per-nowtxtbox">
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">毕业半年后月收入：</span>5147元
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">专业介绍：</span>本专业培养具有良好的科学素养，系统地、较好地掌握计算机科学与技术包括计算机硬件、软件与应用的基本理论、基本知识和基本技能与方法...
                                <a
                                    @click="majorInfo"
                                >[详细]</a>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active">
                                    专业层次：
                                    <em>本科</em>
                                </span>
                                <span class="bold">
                                    专业类别：
                                    <em>工学类</em>
                                </span>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active1">
                                    开设院校：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                                <span class="bold">
                                    就业方向：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mainbody-per">
                    <div class="mainbody-per-num">
                        <p style="font-size:3rem;margin-left:4.6rem">10</p>
                    </div>
                    <div class="mainbody-per-txt">
                        <div class="mainbody-per-start">
                            <strong>信息与计算科学</strong>
                        </div>
                        <div class="mainbody-per-nowtxtbox">
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">毕业半年后月收入：</span>5137元
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold">专业介绍：</span>本专业培养具有良好的科学素养，系统地、较好地掌握计算机科学与技术包括计算机硬件、软件与应用的基本理论、基本知识和基本技能与方法...
                                <a
                                    @click="majorInfo"
                                >[详细]</a>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active">
                                    专业层次：
                                    <em>本科</em>
                                </span>
                                <span class="bold">
                                    专业类别：
                                    <em>理学类</em>
                                </span>
                            </p>
                            <p class="mainbody-per-nowtxt">
                                <span class="bold bold-active1">
                                    开设院校：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                                <span class="bold">
                                    就业方向：
                                    <a @click="majorInfo">查看所有</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <i-button
                    type="circle"
                    size="large"
                    style="width:100%;background-color:#0592dc;color:white;"
                    @click="mainModal=false"
                >我知道啦</i-button>
            </div>
        </Modal>
        <!-- 哲学modal -->
        <Modal class="modal" v-model="subModal" width="1200">
            <p slot="header" style="color:black;text-align:center;font-size:1.25rem;">
                <span>哲学</span>
            </p>

            <div>
                <div class="title">基本信息</div>
                <div class="majorBasicInfo">
                    <p>
                        <span>
                            专业代码:
                            <span>010101&nbsp;&nbsp;</span>
                        </span>
                        <span>
                            专业人气:
                            <span>40794&nbsp;&nbsp;</span>
                        </span>
                        <span>
                            授予学位:
                            <span>哲学学士&nbsp;&nbsp;</span>
                        </span>
                        <span>
                            修业年限:
                            <span>四年&nbsp;&nbsp;</span>
                        </span>
                        <span>
                            学科门类:
                            <span>哲学&nbsp;&nbsp;</span>
                        </span>
                        <span>
                            专业类:
                            <span>哲学类&nbsp;&nbsp;</span>
                        </span>
                        <span>
                            选考（学科）建议:
                            <span>不限&nbsp;&nbsp;</span>
                        </span>
                    </p>
                </div>
                <div>
                    <Row>
                        <Col span="7">
                            <Card style="width:20rem">
                                <chart
                                    id="chart1"
                                    :option="drawChart1"
                                    style="width: 14.375rem; height: 15rem"
                                ></chart>
                            </Card>
                        </Col>
                        <Col span="9">
                            <Card style="width:24rem">
                                <chart
                                    id="chart2"
                                    :option="drawChart2"
                                    style="width: 21.875rem; height: 15rem"
                                ></chart>
                            </Card>
                        </Col>
                        <Col span="8">
                            <Card style="width:24rem">
                                <chart
                                    id="chart3"
                                    :option="drawChart3"
                                    style="width: 24rem; height: 15rem"
                                ></chart>
                            </Card>
                            <!-- <chart id="chart" :option="drawChart" style="width: 230px; height: 150px"></chart> -->
                        </Col>
                    </Row>
                </div>

                <div class="title">专业详解</div>
                <div>
                    <p class="problemTitle">是什么</p>
                    <p>
                        哲学研习中西现代哲学、中西哲学史、伦理学、逻辑学、人类学等方面的基本理论和知识，
                        以世界本原为探究对象，研究自然、社会和人类最普遍的问题，探索人的价值观、人生观和世界观的问题。
                        例如：世界的本质是什么，人类应该怎样活着，人类如何看待死亡等。该专业侧重于学术方面，选择需谨慎。
                        <br>关键词：马克思主义 三观 逻辑 伦理
                    </p>
                    <p class="problemTitle">学什么</p>
                    <p>
                        《西方哲学史》、《中国哲学史》、《马克思主义哲学史》、《现代中国哲学》、《西方现代哲学》、
                        《马克思主义哲学原理》、《技术哲学》、《自然哲学》、《现代西方伦理学》、《逻辑学》
                        部分高校按以下专业方向培养：国学。
                    </p>
                    <p class="problemTitle">干什么</p>
                    <p>
                        深造：考研或者保研，继续哲学方面的学习深造，完成硕士、博士学业后，成为大学教授或者哲学学者；
                        转行：向公务员、编辑、记者、教师等方向发展。
                    </p>
                </div>

                <div class="title">就业行业分布</div>
                <div>
                    <Card style="width:50rem">
                        <chart id="chart4" :option="drawChart4" style="width: 45rem; height: 20rem"></chart>
                    </Card>
                </div>

                <div class="title">专业人气院校</div>
                <div class="zhuanye-table">
                    <table>
                        <thead>
                            <tr>
                                <td rowspan="2" class="td-schoolName">学校名称</td>
                                <td rowspan="2" class="td-specialtyName">专业名称</td>
                                <td rowspan="2">重点专业</td>
                                <td colspan="3">高校层次</td>
                                <td rowspan="2" class="td-compare">高校对比</td>
                            </tr>
                            <tr>
                                <td>教育部直属</td>
                                <td>985大学</td>
                                <td>211大学</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >北京大学</td>
                                <td >哲学</td>
                                <td>否</td>
                                <td>是</td>
                                <td>是</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >中国人民大学</td>
                                <td >哲学（政治学与经济学（PPE实验班）</td>
                                <td>是</td>
                                <td>是</td>
                                <td>是</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >中国人民大学</td>
                                <td >哲学</td>
                                <td>是</td>
                                <td>是</td>
                                <td>是</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >北京航空航天大学</td>
                                <td >哲学</td>
                                <td>否</td>
                                <td>否</td>
                                <td>是</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >北京师范大学</td>
                                <td >哲学</td>
                                <td>否</td>
                                <td>是</td>
                                <td>是</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >首都师范大学</td>
                                <td >哲学</td>
                                <td>否</td>
                                <td>否</td>
                                <td>否</td>
                                <td>否</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >中央民族大学</td>
                                <td >哲学</td>
                                <td>否</td>
                                <td>否</td>
                                <td>是</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >中国政法大学</td>
                                <td >哲学</td>
                                <td>否</td>
                                <td>是</td>
                                <td>否</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >南开大学</td>
                                <td >哲学</td>
                                <td>是</td>
                                <td>是</td>
                                <td>是</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >河北大学</td>
                                <td >哲学</td>
                                <td>是</td>
                                <td>否</td>
                                <td>否</td>
                                <td>否</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >山西大学</td>
                                <td >哲学</td>
                                <td>否</td>
                                <td>否</td>
                                <td>否</td>
                                <td>否</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >内蒙古大学</td>
                                <td >哲学</td>
                                <td>否</td>
                                <td>否</td>
                                <td>否</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >辽宁大学</td>
                                <td >哲学</td>
                                <td>是</td>
                                <td>否</td>
                                <td>否</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >吉林大学</td>
                                <td >哲学（PhilosophyProgram）</td>
                                <td>否</td>
                                <td>是</td>
                                <td>是</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >吉林大学</td>
                                <td >哲学</td>
                                <td>否</td>
                                <td>是</td>
                                <td>是</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >黑龙江大学</td>
                                <td >哲学</td>
                                <td>是</td>
                                <td>否</td>
                                <td>否</td>
                                <td>否</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >哈尔滨理工大学</td>
                                <td >哲学</td>
                                <td>否</td>
                                <td>否</td>
                                <td>否</td>
                                <td>否</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >齐齐哈尔大学</td>
                                <td >哲学</td>
                                <td>否</td>
                                <td>否</td>
                                <td>否</td>
                                <td>否</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >同济大学</td>
                                <td >哲学</td>
                                <td>否</td>
                                <td>是</td>
                                <td>是</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td >华东师范大学</td>
                                <td >哲学（非师范）</td>
                                <td>否</td>
                                <td>是</td>
                                <td>是</td>
                                <td>是</td>
                                <td>
                                    <button type="button" class="ant-btn clickbnt">
                                        <i class="iconfont icon-plus"></i>
                                        <span>加入对比</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div slot="footer">
                <i-button
                    type="circle"
                    size="large"
                    style="width:100%;background-color:#0592dc;color:white;"
                    @click="subModal=false"
                >好哒, 我知道啦</i-button>
            </div>
        </Modal>

        <Button class="back-button" type="text" @click="backToButtonHome">
            <Icon type="android-arrow-back" size="32" color="#fff"></Icon>
        </Button>
    </div>
</template>
<script>
import echarts from "echarts";
require("echarts/theme/macarons");
export default {
    data() {
        return {
            current: 0,
            mainModal: false,
            subModal: false,
            myChart1: null,
            myChart2: null,
            myChart3: null,
            myChart4: null,
            searchedMajor: "",
            majorSpecificType: [
                "全部",
                "哲学",
                "经济学",
                "工学",
                "文学",
                "教育学",
                "历史学",
                "法学",
                "理学",
                "农学",
                "管理学",
                "艺术学",
                "医学",
                "农林牧渔",
                "资源环境与安全",
                "能源动力与材料",
                "土木建筑",
                "水利",
                "装备制造",
                "生物与化工",
                "轻工纺织",
                "食品药品与粮食",
                "交通运输",
                "电子信息",
                "医药卫生",
                "财经商贸",
                "旅游",
                "文化艺术",
                "新闻传播",
                "教育与体育",
                "公安与司法",
                "公共管理与服务"
            ],
        };
    },
    methods: {
        MhandleClick(index,c){
            this.current = index;
        },
        relevantMajorInfo() {
            this.mainModal = true;
        },
        majorInfo() {
            console.log("fjhdfaskldf")
            this.subModal = true;
            this.drawChart1();
            this.drawChart2();
            this.drawChart3();
            this.drawChart4();
        },
        drawChart1() {
            this.myChart1 = this.$echarts.init(
                document.getElementById("chart1"),
                "macarons"
            );

            let option = {
                title: {
                    text: "性别比列",
                    x: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x: "center",
                    y: "bottom",
                    data: ["女生", "男生"]
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        // dataView : {show: true, readOnly: false},
                        magicType: {
                            show: true,
                            type: ["pie", "funnel"]
                        },
                        restore: { show: true }
                        // saveAsImage : {show: true}
                    }
                },
                calculable: true,
                series: [
                    {
                        name: "性别：",
                        type: "pie",
                        radius: [20, 50],
                        center: ["50%", "50%"],
                        roseType: "radius",
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        lableLine: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: [
                            { value: 60, name: "女生" },
                            { value: 40, name: "男生" }
                        ]
                    }
                ]
            };

            this.myChart1.setOption(option);
            window.onresize = function() {
                this.myChart1.resize();
            };
        },
        drawChart2() {
            this.myChart2 = this.$echarts.init(
                document.getElementById("chart2"),
                "macarons"
            );
            let option = {
                title: {
                    text: "就业率"
                },
                xAxis: {
                    name: "年份（公元）",
                    type: "category",
                    data: ["2016", "2017", "2018"]
                },
                yAxis: {
                    name: "百分比（%）",
                    type: "value"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{b} : {c} %"
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        restore: { show: true }
                    }
                },
                series: [
                    {
                        data: [70, 85, 85],
                        type: "line"
                    }
                ]
            };
            this.myChart2.setOption(option);
            window.onresize = function() {
                this.myChart2.resize();
            };
        },
        drawChart3() {
            this.myChart3 = this.$echarts.init(
                document.getElementById("chart3"),
                "macarons"
            );
            let option = {
                title: {
                    text: "专业能力图"
                },
                tooltip: {},
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: "#fff",
                            backgroundColor: "#999",
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [
                        { name: "逻辑", max: 6500 },
                        { name: "记忆", max: 16000 },
                        { name: "技术", max: 30000 },
                        { name: "执行", max: 38000 },
                        { name: "思辨", max: 52000 },
                        { name: "创新", max: 25000 }
                    ]
                },
                series: [
                    {
                        name: "专业能力（Professional Ability）",
                        type: "radar",
                        data: [
                            {
                                value: [
                                    4300,
                                    10000,
                                    28000,
                                    35000,
                                    50000,
                                    19000
                                ],
                                name: "专业能力（Professional Ability）"
                            }
                        ]
                    }
                ]
            };
            this.myChart3.setOption(option);
            window.onresize = function() {
                this.myChart3.resize();
            };
        },
        drawChart4() {
            this.myChart4 = this.$echarts.init(
                document.getElementById("chart4"),
                "macarons"
            );
            let option = {
                title: {
                    text: "就业行业分布"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{b} : {c} %"
                },
                legend: {
                    data: ["行业"]
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                xAxis: {
                    name: "%",
                    type: "value",
                    boundaryGap: [0, 0.01],
                    axisLabel: {
                        formatter: "{value}%"
                    }
                },
                yAxis: {
                    name: "行业",
                    type: "category",
                    data: [
                        "其他行业",
                        "教育培训",
                        "媒体",
                        "房地产",
                        "金融投资",
                        "服装",
                        "快消",
                        "互联网",
                        "广告",
                        "咨询服务"
                    ]
                },
                series: [
                    {
                        name: "行业",
                        type: "bar",
                        data: [
                            42.51,
                            11.52,
                            10.64,
                            9.7,
                            5.64,
                            4.47,
                            4.4,
                            4.21,
                            3.46,
                            3.45
                        ],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true, //开启显示
                                    position: "right", //在上方显示
                                    textStyle: {
                                        //数值样式
                                        color: "cornflowerblue",
                                        fontSize: 16
                                    }
                                }
                            }
                        }
                    }
                ]
            };
            this.myChart4.setOption(option);
            window.onresize = function() {
                this.myChart4.resize();
            };
        },
        searchMajor() {
            if (this.searchedMajor == "") {
                this.$Message.info("亲爱的, 请输入专业名称关键字");
            } else {
            }
        },
        toMajors() {
            this.$router.push({
                path: "/buttonHome/majorExplanation/majors"
            });
        },
        backToButtonHome() {
            this.$router.push({
                path: "/buttonHome"
            });
        }
    }
};
</script>

<style scoped>
.card-div{
    width: 80%;
}
.flex-div{

display: flex;
flex-direction: row;
justify-content:space-around;
}
.PCard{
  
  background-color: rgb(77, 182, 164,0.5);
}
.span{
    font-size: 1.1rem;
}
.spanActive{
    color: wheat;
    font-size: 1.3rem;
}
.h-AJK{
  font-size: 2.5rem;
}
table {
    color: black;
    border: 1px solid black;
    width: 100%;
    border-collapse: collapse;
}
th {
    border: 1px solid black;
    
}
td {
    border: 1px solid black;
    padding: 3px;
}
table tr:nth-child(odd) {
    background: #caeeee;
}
table tr:nth-child(even) {
    background: white;
}
.search-part {
    margin-left: 0.5rem;
}
.block {
    background-image: url("../../assets/post-bg-vue.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    border: 2px solid rgba(189, 193, 193, 0.2);
    box-sizing: border-box;
    width: 20%;
    height: 140px;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 6%;
}
.back-button {
    position: fixed;
    bottom: 2rem;
}
.i-select {
    width: 14.375rem;
    /* width: 230px */
}
.majors-type {
    font-size: 1.25rem;
    color: rgb(12, 8, 8);
    margin-left: 1rem;
}
.font {
    color: aliceblue;
}
.mainbody-con {
    padding: 0px 40px 5px 40px;
    box-sizing: border-box;
    width: 100%;
    /* margin-top: -80px; */
}
.mainbody-per {
    position: relative;
    margin: 0 auto;
    border: 2px solid #dddce0;
    position: relative;
    border-radius: 86px;
    z-index: 10;
    margin-bottom: 50px;
    padding: 0 210px 20px 165px;
}
.mainbody-per-num {
    width: 130px;
    height: 130px;
    position: absolute;
    left: 0;
    bottom: 0;
}
.per-touxiang {
    width: 210px;
    height: 210px;
    border-radius: 210px;
    right: -10px;
    top: -10.5px;
    position: absolute;
}
.mainbody-per-start {
    margin-top: 20px;
    line-height: 24px;
    font-size: 22px;
    color: #cd2b2b;
}
.mainbody-per-nowtxtbox {
    margin-top: 10px;
}
.mainbody-per-nowtxt {
    font-size: 14px;
    color: #333333;
    line-height: 24px;
}
.mainbody-per-nowtxt .bold {
    font-weight: bold;
}
.mainbody-per-right {
    padding: 0 165px 20px 210px;
}
div {
    margin: 0;
    padding: 0;
}
</style>
