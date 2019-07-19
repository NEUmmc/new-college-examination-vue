<template>
  <div class="font">
        <!-- 查看成绩<div class="breadcrumb"><Breadcrumb  separator=">" ><Breadcrumb-item class="font" href="/buttonHome"><Icon type="ios-home-outline"></Icon>首页</Breadcrumb-item><Breadcrumb-item ><Icon type="ios-search"></Icon>查看成绩</Breadcrumb-item></Breadcrumb></div> -->
		<br>
		<h1 class="h-AJK">&nbsp;&nbsp;&nbsp;查看成绩</h1>
		<br>
		<br>
		
			
			
			<div class="flex-div-score">
				<div class="h-div-score">
      		<h1>亲爱的20171234，以下为你近三次录入的成绩</h1>
    		</div>
				<br><br><br>
				<div class="card-div-score">
					<Card :bordered="false" class="PCard">
						<Row :gutter="64">  
							<Col span="8">
								<Card :bordered="false" class="Card">
									<p style="font-size:1.3rem;">语文成绩：120</p> 
									<p style="font-size:1.3rem;">数学成绩：145</p> 
									<p style="font-size:1.3rem;">英语成绩：139</p> 
									<p style="font-size:1.5rem;color: rgb(228, 206, 177)">理科成绩：</p> 
									<p style="font-size:1.3rem;">物理成绩：90</p> 
									<p style="font-size:1.3rem;">化学成绩：80</p> 
									<p style="font-size:1.3rem;">生物成绩：80</p>
									<p style="font-size:1.5rem;color: rgb(228, 206, 177)">文科成绩：</p> 
									<p style="font-size:1.3rem;">政治成绩：70</p> 
									<p style="font-size:1.3rem;">历史成绩：60</p> 
									<p style="font-size:1.3rem;">地理成绩：80</p>
								</Card>
							</Col>
							<Col span="8">
								<Card :bordered="false" class="Card">
									<p style="font-size:1.3rem;">语文成绩：121</p> 
									<p style="font-size:1.3rem;">数学成绩：148</p> 
									<p style="font-size:1.3rem;">英语成绩：144</p> 
									<p style="font-size:1.5rem;color: rgb(228, 206, 177)">理科成绩：</p> 
									<p style="font-size:1.3rem;">物理成绩：95</p> 
									<p style="font-size:1.3rem;">化学成绩：86</p> 
									<p style="font-size:1.3rem;">生物成绩：88</p>
									<p style="font-size:1.5rem;color: rgb(228, 206, 177)">文科成绩：</p> 
									<p style="font-size:1.3rem;">政治成绩：75</p> 
									<p style="font-size:1.3rem;">历史成绩：67</p> 
									<p style="font-size:1.3rem;">地理成绩：75</p>
								</Card>
							</Col>    
							<Col span="8">
								<Card :bordered="false" class="Card">
									<p style="font-size:1.3rem;">语文成绩：115</p> 
									<p style="font-size:1.3rem;">数学成绩：145</p> 
									<p style="font-size:1.3rem;">英语成绩：140</p> 
									<p style="font-size:1.5rem;color: rgb(228, 206, 177)">理科成绩：</p> 
									<p style="font-size:1.3rem;">物理成绩：91</p> 
									<p style="font-size:1.3rem;">化学成绩：88</p> 
									<p style="font-size:1.3rem;">生物成绩：88</p>
									<p style="font-size:1.5rem;color: rgb(228, 206, 177)">文科成绩：</p> 
									<p style="font-size:1.3rem;">政治成绩：70</p> 
									<p style="font-size:1.3rem;">历史成绩：65</p> 
									<p style="font-size:1.3rem;">地理成绩：75</p>
								</Card>
							</Col>
						</Row>
					</Card>
				</div>
				<br><br><br>
				<div class="button-div">
					<Button class="button" @click="inputScore">录入成绩</Button>
      		<Button class="button" @click="recommend">选科推荐</Button>
				</div>
			</div>
			
			<Modal class="modal" v-model="inputScoreModal" width="600">
          <p slot="header" style="color:rgb(241, 123, 123);   text-align:center;font-size:1.25rem;">录入成绩</p>
          <p style="font-size:1.3rem;">语文成绩：&nbsp;&nbsp;<Input v-model="value" size="big" style="width: 300px" /></p>
					<br> 
					<p style="font-size:1.3rem;">数学成绩：&nbsp;&nbsp;<Input v-model="value" size="big" style="width: 300px" /></p> 
			  	<br>
					<p style="font-size:1.3rem;">英语成绩：&nbsp;&nbsp;<Input v-model="value" size="big" style="width: 300px" /></p> 
					<br>
					<p style="font-size:1.5rem;color: rgb(228, 206, 177)">理科成绩：</p> 
					<br>
					<p style="font-size:1.3rem;">物理成绩：&nbsp;&nbsp;<Input v-model="value" size="big" style="width: 300px" /></p> 
					<br>
					<p style="font-size:1.3rem;">化学成绩：&nbsp;&nbsp;<Input v-model="value" size="big" style="width: 300px" /></p> 
					<br>
					<p style="font-size:1.3rem;">生物成绩：&nbsp;&nbsp;<Input v-model="value" size="big" style="width: 300px" /></p>
					<br>
					<p style="font-size:1.5rem;color: rgb(228, 206, 177)">文科成绩：</p> 
					<br>
					<p style="font-size:1.3rem;">政治成绩：&nbsp;&nbsp;<Input v-model="value" size="big" style="width: 300px" /></p> 
					<br>
					<p style="font-size:1.3rem;">历史成绩：&nbsp;&nbsp;<Input v-model="value" size="big" style="width: 300px" /></p> 
					<br>
					<p style="font-size:1.3rem;">地理成绩：&nbsp;&nbsp;<Input v-model="value" size="big" style="width: 300px" /></p>
					
				
          <div slot="footer">
              <i-button
                  type="circle"
                  size="large"
                  style="width:100%;background-color:#ff9999;color:white;"
                  @click="inputScoreModal=false"
                >确定</i-button>
          </div>
      </Modal>

			<Modal class="modal" v-model="recommendModal" width="800">
          <p slot="header" style="color:rgb(241, 123, 123);   text-align:center;font-size:1.25rem;">选科推荐</p>
          <p class="modal-font">请选择你想学习的专业</p>
					<Select v-model="model1" style="width:200px">
        		<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    			</Select>
					<br><br><br>
						<p class="modal-font">你选择的专业为软件工程</p>
						<p class="modal-font">该专业的必考科目为：物理</p>
						<p class="modal-font">根据你已录入的成绩信息，为你推荐选科如下</p>
						<p class="modal-font">1.物理+化学+生物</p>
						<p class="modal-font">2.物理+化学+地理</p>
					
					<div slot="footer"></div>
          <!-- <div slot="footer">
              <i-button
                  type="circle"
                  size="large"
                  style="width:100%;background-color:#ff9999;color:white;"
                  @click="recommendModal=false"
                >确定</i-button>
          </div> -->
      </Modal>

			
			<div>
					<Button class="back-button" type="text" @click="backToButtonHome" >
						<Icon type="android-arrow-back" size="32" color="#fff"></Icon>
					</Button>
				</div>
			</div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			cityList: [
                    {
                        value: 'New York',
                        label: '软件工程'
                    },
                    {
                        value: 'London',
                        label: '计算机科学与技术'
                    },
                    {
                        value: 'Sydney',
                        label: '电子信息'
                    },
                    {
                        value: 'Ottawa',
                        label: '哲学'
                    },
                    {
                        value: 'Paris',
                        label: '物理学'
                    },
                    {
                        value: 'Canberra',
                        label: '经济管理'
                    }
                ],
			inputScoreModal: false,
			recommendModal:false,
			scores: 0, 
			chinese: 0, 
			math: 0, 
			english: 0, 
			physics: 0, 
			chemistry: 0, 
			biology: 0, 
			politics: 0, 
			history: 0, 
			geography: 0,
		}
	},
	methods: {
		checkScores(){
				console.log(this.gradeSelection);				 
				this.scores = 0, 
				this.chinese = 118, 
				this.math = 135, 
				this.english = 136, 
				this.physics = 76, 
				this.chemistry = 83, 
				this.biology = 75, 
				this.politics = 75, 
				this.history = 63, 
				this.geography = 70
		},
		backToButtonHome () {
            this.$router.push({
                 path: '/buttonHome'
            });        
		},
		inputScore(){
			this.inputScoreModal = true;
		},
		recommend(){
			this.recommendModal = true;
		},
	}
}

</script>

<style>
.button{
  width: 7rem;
  height: 3rem;
  background-color: rgb(233, 175, 17);
  font-size: 1.2rem;
  border: none;
  color: white;
  border-radius: 0.3rem;
}
.button-div{
  display:flex;
  width: 80%;
  justify-content:space-around;
}
.modal-font{
    font-size: 1.2rem;
}
.card-div-score{
	width: 90%
}
.flex-div-score{ 
  display: flex;
  flex-direction: column;
  align-items: center;
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
.h-div-score{
	font-size: 1.1rem;
  color: wheat;
	
}
.score{
	background-color: rgb(99, 180, 201);
	font-size: 1rem;
}

.back-button{
	position: fixed;
	bottom: 2rem;
}
.font{
	color: aliceblue
}


</style>
