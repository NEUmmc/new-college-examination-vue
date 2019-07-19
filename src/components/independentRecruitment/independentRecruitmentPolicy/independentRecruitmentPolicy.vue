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
                    <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf33743ec1b374404.jpg" >
                  </div>
              </CarouselItem>
              
              <CarouselItem>
                 <div style="display:flex;align-items:center;justify-content:center;">
                    <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf379347f04655473.jpg" >
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div style="display:flex;align-items:center;justify-content:center;">
                    <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf33786636fe75874.jpg" >
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div style="display:flex;align-items:center;justify-content:center;">
                    <img style="width:100%;height:auto;" src="https://i.loli.net/2019/06/02/5cf33837781db51167.jpg" >
                  </div>
              </CarouselItem>
          </Carousel>
        </Col>
      
        <Col span="12">
          <Card :bordered="false" class="Card">
            <p slot="title" style="font-size:1.25rem">{{title3}}</p>
            <p><a class="link-a" @click="guideText">l&nbsp;&nbsp;&nbsp;2019自主招生新规出台！名额缩减，学科竞赛或成唯一条件.....</a></p>
            <hr>
            <p><a class="link-a" @click="guideText">l&nbsp;&nbsp;&nbsp;东北大学2019自主招生初审名单！共553人，95%考生无学科竞赛省一奖</a></p>
            <hr>
            <p><a class="link-a" @click="guideText">l&nbsp;&nbsp;&nbsp;夏季高考之前的自主招生与单独招生差异很大，不了解后果很严重</a></p>
            
            
          </Card>
        </Col>
    </Row>
    <br>
    <br>
    <Row :gutter="64">
        <Col span="12">
          <Card :bordered="false" class="Card">
            <p slot="title" style="font-size:1.25rem">{{title1}}</p>
            <p><a class="link-a" @click="guideText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自主招生又称自主选拔，是由高校拿出一定比例的招生名额，在高考的基础上通过院校的综合评价体系的选拔。最终获得拟录取资格的考生在高考成绩达到院校标准时，可在高考录取中享有一定的投档及专业录取优惠。在此说明，自主招生是正常高考的辅助手段，是对高考制度的重要补充，并不是高考的另外招生。</a></p>
            
          </Card>
        </Col>
        <Col span="12">
          <Card :bordered="false" class="Card">
            <p slot="title" style="font-size:1.25rem">{{title2}}</p>
            <p><a class="link-a" @click="guideText">>参加自主招生的作用</a></p>
            <p><a class="link-a" @click="guideText">>参加自主招生的条件</a></p>
            <p><a class="link-a" @click="guideText">>什么样的学生适合参加自主招生</a></p>
            <p><a class="link-a" @click="guideText">>自主招生报考流程</a></p>
            <p><a class="link-a" @click="guideText">>自主招生的优惠政策</a></p>
            <p><a class="link-a" @click="guideText">>自主招生详细时间</a></p>
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
        title1: '自招小讲堂',
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