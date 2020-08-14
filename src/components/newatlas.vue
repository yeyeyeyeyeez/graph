<!--
* @description
* @fileName newatlas.vue
* @author weixueyuan
* @date 2020/07/21 16:32:42
!-->
<template>
  <div class="newatlas">
    <div class="title">新增图谱</div>
    <ul class="infinite-list" style="overflow:auto">
      <li v-for="(item,index) in list" :key="index" @click="selectname(item.name)" class="infinite-list-item">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "newatlas",
  data() {
    return {
      list: [
        { name: "代谢组学" },
        { name: "新陈代谢" },
        { name: "代谢指纹分析" },
        { name: "代谢疾病" },
        { name: "糖尿病" },
        { name: "脑血栓" },
        { name: "小儿麻痹" },
        { name: "代谢组学" },
        { name: "新陈代谢" },
        { name: "代谢指纹分析" },
        { name: "代谢疾病" },
        { name: "糖尿病" },
        { name: "脑血栓" },
        { name: "小儿麻痹" },
        { name: "代谢组学" },
        { name: "新陈代谢" },
        { name: "代谢指纹分析" },
        { name: "代谢疾病" },
        { name: "糖尿病" },
        { name: "脑血栓" },
        { name: "小儿麻痹" },
      ],
    };
  },

  created() {},

  components: {},

  computed: {},

  mounted() {},

  methods: {
		selectname(name){
			console.log(name)
		}
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
  height: 357px;
  overflow: hidden;
  list-style-type: none;
  text-align: center;
  margin: 15px 0;
  padding: 0;
}
.title {
  height: 50px;
  font-size: 16px;
  background-color: wheat;
}
.newatlas div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.newatlas {
  width: 100%;
	height: 437px;
}
</style>
