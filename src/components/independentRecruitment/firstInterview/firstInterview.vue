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
                    <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf3c8daf19aa85817.jpg" >
                  </div>
              </CarouselItem>
              
              <CarouselItem>
                 <div style="display:flex;align-items:center;justify-content:center;">
                    <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf3c8a3998a164658.jpg" >
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div style="display:flex;align-items:center;justify-content:center;">
                    <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf3c9388abce68229.jpg" >
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div style="display:flex;align-items:center;justify-content:center;">
                    <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf3c94a7a14a19658.jpg" >
                  </div>
              </CarouselItem>
          </Carousel>
        </Col>
      
        <Col span="12">
          <Card :bordered="false" class="Card">
            <p slot="title" style="font-size:1.25rem">{{title3}}</p>
            <p><a class="link-a" @click="guideText">l&nbsp;&nbsp;&nbsp;七所高校自主招生初审通过人数减少，与提高报名条件相关，仅一所高校保留笔试</a></p>
            <hr>
            <p><a class="link-a" @click="guideText">l&nbsp;&nbsp;&nbsp;东北大学2019自主招生初审名单！共553人，95%考生无学科竞赛省一奖</a></p>
            <hr>
            <p><a class="link-a" @click="guideText">l&nbsp;&nbsp;&nbsp;2019年高校自主招生成“鸡肋”，5所大学初审人数不足10人！</a></p>
            
            
          </Card>
        </Col>
    </Row>
    <br>
    <br>
    <Row :gutter="64">
        <Col span="12">
          <Card :bordered="false" class="Card">
            <p slot="title" style="font-size:1.25rem">{{title1}}</p>
            <p><a class="link-a" @click="guideText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自主招生初审，即各高校对报名学生提交的申请材料进行审核，综合在校文化成绩以及文体德育情况和竞赛奖项选出合格报名者，审核通过后会在高校官网给出公示</a></p>
            
          </Card>
        </Col>
        <Col span="12">
          <Card :bordered="false" class="Card">
            <p slot="title" style="font-size:1.25rem">{{title2}}</p>
            <p><a class="link-a" @click="guideText">>自主招生报名需要材料</a></p>
            <p><a class="link-a" @click="guideText">>低年级自主招生科学规划</a></p>
            <p><a class="link-a" @click="guideText">>申请材料规范模板</a></p>
            <p><a class="link-a" @click="guideText">>自荐信的书写方式</a></p>
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
        title1: '初审小讲堂',
        title2: '自招初审详情',
        title3: '初审资讯',
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