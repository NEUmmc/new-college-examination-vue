<template>
 <div id="big">
    
	 <!-- <div class="breadcrumb"><Breadcrumb  separator=">" > <Breadcrumb-item class="font" href="/buttonHome"><Icon type="ios-home-outline"></Icon>首页</Breadcrumb-item><Breadcrumb-item><Icon type="ios-search"></Icon>职业测试</Breadcrumb-item></Breadcrumb></div> -->
	<br>
  <h1 class="h-AJK">&nbsp;&nbsp;&nbsp;职业测试</h1>
  <br><br><br>
  <div class="page-div">
    <div class="h-div" id="hDiv">
      <h1>亲爱的20171234，你上一次的测试结果为ASE型，你喜欢的工作要求具备艺术修养、创造力、表达能力和直觉，并将其用于语言、行为、声音、颜色和形式的审美、思索和感受，具备相应的能力。不善于事务性工作。适合你的职业是演员、导演、作曲家、乐队指挥等；可以选择再测一次</h1>
    </div>
    <div class="card-style" id="startDiv">
      <div class="start-div">  
        <h1>霍兰德职业测试</h1>
        <p>
          霍兰德职业兴趣自测（Self-Directed Search）是由美国职业指导专家霍兰德（John Holland）根据他本人大量的职业咨询经验及其职业类型理论编制的测评工具。
          霍兰德认为，个人职业兴趣特性与职业之间应有一种内在的对应关系。根据兴趣的不同，人格可分为研究型（I）、艺术型（A）、社会型（S）、企业型（E）、传统型（C）、现实型（R）六个维度，每个人的性格都是这六个维度的不同程度组合。
        </p>
        <br>
        <Button class="button" @click="startTest">开始测试</Button>
      </div>
    </div>
  </div>

	 	<div class="card-style" id="qDiv" hidden="hidden">
      <!-- 问题 -->
      <div class="div">
        <p>{{index+1}}/60</p>
        <br><br>
        <p>{{questions[index].title}}</p>
  			<br><br><br>
        <div class='button-div'>
          <Button class="button" @click="handleAnswer(1)">是的</Button>
          <Button class="button" @click="handleAnswer(0)">不是</Button>
        </div>
      </div>
		</div>
			
			<!-- 结果 -->
			<div class="card-style" id="endDiv" hidden="hidden">
				<div class="div">
          <h2>{{resultWord}}</h2>
          <p>{{detil}}</p>
				  <p>{{typeWord}}</p>
          <p>{{infoWord}}</p>
        </div>
				<!-- <Button @click="again">再测一次</Button> -->
			</div>
			<!-- 返回按钮 -->
			<Button class="back-button" type="text" @click="backToButtonHome" >
				<Icon type="android-arrow-back" size="32" color="#fff"></Icon>
			</Button>
  </div>

</template>

<script>
export default {
	data(){
		return {
			myResults:[],
      index:0,
      resultWord:"您的霍兰德类型是",
      detil:"",
      typeWord:"",
      infoWord:"",
			questions:[
    {"cateName": "常规型", "cateKey": "C", "cateId": 1, "title": "对别人借我的和我借别人的东西，我都能记得很清楚。", "score": 1},
    {"cateName": "常规型", "cateKey": "C", "cateId": 1, "title": "我喜欢经常请示上级。", "score": 1},
    {"cateName": "常规型", "cateKey": "C", "cateId": 1, "title": "我是一个沉静而不易动感情的人。", "score": 1},
    {"cateName": "常规型", "cateKey": "C", "cateId": 1, "title": "我喜欢按部就班地完成要做的工作。", "score": 1},
    {"cateName": "常规型", "cateKey": "C", "cateId": 1, "title": "我总留有充裕的时间去赴约会。", "score": 1},
    {"cateName": "常规型", "cateKey": "C", "cateId": 1, "title": "我喜欢把一切安排得整整齐齐、井井有条。", "score": 1},
    {"cateName": "常规型", "cateKey": "C", "cateId": 1, "title": "对于急躁、爱发脾气的人，我仍能以礼相待。", "score": 1},
    {"cateName": "常规型", "cateKey": "C", "cateId": 1, "title": "每次写信我都一挥而就，不再重复。", "score": 0},
    {"cateName": "常规型", "cateKey": "C", "cateId": 1, "title": "我办事很少思前想后。", "score": 0},
    {"cateName": "常规型", "cateKey": "C", "cateId": 1, "title": "我希望能经常换不同的工作来做。", "score": 0},
    {"cateName": "现实型", "cateKey": "R", "cateId": 2, "title": "在工作中我喜欢独自筹划，不愿受别人干涉。", "score": 1},
    {"cateName": "现实型", "cateKey": "R", "cateId": 2, "title": "我喜欢在做事情前，对此事情做出细致的安排。", "score": 1},
    {"cateName": "现实型", "cateKey": "R", "cateId": 2, "title": "我喜欢亲自动手制作一些东西，从中得到乐趣。", "score": 1},
    {"cateName": "现实型", "cateKey": "R", "cateId": 2, "title": "我喜欢使用榔头一类的工具。", "score": 1},
    {"cateName": "现实型", "cateKey": "R", "cateId": 2, "title": "如果掌握一门手艺并能以此为生，我会感到非常满意。", "score": 1},
    {"cateName": "现实型", "cateKey": "R", "cateId": 2, "title": "我讨厌修理自行车、电器一类的工作。", "score": 0},
    {"cateName": "现实型", "cateKey": "R", "cateId": 2, "title": "我的动手能力很差。", "score": 0},
    {"cateName": "现实型", "cateKey": "R", "cateId": 2, "title": "我曾渴望当一名汽车司机。", "score": 0},
    {"cateName": "现实型", "cateKey": "R", "cateId": 2, "title": "我讨厌跟各类机械打交道。", "score": 0},
    {"cateName": "现实型", "cateKey": "R", "cateId": 2, "title": "我小时候经常把玩具拆开，把里面看个究竟。", "score": 0},
    {"cateName": "研究型", "cateKey": "I", "cateId": 3, "title": "我经常不停地思考某一问题，直到想出正确的答案。", "score": 1},
    {"cateName": "研究型", "cateKey": "I", "cateId": 3, "title": "我喜欢抽象思维的工作，不喜欢动手的工作。", "score": 1},
    {"cateName": "研究型", "cateKey": "I", "cateId": 3, "title": "我喜欢需要运用智力的游戏。", "score": 1},
    {"cateName": "研究型", "cateKey": "I", "cateId": 3, "title": "当我工作时，我喜欢避免干扰。", "score": 1},
    {"cateName": "研究型", "cateKey": "I", "cateId": 3, "title": "我的理想是当一名科学家。", "score": 1},
    {"cateName": "研究型", "cateKey": "I", "cateId": 3, "title": "我喜欢阅读自然科学方面的书籍和杂志。", "score": 1},
    {"cateName": "研究型", "cateKey": "I", "cateId": 3, "title": "我很难做那种需要持续集中注意力的工作。", "score": 0},
    {"cateName": "研究型", "cateKey": "I", "cateId": 3, "title": "我讨厌学数学。", "score": 0},
    {"cateName": "研究型", "cateKey": "I", "cateId": 3, "title": "在实验室里独自做实验会令我寂寞难耐。", "score": 0},
    {"cateName": "研究型", "cateKey": "I", "cateId": 3, "title": "遇到难解答的问题时，我常常放弃。", "score": 0},
    {"cateName": "管理型", "cateKey": "E", "cateId": 4, "title": "我曾经渴望有机会参加探险。", "score": 1},
    {"cateName": "管理型", "cateKey": "E", "cateId": 4, "title": "和不熟悉的人交谈对我来说毫不困难。", "score": 1},
    {"cateName": "管理型", "cateKey": "E", "cateId": 4, "title": "当我开始做一件事情后，即使碰到再多的困难，我也要执著地干下去。", "score": 1},
    {"cateName": "管理型", "cateKey": "E", "cateId": 4, "title": "我总是主动地向别人提出自己的建议。", "score": 1},
    {"cateName": "管理型", "cateKey": "E", "cateId": 4, "title": "我更喜欢自己下了赌注的比赛或游戏。", "score": 1},
    {"cateName": "管理型", "cateKey": "E", "cateId": 4, "title": "如果待遇相同，我宁愿当商品推销员，而不愿当图书管理员。", "score": 1},
    {"cateName": "管理型", "cateKey": "E", "cateId": 4, "title": "我喜欢在人事部门工作。", "score": 1},
    {"cateName": "管理型", "cateKey": "E", "cateId": 4, "title": "在集体讨论中，我往往保持沉默。", "score": 0},
    {"cateName": "管理型", "cateKey": "E", "cateId": 4, "title": "我愿意从事虽然工资少、但是比较稳定的职业。", "score": 0},
    {"cateName": "管理型", "cateKey": "E", "cateId": 4, "title": "和别人谈判时，我总是很容易放弃自己的观点", "score": 0},
    {"cateName": "社会型", "cateKey": "S", "cateId": 5, "title": "我很容易结识同性朋友。", "score": 1},
    {"cateName": "社会型", "cateKey": "S", "cateId": 5, "title": "我乐于解除别人的痛苦。", "score": 1},
    {"cateName": "社会型", "cateKey": "S", "cateId": 5, "title": "我喜欢作一名教师。", "score": 1},
    {"cateName": "社会型", "cateKey": "S", "cateId": 5, "title": "大家公认我是一名勤劳踏实的、愿为大家服务的人", "score": 1},
    {"cateName": "社会型", "cateKey": "S", "cateId": 5, "title": "我喜欢把一件事情做完后再做另一件事。", "score": 0},
    {"cateName": "社会型", "cateKey": "S", "cateId": 5, "title": "当我一个独处时，会感到更愉快。", "score": 0},
    {"cateName": "社会型", "cateKey": "S", "cateId": 5, "title": "我喜欢参加各种各样的聚会。", "score": 0},
    {"cateName": "社会型", "cateKey": "S", "cateId": 5, "title": "对于社会问题，我通常持中庸的态度。", "score": 0},
    {"cateName": "社会型", "cateKey": "S", "cateId": 5, "title": "听别人谈“家中被盗”一类的事，很难引起我的同情。", "score": 0},
    {"cateName": "社会型", "cateKey": "S", "cateId": 5, "title": "和一群人在一起的时候，我总想不出恰当的话来说。", "score": 0},
    {"cateName": "艺术型", "cateKey": "A", "cateId": 6, "title": "我喜欢做戏剧、音乐、歌舞、新闻采访等方面的工作。", "score": 1},
    {"cateName": "艺术型", "cateKey": "A", "cateId": 6, "title": "我喜欢成为人们注意的焦点。", "score": 1},
    {"cateName": "艺术型", "cateKey": "A", "cateId": 6, "title": "我喜欢不时地夸耀一下自己取得的好成就。", "score": 1},
    {"cateName": "艺术型", "cateKey": "A", "cateId": 6, "title": "音乐能使我陶醉。", "score": 1},
    {"cateName": "艺术型", "cateKey": "A", "cateId": 6, "title": "有些人太霸道，有时明明知道他们是对的，也要和他们对着干。", "score": 1},
    {"cateName": "艺术型", "cateKey": "A", "cateId": 6, "title": "我爱幻想。", "score": 1},
    {"cateName": "艺术型", "cateKey": "A", "cateId": 6, "title": "当接受新任务后，我喜欢以自己的独特方法去完成它。", "score": 1},
    {"cateName": "艺术型", "cateKey": "A", "cateId": 6, "title": "我有文艺方面的天赋。", "score": 1},
    {"cateName": "艺术型", "cateKey": "A", "cateId": 6, "title": "看情感影片时，我常禁不住眼圈红润。", "score": 1},
    {"cateName": "艺术型", "cateKey": "A", "cateId": 6, "title": "与言情小说相比，我更喜欢推理小说。", "score": 0}
],
			results:[
  {
    cateKey: 'R',
    cateName: '实际型',
    score: 0,
    type: '家里你说了算',
    info: '愿意使用工具从事操作性工作，动手能力强，做事手脚灵活，动作协调。偏好于具体任务，不善言辞，做事保守，较为谦虚。缺乏社交能力，通常喜欢独立做事。'
  },
  {
    cateKey: 'C',
    cateName: '常规型',
    score: 0,
    type: '非常细心的人，另一半很幸福',
    info: '尊重权威和规章制度，喜欢按计划办事，细心、有条理，习惯接受他人的指挥和领导，自己不谋求领导职务。喜欢关注实际和细节情况，通常较为谨慎和保守，缺乏创造性，不喜欢冒险和竞争，富有自我牺牲精神。'
  },
  {
    cateKey: 'E',
    cateName: '企业型',
    score: 0,
    type: '你就是传说中的领导',
    info: '追求权力、权威和物质财富，具有领导才能。喜欢竞争、敢冒风险、有野心、抱负。为人务实，习惯以利益得失，权利、地位、金钱等来衡量做事的价值，做事有较强的目的性。'
  },
  {
    cateKey: 'S',
    cateName: '社会型',
    score: 0,
    type: '没办法，你到处都有朋友',
    info: '喜欢与人交往、不断结交新的朋友、善言谈、愿意教导别人。关心社会问题、渴望发挥自己的社会作用。寻求广泛的人际关系，比较看重社会义务和社会道德。'
  },
  {
    cateKey: 'A',
    cateName: '艺术型',
    score: 0,
    type: '没错，艺术家就该留长发',
    info: '有创造力，乐于创造新颖、与众不同的成果，渴望表现自己的个性，实现自身的价值。做事理想化，追求完美，不重实际。具有一定的艺术才能和个性。善于表达、怀旧、心态较为复杂。'
  },
  {
    cateKey: 'I',
    cateName: '研究型',
    score: 0,
    type: '很牛逼（除了头发）',
    info: '思想家而非实干家,抽象思维能力强，求知欲强，肯动脑，善思考，不愿动手。喜欢独立的和富有创造性的工作。知识渊博，有学识才能，不善于领导他人。考虑问题理性，做事喜欢精确，喜欢逻辑分析和推理，不断探讨未知的领域。'
  }
]
		}
	},
	methods: {
		backToButtonHome () {
            this.$router.push({
                 path: '/buttonHome'
            });        
		},

		startTest(){
      document.getElementById("startDiv").hidden="hidden";
      document.getElementById("hDiv").hidden="hidden";
			document.getElementById("qDiv").hidden=null;
    },
    
    handleAnswer (answer) {
      var now = this._data.index;
      var question = this._data.questions[now];
      if(now == 59){
        console.log("ssssss")
        this.showResult();
      }else{
      if(question.cateKey == "R") {
        this._data.results[0].score += answer === question.score ? 1 : 0
      } 
      else if(question.cateKey == "C") {
        this._data.results[1].score += answer === question.score ? 1 : 0 
      } 
      else if(question.cateKey == "E") {
        this._data.results[2].score += answer === question.score ? 1 : 0
      }
      else if(question.cateKey == "S") {
        this._data.results[3].score += answer === question.score ? 1 : 0
      }
      else if(question.cateKey == "A") {
        this._data.results[4].score += answer === question.score ? 1 : 0
      }
      else{
        this._data.results[5].score += answer === question.score ? 1 : 0
      }
      this._data.index++;
      }
    },

    showResult(){
      console.log("jdfkaljdf")
      var result = this._data.results;
      result.sort((x, y) => {
        if (x.score > y.score) {
          return -1
        } else if (x.score < y.score) {
          return 1;
        } else {
          return 0;
        }
      })
      this.resultWord += result[0].cateKey + result[1].cateKey + result[2].cateKey;
      this.detil += result[0].cateKey + "（" + result[0].cateName + "）" + result[1].cateKey + "（" + result[1].cateName + "）" + result[2].cateKey + "（" + result[2].cateName + "）";
      this.typeWord += result[0].type;
      this.infoWord += result[0].info;
      document.getElementById("qDiv").hidden="hidden";
			document.getElementById("endDiv").hidden=null;
    },

		// again(){
		// 	this.index=0;
		// 	document.getElementById("qDiv").hidden=null;
		// 	document.getElementById("endDiv").hidden="hidden";
		// 	this.myResults = {};
		// },
		
	}
}
</script>

<style>
.page-div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.h-div{
  width: 60rem;
  color: wheat;
}
.h-AJK{
  font-size: 2.5rem;
}
.start-div{
	font-size: 1.5rem;
	color: wheat;
  flex-direction: column;
  display:flex;
	align-items:center;
}
.div{
	
	font-size: 1.7rem;
	color: wheat;
  flex-direction: column;
  display:flex;
	align-items:center;
}
/* .p-center{
	display:flex;
	align-items:center;
	justify-content:center;
} */
.button-div{
  display:flex;
  width: 80%;
  justify-content:space-around;
}
.button{
  width: 7rem;
  height: 3rem;
  background-color: rgb(233, 175, 17);
  font-size: 1.2rem;
  border: none;
  color: white;
  border-radius: 0.3rem;
}
.card-style{
	background-color: rgb(77, 182, 164,0.3);
	width: 60rem;
	height: 25rem;
	margin: 2rem auto 0;
	
}
.breadcrumb{
	padding:0.65rem;
	background-color: aliceblue
}
.back-button{
	position: fixed;
	bottom: 2rem;
}
#big{
	color:white;
}

</style>
