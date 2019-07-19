<template>
	<div class="font">
		<i-input v-model="searchedUniversity" icon="ios-search-strong" placeholder="搜索高校" style="width: 200px"></i-input> 
        <i-button  class="font" type="ghost" shape="circle" icon="ios-search" @click="searchUniversity"></i-button>
        
        <Modal class="modal" v-model="universityModal" width="800">
            <p slot="header"
                style="color:rgb(241, 123, 123);   text-align:center;font-size:1.25rem;">东北大学</p>
            <div class="school clearfix">
                <div class="schoolLogo clearfix">
                    <img src="https://static-data.eol.cn/upload/logo/134.jpg" alt="..">
                </div>
                <div class="schoolName clearfix">
                    <div class="line1">
                        <span class="line1-schoolName">东北大学</span>
                    </div>
                    <div class="line2">
                        <span class="line2-intro">
                            <a href="http://www.eol.cn/html/g/gxmd/985.shtml" target="_blank">985院校</a>
                        </span>
                        <span class="line2-intro">
                            <a href="http://www.eol.cn/html/g/gxmd/211.shtml" target="_blank">211院校</a>
                        </span>
                        <span class="line2-intro"><i>一流大学建设高校</i></span>
                        <span class="line2-intro"><i>教育部直属</i></span>
                    </div>
                    <div class="line3">
                        <span class="shuxian">院系设置</span>
                        <span class="shuxian">重点学科</span>
                        <span class="shuxian">重点实验室</span>
                        <span class="shuxian">自主招生</span>
                    </div>
                    <div class="line4" style="position: relative;">
                            <span class="line-name">高校类型:</span>
                            <span class="line-value td1">理工类</span>
                            <span class="line-name">所属地区:</span>
                            <span class="line-value td2">辽宁沈阳市</span>
                            <span class="line-name">电子邮箱:</span>
                            <span class="line-value">ddzsb@mail.neu.edu.cn</span>
                            <span class="emailshow">ddzsb@mail.neu.edu.cn</span>
                    </div>
                    <div class="line5" style="position: relative;">
                        <span class="line-name">学历层次:</span>
                        <span class="line-value td1">普通本科</span>
                        <span class="line-name">招办电话:</span>
                        <span class="line-value school-phone td2">024-83687392,024-23891272</span>
                        <span class="line-name">招办网址:</span>
                        <a target="_blank" class="line-value school-net" href="http://zs.neu.edu.cn/">http://zs.neu.edu.cn/</a>
                        <span class="phoneshow">024-83687392,024-23891272</span>
                    </div>
                </div>
            </div>
                        




            <div slot="footer">
                <i-button
                    type="circle"
                    size="large"
                    style="width:100%;background-color:#ff9999;color:white;"
                    @click="universityModal=false"
                >我知道啦</i-button>
            </div>
        </Modal>

		<br><br><br>
		<div class="cdiv">
        <div class="PageDiv1">
        <div class="block">
            <div class="competitions-type one">
                理科类竞赛
                <Cascader id="math" class="cascader" :data="math" placeholder="请选择比赛及所获奖项" trigger="hover" @on-change="changeToTable" change-on-select></Cascader>
            </div>    
                
            <div class="competitions-type one">
                科创类竞赛
                <Cascader id="technology" class="cascader" :data="technology" placeholder="请选择比赛及所获奖项" trigger="hover" @on-change="changeToTable" change-on-select></Cascader>
            </div>

            <div class="competitions-type one">
                国际类竞赛
                <Cascader id="international" class="cascader" :data="international" placeholder="请选择比赛及所获奖项" trigger="hover" @on-change="changeToTable" change-on-select></Cascader>
            </div>

            <div class="competitions-type one">
                其他
                <Cascader  id="other" class="cascader" :data="other" placeholder="请选择比赛及所获奖项" trigger="hover" @on-change="changeToTable" change-on-select></Cascader>
            </div>

            <div class="competitions-type one">
                英语类竞赛
                <Cascader  id="english" class="cascader" :data="english" placeholder="请选择比赛及所获奖项" trigger="hover" @on-change="changeToTable" change-on-select></Cascader>
            </div>

            <div class="competitions-type one">
                语文作文类竞赛
                <Cascader id="chinese" class="cascader" :data="chinese" placeholder="请选择比赛及所获奖项" trigger="hover" @on-change="changeToTable" change-on-select></Cascader>
            </div>

        </div>
        <div>
            <br><br><br><br>
            <i-table :content="self" class="tabel" size="default" :columns="columns1" :data="tableData"></i-table>
        </div>
        </div>
        </div>

        <Modal class="modal" v-model="recommendedModal" width="800">
            <p slot="header" style="color:rgb(241, 123, 123);   text-align:center;font-size:1.25rem;">院校推荐</p>
            <p class="modal-font">根据你的比赛经历，为你推荐的院校和专业为：</p>
            <p class="modal-font">北京大学：&nbsp;理科试验班&nbsp;计算机类</p>
            <p class="modal-font">清华大学：&nbsp;电子信息类&nbsp;经济金融与管理类</p>
            <p class="modal-font">北京语言大学：&nbsp;英语&nbsp;翻译</p>
            <p class="modal-font">中国人民大学：&nbsp;人文科学试验班&nbsp;汉语言文学</p>



            <div slot="footer">
                <i-button
                    type="circle"
                    size="large"
                    style="width:100%;background-color:#ff9999;color:white;"
                    @click="recommendedModal=false"
                >我知道啦</i-button>
            </div>
        </Modal>

        
        

		<br><br><br>
        <div>
      	    <i-button class="universityRecommand-queding-button" type="ghost" shape="circle" @click="recommendUniversity">确定</i-button>
      	    <i-button class="universityRecommand-reset-button" type="ghost" shape="circle" @click="reset" >重置</i-button>
        </div>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                universityModal: false,
                recommendedModal:false ,
                self: this,
                searchedUniversity: "",
                columns1: [
                    {
                        title: '比赛名称',
                        key: 'name'
                    },
                    {
                        title: '比赛所获奖项',
                        key: 'award'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                props: {
                                    type: 'success',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                    this.show(params.index)
                                    }
                                }
                                }, '查看'),
                                h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                    this.remove(params.index)
                                    }
                                }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                tableData: [],
				math: [{
                    value: '全国中学生物理奥林匹克竞赛',
                    label: '全国中学生物理奥林匹克竞赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },{
                    value: '全国中学生数学奥林匹克竞赛',
                    label: '全国中学生数学奥林匹克竞赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },
                {
                    value: '全国中学生化学奥林匹克竞赛',
                    label: '全国中学生化学奥林匹克竞赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },
                {
                    value: '全国中学生生物奥林匹克竞赛',
                    label: '全国中学生生物奥林匹克竞赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },
                {
                    value: '全国中学生信息学奥林匹克竞赛',
                    label: '全国中学生信息学奥林匹克竞赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },
                ],
                
                technology: [{
                    value: '全国青少年科技创新大赛',
                    label: '全国青少年科技创新大赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },{
                    value: '“明天小小科学家”奖励活动',
                    label: '“明天小小科学家”奖励活动',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },{
                    value: '全国中小学电脑制作活动',
                    label: '全国中小学电脑制作活动',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },{
                    value: '中国青少年机器人大赛',
                    label: '中国青少年机器人大赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                }
                ],
                international: [{
                    value: '国际科学与工程大奖赛',
                    label: '国际科学与工程大奖赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },{
                    value: '国际环境科研项目奥林匹克竞赛',
                    label: '国际环境科研项目奥林匹克竞赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                }
                ],
                
                chinese: [{
                    value: '全国新概念作文大赛',
                    label: '全国新概念作文大赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },{
                    value: '“语文报杯” 全国中学生作文大赛',
                    label: '“语文报杯” 全国中学生作文大赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },{
                    value: '“叶圣陶杯”中学生作文大赛',
                    label: '“叶圣陶杯”中学生作文大赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                }
                ],
                english: [{
                    value: '全国中学生英语能力竞赛',
                    label: '全国中学生英语能力竞赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },{
                    value: '全国创新英语大赛',
                    label: '全国创新英语大赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },{
                    value: '21世纪杯英语演讲比赛',
                    label: '21世纪杯英语演讲比赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },
                ],
                
                other: [{
                    value: '全国大中学生海洋知识竞赛',
                    label: '全国大中学生海洋知识竞赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },{
                    value: '全国青少年航空航天模型锦标赛',
                    label: '全国青少年航空航天模型锦标赛',
                    children: [
                        {
                            value: 'specialPlace',
                            label: '特等奖'
                        },
                        {
                            value: 'firstPlace',
                            label: '一等奖'
                        },
                        {
                            value: 'secondPlace',
                            label: '二等奖'
                        },
                        {
                            value: 'thirdPlace',
                            label: '三等奖'
                        }
                    ]
                },
                ]

            }
        },
        methods: {
            searchUniversity(){
                if(this.searchedUniversity==""){
                    this.$Message.info("亲爱的, 请输入院校名称关键字");
                }else{
                    if(this.searchedUniversity=="东北大学"){
                        this.universityModal = true
                    }else{
                        this.$Message.info("对不起，您搜索的 "+this.searchedUniversity+" 院校不存在");
                    }
                }
            },
            recommendUniversity(){
                this.recommendedModal = true
            },

            // table操作中的方法
            show (index) {
                this.$Modal.info({
                    title: '获奖信息',
                    content: `大赛名称：${this.tableData[index].name}<br>获奖级别：${this.tableData[index].award}`
                })
            },
            remove (index) {
                this.tableData.splice(index, 1);
            },
            changeToTable(labels, selectedData){
                const index = labels.length - 1;
                const data = selectedData[index] || false;
                const tableDataArray = data.__label.split("/");
                // console.log(tableDataArray[0]);
                // console.log(tableDataArray[1]);
                this.tableData.push({ name: tableDataArray[0],award: tableDataArray[1]});
            },
            reset(){
                this.tableData = [];
            }
        },
    }
</script>

<style>

.tabel /deep/ .ivu-table-cell {
    font-size: .8rem;
}

.modal-font{
    font-size: 1rem;
}
.cdiv{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
}
.PageDiv1{
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    color: rgb(77, 182, 164,0.5);
}
.school {
    width: 100%;
    margin-top: 60px;
}
.clearfix {
    zoom: 1;
}
.schoolLogo {
    float: left;
    width: 250px;
    padding: 20px;
}
.schoolName .line1 .line1-schoolName {
    font-size: 26px;
    color: #0592dc;
}
.schoolName .line1 span, .schoolName .line2 span {
    cursor: pointer;
}
.schoolName span {
    margin-right: 10px;
}
.schoolName .line2 .line2-intro {
    display: inline-block;
    padding: 0px 1px;
    color: #333;
    border: 1px solid #d0d0d0;
}
.schoolName .line1 span, .schoolName .line2 span {
    cursor: pointer;
}
.schoolName span {
    margin-right: 10px;
}
.schoolName .line3 {
    margin-bottom: 20px;
}


.cascader{
  width: 14.375rem;
  
  /* width: 230px */
}
.tabel{
	float: left;
	width: 35rem;
    height:24rem;
	/* width: 350px; */
}
.competitions-type{
	font-size: 1.50rem;
	color: white;
}
.competitions-type2{
	font-size: 0.75rem;
	color: aliceblue
}
.font{

    color: aliceblue
}
.universityRecommand-queding-button{
    position: fixed;
    margin-left: 65rem;
    border-radius: 0.3rem;
    width: 7rem;
    font-size: 1rem;
    background-color:rgb(233, 175, 17);
    border: none;
    color: white;
}
.universityRecommand-reset-button{
    position: fixed;
    margin-left: 76.5rem;
    border-radius: 0.3rem;
    width: 7rem;
    font-size: 1rem;
    background-color:rgb(233, 175, 17);
    border: none;
    color: white;
}
.block{
    float: left;
    width:30rem;
    height:22.5rem;
}
.one{
    width: 18.75rem;
}
</style>
