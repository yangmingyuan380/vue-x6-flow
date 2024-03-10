<template>
  <el-dialog
    :title="node.item ? node.item.data.label : ''"
    :visible.sync="visible"
    width="600px"
  >
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="名字">
        <el-input v-model="label" placeholder="修改名字"></el-input>
      </el-form-item>
      <el-form-item label="执行函数">
        <el-select v-model="func" placeholder="请选择执行函数">
          <el-option
            v-for="item in apiFuncArrayStr"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <footer class="footer">
      <el-button type="primary" @click="submit">确定</el-button>
    </footer>
  </el-dialog>
</template>

<script>
import { apiFuncArray, apiFuncLabel } from "@/api/api1";

export default {
  name: "dialogMysql",
  computed: {
    apiFuncArrayStr() {
      return apiFuncLabel;
    },
  },

  data() {
    return {
      visible: false,
      bool: true,
      node: {},
      label: "",
      func: "",
    };
  },
  mounted() {},
  methods: {
    init(item) {
      this.node = item;
      this.label = item.item.data.label;
      this.func = item.item.data.func ?? "";
    },
    submit() {
      const node = this.$parent.getNodeById(this.node.item.id);
      node.setData(
        Object.assign({}, this.node.item.data, {
          label: this.label,
          func: this.func,
          execute: apiFuncArray[this.func],
        })
      );
      this.visible = false;
    },
  },
};
</script>
<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
