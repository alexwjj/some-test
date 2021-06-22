<template>
  <div class='classroom'>
      <h1>精品课堂</h1> 
      <div id="printDiv">
      且随疾风前行，身后亦需流心
    </div>

    <el-button v-print="'#printDiv'">只打印指定 DOM</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    };
  },
  watch: {},
  computed: {},
  mounted(){},
  methods: {}
}

</script>
<style lang='less' scoped>

</style>