<!--
* @description
* @fileName index.vue
* @author weixueyuan
* @date 2020/07/21 14:36:51
!-->
<template>
  <div id="indexall">
    <el-container>
      <el-header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="header_right">
          <div class="header_right_left">工作人员：医汇智医生</div>
          <div class="header_right_mid">部门：门诊部</div>
          <div class="header_right_right">工作科室：内科</div>
        </div>
      </el-header>
      <el-main>
        <div class="main_left">
          <newatlas></newatlas>
          <ResearchHotspot></ResearchHotspot>
        </div>
        <div class="main_mid"></div>
        <div class="main_right">
          <MedicalInformation></MedicalInformation>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import newatlas from "../components/newatlas";
import ResearchHotspot from "../components/ResearchHotspot";
import MedicalInformation from "../components/MedicalInformation";
export default {
  name: "indexall",
  data() {
    return {};
  },

  created() {},

  components: { newatlas, ResearchHotspot, MedicalInformation },

  computed: {},

  mounted() {},

  methods: {
    //返回首页
    backindex() {
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style lang="less" scoped>
.main_right {
  width: 400px;
  height: 100%;
}
.el-breadcrumb {
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.main_left {
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #666;
}
.el-main {
  padding: 0;
  height: 897px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header_right div {
  margin-right: 20px;
}
.header_right {
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  font-size: 16px;
}
.el-header {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 0;
  height: 50px !important;
  font-size: 14px;
}
.el-container {
  width: 100%;
  min-height: 947px;
}
</style>
