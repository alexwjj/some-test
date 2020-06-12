<template>
  <div class="home">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      class="home-ebreadcrumb"
    >
      <el-breadcrumb-item>素养</el-breadcrumb-item>
      <el-breadcrumb-item>推荐</el-breadcrumb-item>
      <el-breadcrumb-item>宪法系列剧</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="home-content">
      <video src="" controls="controls" class="home-video"></video>
      <div class="home-select">
        <h4>宪法系列剧：第二集 我国宪法是怎么诞生的</h4>
        <div style="margin-top: 20px;border-bottom:1px solid #f5f5f8;font-size:14px;">
          <span class="tab-icon" @click="isShowTabList = !isShowTabList">
          <i class="el-icon-user"></i><span style="margin:0 5px">宪法达人</span
          >
          <i class="el-icon-arrow-up" v-if="isShowTabList"></i>
          <i class="el-icon-arrow-down" v-else></i>
          </span>
          <span style="margin-left: 20px">
            <i class="el-icon-document"></i
            ><span style="margin:0 5px">课程简介</span
            ><i class="el-icon-arrow-down"></i>
          </span>
          <div class="tab-list" v-show="isShowTabList">
            <div>
              <img src="../../assets/love.png" alt="" class="avatar" />
            </div>
            <div>
              <div class="tab-content">
                <div>姓名：普法达人</div>
                <div>所教科目：课外</div>
                <div>所在学校：关心桥网校</div>
              </div>
              <div style="color: #adadad;margin-top: 10px">教师简介：该教师没有简介</div>
            </div>
          </div>
        </div>
        <div class="select-pagination">
          选集
          <el-pagination background layout="pager" :total="60"> </el-pagination>
        </div>
        <div class="select-content">
          <div style="flex:3">
            <span style="font-size:18px;">全部评论(28)</span>
            <div
              class="content-list"
              v-for="(item, index) in contentList"
              :key="index"
            >
              <img src="../../assets/love.png" alt="" class="avatar" />
              <div>
                <div
                  style="width:45vw;display:flex;justify-content:space-between;color:#adadad"
                >
                  <div>{{ item.name }}</div>
                  <div>{{ item.time }}</div>
                </div>
                <div style="margin-top:10px">{{ item.content }}</div>
              </div>
            </div>
          </div>
          <div style="flex:1">
            <span
              style="font-size:18px;margin-bottom:20px;display:inline-block;"
              >其他相关视频</span
            >
            <div
              class="video-list"
              v-for="(item, index) in videoList"
              :key="index"
            >
              <img src="../../assets/vide.jpg" alt="" class="video" />
              <div>
                <div>{{ item.name }}</div>
                <div style="margin-top:10px">面对疾风吧</div>
              </div>
            </div>
          </div>
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
      isShowTabList: true,
      contentList: [
        { name: "俊劫", time: "2020-06-12 15:55:59", content: "面对疾风吧" },
        { name: "俊劫", time: "2020-06-12 15:55:59", content: "面对疾风吧面对疾风吧面对疾风吧面对疾风吧面对疾风吧面对疾风吧面对疾风吧" },
        { name: "俊劫", time: "2020-06-12 15:55:59", content: "哈塞哈塞哈塞哈塞哈塞哈塞哈塞哈塞哈塞哈塞哈塞哈塞哈塞哈塞" },
      ],
      videoList: [
        { name: "俊劫", time: "2020-06-12 15:55:59", content: "面对疾风吧" },
        { name: "俊劫", time: "2020-06-12 15:55:59", content: "面对疾风吧" },
        { name: "俊劫", time: "2020-06-12 15:55:59", content: "面对疾风吧" },
      ],
    };
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.home-ebreadcrumb {
  margin: 20px 0;
}
.home-video {
  width: 100%;
  height: 600px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}
.tab-list {
  padding: 20px;
  display: flex;
}
.tab-content {
  flex-wrap: wrap;
  width: 50vw;
  display: flex;
  justify-content: space-between;
  color: #adadad;
}
.home-select {
  padding: 20px;
  background: white;
  .tab-icon{
    color: #e72934;
    cursor: pointer;
  }
  .select-content {
    display: flex;
    color: #23272f;
    // justify-content: space-between;
    margin: 20px 0;

    .content-list {
      display: flex;
      height: 70px;
      margin-top: 20px;
      padding-right: 20px;
      border-bottom: 1px solid #f5f6f8;
    }
    .video-list {
      display: flex;
      padding: 15px 5px;
      color: #666;
      background-color: #f6f8fb;
      .video {
        margin-right: 10px;
        width: 100px;
        height: 50px;
      }
    }
  }
  .select-pagination {
    display: flex;
    color: #b4b4b5;
    align-items: center;
    background-color: #f6f8fb;
    padding: 15px;
    /deep/ .el-pagination.is-background .el-pager li {
      min-width: 40px;
      border-radius: 5px;
    }
    /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: #e72934;
    }
  }
}
</style>
