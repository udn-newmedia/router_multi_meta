<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">台北頁主頁</router-link>|
      <router-link to="/eslite">走入歷史的誠品敦南店</router-link>|
      <router-link to="/taipei-main-station">在北車停下腳步的理由</router-link>|
      <router-link to="/sense-of-calling">台北人的使命感</router-link>|
      <router-link to="/democracy">上凱道的一百種方式</router-link>|
      <router-link to="/ximen">迎向陽光的同志文化</router-link>|
      <router-link to="/stand-up-comedy">用喜劇收服難搞的台北人</router-link>|
      <router-link to="/food">台北人的味蕾</router-link>|
      <router-link to="/causeway-bay-books">為什麼台北需要銅鑼灣書店？</router-link>|
      <router-link to="/paradox">台北正處於矛盾、拉扯的狀態</router-link>|
    </div>

    <transition :name="transitionName">
      <router-view /> 
    </transition>

    <transition name="fade">
      <p v-if="show">
        <img alt="Vue logo" src="./assets/logo.png" /><br>
        WPWWOWOWO
      </p>
    </transition>
    <hr />
    <div>分享</div>
    <router-link to="/independent-bookstore">獨立書店</router-link>|
    <router-link to="/LGBT-culture">同志文化</router-link>|
    <router-link to="/globalization">國際化</router-link>|
    <router-link to="/bars">特色酒吧</router-link>|
    <router-link to="/art-and-cuture">藝文風氣</router-link>|
    <router-link to="/ketagalan-blvd">凱達格蘭大道</router-link>

    <br />
    <br />

    <!-- <img :src="{{urlpath}}"> -->
    {{$route.name}}
    {{foo}}
    <br />
    <br />1.分享方式，轉貼網址
    <br />2.按鈕分享方式
    <button @click="shareFB">分享</button>
    <button v-on:click="show = !show">Toggle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlpath: "www",
      show: true,
      transitionName:'',
    };
  },
  methods: {
    imgChange(s) {
      alert(s);
      return s;
    },
    shareFB() {
      // this.data.urlpath = this.$route.name
      // alert(this.$route.name)
      window.open(
        "https://www.facebook.com/dialog/share?app_id=1010324812347164&display=popup&href=http://nmdap.udn.com.tw/test/meta2/" +
          this.$route.name +
          "&redirect_uri=http://nmdap.udn.com.tw/test/meta2/" +
          this.$route.name,
        "新視窗的名稱"
      );
      // https://www.facebook.com/dialog/share?app_id=1010324812347164&display=popup&href=http://nmdap.udn.com.tw/test/meta2/&redirect_uri=http://nmdap.udn.com.tw/test/meta2/
    }
  },
  watch:{
    $route(to, from) {
      console.log(to.meta)
      console.log(from.meta)
      
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      if(toDepth>fromDepth){
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    //   const toDepth = to.path.split('/').length
    // const fromDepth = from.path.split('/').length
    // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
    
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}



.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 1000ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
