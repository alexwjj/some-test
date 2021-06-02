<template>
  <div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="110px" inline>
      <el-form-item label="取水权人名称" prop="field102">
        <el-input v-model="formData.field102" placeholder="请输入取水权人名称" clearable :style="{width: '260%'}">
        </el-input>
      </el-form-item>
      <el-row>
        <el-form-item label="下拉选择" prop="field109">
          <el-select v-model="formData.field109" placeholder="请选择下拉选择" clearable :style="{width: '100%'}">
            <el-option v-for="(item, index) in field109Options" :key="index" :label="item.label"
              :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单行文本" prop="field110">
          <el-input v-model="formData.field110" placeholder="请输入单行文本" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
      </el-row>
      <el-form-item label="单行文本" prop="field111">
        <el-input v-model="formData.field111" placeholder="请输入单行文本" clearable :style="{width: '260%'}">
        </el-input>
      </el-form-item>
      <el-row>
        <el-form-item label="下拉选择" prop="field113">
          <el-select v-model="formData.field113" placeholder="请选择下拉选择" clearable :style="{width: '100%'}">
            <el-option v-for="(item, index) in field113Options" :key="index" :label="item.label"
              :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单行文本" prop="field114">
          <el-input v-model="formData.field114" placeholder="请输入单行文本" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
      </el-row>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        field102: undefined,
        field109: undefined,
        field110: undefined,
        field111: undefined,
        field113: undefined,
        field114: undefined,
      },
      rules: {
        field102: [{
          required: true,
          message: '请输入取水权人名称',
          trigger: 'blur'
        }],
        field109: [{
          required: true,
          message: '请选择下拉选择',
          trigger: 'change'
        }],
        field110: [{
          required: true,
          message: '请输入单行文本',
          trigger: 'blur'
        }],
        field111: [{
          required: true,
          message: '请输入单行文本',
          trigger: 'blur'
        }],
        field113: [{
          required: true,
          message: '请选择下拉选择',
          trigger: 'change'
        }],
        field114: [{
          required: true,
          message: '请输入单行文本',
          trigger: 'blur'
        }],
      },
      field109Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
      field113Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  }
}

</script>
<style>
</style>
