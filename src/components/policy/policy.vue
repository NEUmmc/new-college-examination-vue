<template>
    <div class="font">
        <!-- <div class="breadcrumb"><Breadcrumb separator=">"><Breadcrumb-item class="font" href="/buttonHome"><Icon type="ios-home-outline"></Icon>首页</Breadcrumb-item><Breadcrumb-item><Icon type="ios-search"></Icon>政策解读</Breadcrumb-item></Breadcrumb></div> -->
        <br>
        <h1 class="h-AJK">&nbsp;&nbsp;&nbsp;政策解读</h1>
        <br>
        <br>

		<div>
			<Button class="back-button" type="text" @click="backToButtonHome" >
				<Icon type="android-arrow-back" size="32" color="#fff"></Icon>
			</Button>
		</div>
		
    <div class="flex-div">
    <div class="selector-div">
			<!-- <al-selector style="width:250px"  level="0" data-type="name" @on-change="change" /> 用on-change也可以实现-->
      <al-selector style="width:210px;" level="0" @on-change="send" data-type="name" v-model="sname" searchable size="large"/>
    </div>

    <div class="card-div">
      <Card :bordered="false" class="PCard">
        <Row :gutter="64">  
            <Col span="12">
              <!-- 走马灯 -->
              <Carousel v-model="value2" 
                  :height="setting.height"
                  :autoplay="setting.autoplay"
                  :autoplay-speed="setting.autoplaySpeed"
                  :dots="setting.dots"
                  :radius-dot="setting.radiusDot"
                  :trigger="setting.trigger"
                  :arrow="setting.arrow">
                  <CarouselItem>
                      <div style="display:flex;align-items:center;justify-content:center;">
                        <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf3cbb2b40a326650.jpg" >
                      </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div style="display:flex;align-items:center;justify-content:center;">
                        <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/07/5cf940fa8069733900.jpg" >
                      </div>
                  </CarouselItem>
                  <CarouselItem>
                      <div style="display:flex;align-items:center;justify-content:center;">
                        <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf3cc03ce19b78164.jpg" >
                      </div>
                  </CarouselItem>
                  <CarouselItem>
                      <div style="display:flex;align-items:center;justify-content:center;">
                        <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf3cc1313e6137047.jpg" >
                      </div>
                  </CarouselItem>
              </Carousel>
            </Col>

            <Col span="12">
              <Card :bordered="false" class="Card">
                <p slot="title" style="font-size:1.25rem">新高考资讯</p>
                <p><a class="link-a" @click="guideText">l&nbsp;&nbsp;&nbsp;高考制度改革带来什么？科目自主选择 录取方式多样</a></p>
                <hr>
                <p><a class="link-a" @click="guideText">l&nbsp;&nbsp;&nbsp;最后一次文理分科高考周五开考 明年，北京将开始新高考</a></p>
                <hr>
                <p><a class="link-a" @click="guideText">l&nbsp;&nbsp;&nbsp;“新高考”给孩子选择人生的权利,自己的未来自己设计</a></p>
              </Card>
            </Col>
        </Row>
        <br>
        <br>
        <Row :gutter="64">
            <Col span="12">
              <Card :bordered="false" class="Card">
                <p slot="title" style="font-size:1.25rem">{{sname[0]}}</p>
                <p>
                  <a v-for="index in policyList.length" class="link-a" @click="guideText(index)">
                    {{policyList[index-1].title}}
                    <p></p>
                    <Modal class="modal" v-model="modal" v-bind:title="policyList[count].title" width="1400" @on-ok="ok" @on-cancel="cancel">
                      <p>{{policyList[count].content}}</p>
                    </Modal>
                  </a>
                </p>
              </Card>
            </Col>
            <Col span="12">
              <Card :bordered="false" class="Card">
                <p slot="title" style="font-size:1.25rem">新高考政策详情</p>
                <p><a class="link-a" @click="guideText">>综合素质评价规则</a></p>
                <p><a class="link-a" @click="guideText">>走班制教学模式</a></p>
                <p><a class="link-a" @click="guideText">>新高考改革选科攻略</a></p>
                <p><a class="link-a" @click="guideText">>新政策下学生该做什么</a></p>
                
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
	data(){
		return {
      count: 0,
      modal: false,
      policyList:[],
      sname: ["请先选择省份"],
			title1: '自主招生百问百答',
      title2: '最新自招政策推荐',
      title3: '教育部最新文件以及相应解释',
      content: '',
      value2: 0,
      setting: {
        height: 300,
        autoplay: true,

        autoplaySpeed: 4000,
        dots: 'inside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'always'
      }
		}
	},
	methods: {
    send(){
      this.$http({
          method:'post',
          url:"https://fantuan.wxhulu.com:8086/newEntrancePolicy/getProvince/getNewEntrancePolicy",
          data:{
            "province":this.sname[0]
          }
          }).then(resp =>  {
            console.log(resp);
            this.policyList=resp.data.data;
            // this.title2=resp.data.data[0].title;
            // this.content=resp.data.data[0].content;
          }).catch(resp => {
            console.log('请求失败：'+resp.status+','+resp.statusText);
          });
          },
		backToButtonHome () {
      this.$router.push({
      path: '/buttonHome'
      });        
    },
    guideText(data) {
      this.modal = true;
      this.count = data-1;
    },
    // change(data){
		// 	this.sname = data;
    // },对应上方注释
	}
}
</script>

<style scoped>
.flex-div{
  display: flex;
  flex-direction: row;
  justify-content:space-around;
}
.selector-div{
  float: left;
}
.card-div{
  width: 75rem;
  float: right;
}
.h-AJK{
  font-size: 2.5rem;
}
.PCard{
  background-color: rgb(77, 182, 164,0.5);
}
.Card{
  background-color: rgb(77, 182, 164,0.2)
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
.link-a{
  font-size: 1.25rem;
  color: rgba(228, 217, 217, 0.945);
}
.right-col-textarea {
  float: right;
  background-color: aliceblue;
}
</style>
