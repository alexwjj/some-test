<template>
  <div class="home">
    <div class="home-search">
      <input
        type="text"
        v-model.trim="userName"
        placeholder="请输入姓名搜索"
        style="margin-right: 20px"
      />
      <select v-model="level">
        <option v-for="(item, index) in levels" :key="index" :value="index">{{
          item
        }}</option>
      </select>
    </div>
    <div class="home-table">
      <div class="home-content">
        <div class="home-cell-title">姓名</div>
        <div class="home-cell-title" style="border-right:none;">等级</div>
      </div>
      <div v-for="(item, index) in tableList" :key="index" class="home-content">
        <div
          class="home-cell-item"
          :style="index % 2 === 0 ? '' : 'background-color:#f5f7fa'"
        >
          {{ item.name }}
        </div>
        <div
          class="home-cell-item"
          style="border-right:none;"
          :style="index % 2 === 0 ? '' : 'background-color:#f5f7fa'"
        >
          {{ levels[item.level] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      userName: "",
      level: 0,
      list: [
        { name: "name1", level: 1 },
        { name: "name2", level: 2 },
        { name: "name3", level: 2 },
        { name: "name4", level: 2 },
        { name: "name5", level: 3 },
        { name: "name6", level: 2 },
        { name: "name7", level: 1 },
        { name: "name8", level: 2 },
        { name: "name9", level: 5 },
        { name: "name10", level: 1 },
        { name: "name11", level: 3 },
        { name: "name12", level: 4 },
      ],
      tableList: [],
      levels: {
        0: "全部",
        1: "入门",
        2: "初级",
        3: "进阶",
        4: "高级",
        5: "专家",
      },
    };
  },
  watch: {
      userName(val) {
          if(!val) {
              this.tableList = this.list
          } else {
              this.tableList = this.list.filter(v => {
                //   if(v.level === +this.level) {
                      return v.name === val
                //   }
              })
          }
      },
      level(val) {
        //   console.log(val, 'val');
          if(+val === 0) {
              this.tableList = this.list
          } else {
              this.tableList = this.list.filter(v => v.level === +val)
          }
      }
  },
  computed: {},
  mounted() {
      this.tableList = this.list
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.home-search {
  margin-bottom: 20px;
}
.home-content {
  display: flex;
  .home-cell-title {
    width: 50%;
    border-right: 1px solid white;
    text-align: center;
    background-color: #666;
    height: 30px;
    line-height: 30px;
  }
  .home-cell-item {
    width: 50%;
    border-right: 2px solid white;
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
}
</style>
