<template>
     
  <div>
    <!-- 使用栅格构建布局 -->
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
                    <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf3ca4099da696306.jpg" >
                  </div>
              </CarouselItem>
              
              <CarouselItem>
                 <div style="display:flex;align-items:center;justify-content:center;">
                    <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf3ca8734d3722160.jpg" >
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div style="display:flex;align-items:center;justify-content:center;">
                    <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf3ca8182dae67116.jpg" >
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div style="display:flex;align-items:center;justify-content:center;">
                    <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf3caef723d839032.jpg" >
                  </div>
              </CarouselItem>
          </Carousel>
        </Col>
      
        <Col span="12">
          <Card :bordered="false" class="Card">
            <p slot="title" style="font-size:1.25rem">{{title3}}</p>
            <p><a class="link-a" @click="guideText">l&nbsp;&nbsp;&nbsp;2019年自主招生复试降分与录取匹配分析：今年大部分高校自主招生的匹配率比较低，尤其是文科类的。</a></p>
            <hr>
            <p><a class="link-a" @click="guideText">l&nbsp;&nbsp;&nbsp;天津大学2019自主招生初审共通过695人！附天大复试备考指南</a></p>
            <hr>
            <p><a class="link-a" @click="guideText">l&nbsp;&nbsp;&nbsp;清华自主招生复试　H7N9禽流感进考题</a></p>

          </Card>
        </Col>
    </Row>
    <br>
    <br>
    <Row :gutter="64">
        <Col span="12">
          <Card :bordered="false" class="Card">
            <p slot="title" style="font-size:1.25rem">{{title1}}</p>
            <p><a class="link-a" @click="guideText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自主招生复试包括面试和笔试两个部分，面试主要考查学生平时知识积累和自身综合素质，采取由大学老师（一般 3-5 人）对考生进行个人问答或随机小组讨论的形式；笔试主要考查学生的实际应用能力，知识覆盖极广</a></p>
            
          </Card>
        </Col>
        <Col span="12">
          <Card :bordered="false" class="Card">
            <p slot="title" style="font-size:1.25rem">{{title2}}</p>
            <p><a class="link-a" @click="guideText">>自主招生复试排名计算</a></p>
            <p><a class="link-a" @click="guideText">>自主招生笔试科目题型</a></p>
            <p><a class="link-a" @click="guideText">>自主招生的院校志愿填报</a></p>
            <p><a class="link-a" @click="guideText">>笔试面试服装要求</a></p>
            <p><a class="link-a" @click="guideText">>自主招生笔试难度</a></p>
            
          </Card>
        </Col>
    </Row>
    </Card>
    <Modal class="modal" v-model="modal" width="1000" @on-ok="ok" @on-cancel="cancel">
      <p>{{title1}}</p>
    </Modal>

	</div>

</template>

<script>
  export default {
    data () {
      return {
        title1: '复试小讲堂',
        title2: '自主招生详情',
        title3: '最新资讯',
        value2: 0,
        modal: false,
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
    methods:{
      guideText() {
            this.modal = true;
        }
    }
  }
</script>
<style>
  .PCard{
    background-color: rgb(77, 182, 164,0.5);
  }
  .Card{
    background-color: rgb(77, 182, 164,0.2)
  }
  a:hover{
   color:rgb(218, 211, 123);
  }
  .link-a{
    font-size: 1.25rem;
    color: rgba(228, 217, 217, 0.945);
  }
</style>