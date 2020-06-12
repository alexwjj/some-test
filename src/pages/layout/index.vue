<template>
  <div class="layout">
    <div style="height: 60px;background-color:white; position:relative;">
      <div class="layout-header">
        <div class="header-logo" @click="$router.push({path:'/login'})">关心桥教育</div>
        <div style="display:flex; align-items:center">
          <el-menu
            :default-active="activePath"
            class="header-menu"
            text-color="#5d5e5d"
            active-text-color="#e72934"
            mode="horizontal"
            router
            @select="handleSelect"
          >
            <el-menu-item index="/classroom">精品课程</el-menu-item>
            <el-menu-item index="/cloudroom">云课堂</el-menu-item>
            <el-menu-item index="/home">素养</el-menu-item>
            <el-menu-item index="/miniroom">微课中心</el-menu-item>
            <el-menu-item index="/about">下载客户端</el-menu-item>
          </el-menu>
        </div>
      </div>
              <div class="header-right">
          <el-autocomplete
          popper-class="my-autocomplete"
          v-model="state"
          size="mini"
          multiple
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect2"
          clearable
        >
          <i
            class="el-icon-search el-input__icon"
            slot="suffix"
            @click="handleIconClick"
          >
          </i>
          <template slot-scope="{ item }">
            <div class="name">{{ item.value }}</div>
          </template>
        </el-autocomplete>
        <div>
          <el-button class='btn-login' size="mini">登录</el-button>
          <el-button type="danger" size="mini">注册</el-button>
        </div>
        </div>
    </div>
    <div class="layout-main">
      <router-view></router-view>
    </div>
    <!-- <div class="layout-footer">
      footer
    </div> -->
  </div>
</template>

<script>
export default {
  name: "layout",
  components: {},
  data() {
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: [],
      activeIndex: "home",
      menuList: [],
      userInfo: "",
      restaurants: [],
        state: ''
    };
  },
  watch: {},
  computed: {
    activePath() {
      return this.$route.path;
    },
  },
  mounted() {
    console.log(this.$route.path, 'this.$route.path;');
    this.$router.push({path: '/home'})
    console.log(this.$route.path, 'this.$route.path;');
    this.restaurants = this.loadAll();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "语文", "address": "微医" },
          { "value": "数学", "address": "微医" },
          { "value": "英语", "address": "微医" },
          { "value": "前端", "address": "微医" }
        ]
      },
      handleSelect2(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
  },
};
</script>
<style lang="less" scoped>
.layout {
  height: 60px;
  .layout-header {
    display: flex;
    width: 70vw;
    color: #5d5e5d;
    background-color: white;
    margin: 0 auto;
    .header-logo {
      width: 10vw;
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      cursor: pointer;
    }
    .header-menu {
      display: flex;
      width: 30vw;
    }
    
  }
  .header-right{
      position: absolute;
      top: 15px;
      right: 40px;
      display: flex;
      align-items: center;
      width: 30vw;
      justify-content: space-between;
      margin-left: 50px
    }
    .btn-login{
      color: #e72934;
      border-color: #e72934;
    }
  .layout-main {
    width: 70vw;
    margin: 0 auto;
  }
  .el-menu.el-menu--horizontal {
    border: none;
  }
  .el-menu--horizontal > .el-menu-item {
    height: 40px;
    margin-right: 20px;
    line-height: 40px;
  }
  .el-button--mini{
    border-radius: 15px;
  }
}
</style>
