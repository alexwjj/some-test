<template>
  <div class="layout">
    <div class="layout-header">
      <div class="layout-logo">奥吉朗</div>
      <div>
        <span>admin</span>
        <span @click="logout" class="logout-btn">退出</span>
      </div>
    </div>
    <div class="layout-main">
      <div class="layout-side">
        <div
          v-for="(item, index) in menuList"
          :key="index"
          @click="$router.push({ path: item.path })"
          class="layout-side-item"
        >
          <span :class="activePath === item.path ? 'layout-side-active': ''">{{ item.name }}</span>
        </div>
      </div>
      <div class="layout-content">
        <router-view></router-view>
      </div>
    </div>
    <div class="layout-footer">
      杭州奥吉朗物联网有限公司
    </div>
  </div>
</template>

<script>
export default {
  name: "layout",
  components: {},
  data() {
    return {
      menuList: [],
      userInfo: '',
    };
  },
  watch: {},
  computed: {
      activePath() {
          return this.$route.path
      }
  },
  mounted() {
    console.log(this.$route, "this.$route")
    this.handleSidebar();
  },
  methods: {
      logout() {
          sessionStorage.clear();
          this.$router.push('/login');
      },
    handleSidebar() {
      const routerList = this.$router.options.routes;
      routerList.forEach((v) => {
        if (v.name === "layout") {
          this.menuList.push(...v.children);
        }
      });
      this.$router.push({path: this.menuList[0].path})
      //   console.log(this.menuList, 'this.menuList');
    },
  },
};
</script>
<style lang="less" scoped>
.layout {
    .logout-btn{
        display:inline-block;
        width: 50px;
        height: 30px;
        border: 1px solid #3e7fee;
        border-radius: 4px;
        font-size: 16px;
        line-height:30px;
        text-align: center;
        margin-left: 10px;
    }
  .layout-header {
    display: flex;
    color: #3e7fee;
    font-size: 20px;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
    padding: 0px 30px;
    border-bottom: 1px solid #ccc;
  }
  .layout-main {
     display: flex;
    .layout-side {
      width: 200px;
      height: 92vh;
      background-color: #3e7fee;
      .layout-side-item {
        height: 5vh;
        line-height: 5vh;
        text-align: center;
        color: white;
        cursor: pointer;
      }
      .layout-side-active{
          color: #ffbd62;
      }
    }
    .layout-content {
      padding: 20px;
      flex:1;
    //   background-color: blue;
    }
  }

  .layout-footer {
    height: 3vh;
    line-height: 3vh;
    color: white;
    text-align: center;
    background-color: black;
  }
}
</style>
