<!--
* @description
* @fileName ResearchHotspot.vue
* @author weixueyuan
* @date 2020/07/21 18:15:59
!-->
<template>
  <div class="ResearchHotspot">
    <div class="title">研究热点</div>
    <ul class="infinite-list" style="overflow:auto">
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="selectname(item.name)"
        class="infinite-list-item"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ResearchHotspot",
  data() {
    return {
      list: [
        { name: "代谢组学的研究方法和研究流程.ppt" },
        { name: "知识图谱可视化综述" },
        { name: "糖尿病的遗传因素" },
        { name: "代谢组学的研究方法和研究流程.ppt" },
        { name: "知识图谱可视化综述" },
        { name: "糖尿病的遗传因素" },
        { name: "代谢组学的研究方法和研究流程.ppt" },
        { name: "知识图谱可视化综述" },
        { name: "糖尿病的遗传因素" },
        { name: "代谢组学的研究方法和研究流程.ppt" },
        { name: "知识图谱可视化综述" },
        { name: "糖尿病的遗传因素" },
        { name: "代谢组学的研究方法和研究流程.ppt" },
        { name: "知识图谱可视化综述" },
        { name: "糖尿病的遗传因素" },
        { name: "代谢组学的研究方法和研究流程.ppt" },
        { name: "知识图谱可视化综述" },
        { name: "糖尿病的遗传因素" },
        { name: "代谢组学的研究方法和研究流程.ppt" },
        { name: "知识图谱可视化综述" },
        { name: "糖尿病的遗传因素" },
      ],
    };
  },

  created() {},

  components: {},

  computed: {},

  mounted() {},

  methods: {
    selectname(name) {
      console.log(name);
    },
  },
};
</script>

<style lang="less" scoped>
.infinite-list-item{
	height: 40px;
	line-height: 40px;
	margin-top: 10px;
	background-color: #f5ded1;
}
.infinite-list {
  height: 380px;
  overflow: hidden;
  list-style-type: none;
  text-align: center;
  margin: 15px 0;
  padding: 0;
}
.title {
  height: 50px;
  font-size: 16px;
  background-color: #ff7100;
}
.ResearchHotspot div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ResearchHotspot {
  width: 100%;
	height: 460px;
}</style>
