<template>
    <div class="font">
        <div class="breadcrumb">
            <Breadcrumb separator=">">
                <Breadcrumb-item class="font" href="/buttonHome">
                    <Icon type="ios-home-outline"></Icon>首页
                </Breadcrumb-item>
                <Breadcrumb-item>
                    <Icon type="ios-search"></Icon>志愿填报查询
                </Breadcrumb-item>
            </Breadcrumb>
        </div>
        <br>

        <div>
            <span class="title">志愿填报信息了解</span>
            <ul class="gongjulist clearfix">
                <li>
                    <span>双一流建设高校</span>
                </li>
                <li>
                    <span>985工程高校</span>
                </li>
                <li>
                    <span>211工程高校</span>
                </li>
                <li>
                    <span>普通高校</span>
                </li>
                <li>
                    <span>民办高校</span>
                </li>
                <li>
                    <span>独立学院</span>
                </li>
                <li>
                    <span>双一流建设学科</span>
                </li>
                <li>
                    <span>国家重点学科</span>
                </li>
                <li>
                    <span>热门专业解读</span>
                </li>
                <li>
                    <span>本科专业</span>
                </li>
                <li>
                    <span>专科专业</span>
                </li>
                <li>
                    <span>历年高考分数线</span>
                </li>
                <li>
                    <span>一分一段</span>
                </li>
                <li>
                    <span>艺体特长生专栏</span>
                </li>
                <li>
                    <span>自主招生专栏</span>
                </li>
                <li>
                    <span>免费师范生</span>
                </li>
                <li>
                    <span>艺术高考</span>
                </li>
                <li>
                    <span>招飞专栏</span>
                </li>
                <li>
                    <span>保送生</span>
                </li>
                <li>
                    <span>院校投档分数线</span>
                </li>
                <li>
                    <span>专业服从调剂</span>
                </li>
                <li>
                    <span>提档分数线</span>
                </li>
                <li>
                    <span>平行志愿</span>
                </li>
                <li>
                    <span>分数级差</span>
                </li>
                <li>
                    <span>服从志愿</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return { msg: "comprehensiveAssessment" };
    }
};
</script>

<style scoped>
.breadcrumb {
    padding: 0.65rem;
    background-color: aliceblue;
}
.font {
    color: aliceblue;
}
.title::before {
    content: "";
    width: 5px;
    height: 16px;
    display: inline-block;
    margin-right: 10px;
    border-radius: 4px;
    background-color: #0d9ae6;
    vertical-align: -2px;
}
.title {
    font-size: 1rem;
}
</style>