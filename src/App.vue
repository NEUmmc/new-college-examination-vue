<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
html,
body {
    width: 100%;
    height: 100%;
    min-height: 300px;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
    width: 100%;
    height: 100%;
    /* 天蓝 */
    background: url(https://i.loli.net/2019/06/02/5cf2b6a45c14717905.jpg);
    /* 深蓝 */
    /* background: url(https://i.loli.net/2019/06/02/5cf32be023a4930862.jpg); */
    /* 十年寒窗 */
    /* background: url(https://i.loli.net/2019/06/02/5cf32cbb3337a71043.jpg); */
    /* 风雨兼程 */
    /* background: url(https://i.loli.net/2019/06/02/5cf32d75dc33233289.jpg); */
    
    box-shadow: inset 0 0 1px 0 rgba(255, 255, 255, 0.5);
    /* background: linear-gradient(
        48deg,
        #c4759c,
        #7aa3cc,
        #d18f69,
        #88b172,
        #cf5d5d
    ); */
    background-size: 100% 100%;

    /* -webkit-animation: AnimationName 50s ease infinite;
    -moz-animation: AnimationName 50s ease infinite;
    -o-animation: AnimationName 50s ease infinite;
    animation: AnimationName 50s ease infinite; */
}

@-webkit-keyframes AnimationName {
    0% {
        background-position: 0% 42%;
    }
    50% {
        background-position: 100% 59%;
    }
    100% {
        background-position: 0% 42%;
    }
}
@-moz-keyframes AnimationName {
    0% {
        background-position: 0% 42%;
    }
    50% {
        background-position: 100% 59%;
    }
    100% {
        background-position: 0% 42%;
    }
}
@-o-keyframes AnimationName {
    0% {
        background-position: 0% 42%;
    }
    50% {
        background-position: 100% 59%;
    }
    100% {
        background-position: 0% 42%;
    }
}
@keyframes AnimationName {
    0% {
        background-position: 0% 42%;
    }
    50% {
        background-position: 100% 59%;
    }
    100% {
        background-position: 0% 42%;
    }
}
</style>
