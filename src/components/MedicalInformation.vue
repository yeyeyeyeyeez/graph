<!--
* @description
* @fileName MedicalInformation.vue
* @author weixueyuan
* @date 2020/07/22 13:55:20
!-->
<template>
  <div class="MedicalInformation">
    <div class="meintitle">医学资讯</div>
    <div class="meinlist">
      <div class="alist" v-for="(item, index) in list" :key="index">
        <div class="meinpic"><img :src="item.pic" /></div>
        <div class="listcont">
          <div class="listtitle">{{ item.title }}</div>
          <div class="listtxt">{{ item.txt }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MedicalInformation",
  data() {
    return {
      list: [
        {
          title: "首都疫情十分严峻！全市进入“战时状态”，近10万人投入“抗疫”战场",
          txt:
            "北京疫情扩散的风险很高！据报道，从6月11日至14日24时，北京累计报告新冠肺炎确诊病例79例，其中无症状感染者7例。",
          pic:
            "https://file06.16sucai.com/2016/0918/4c377e464a2e79aa069e7713490f7c0c.jpg",
        },
        {
          title: "首都疫情十分严峻！全市进入“战时状态”，近10万人投入“抗疫”战场",
          txt:
            "北京疫情扩散的风险很高！据报道，从6月11日至14日24时，北京累计报告新冠肺炎确诊病例79例，其中无症状感染者7例。",
          pic:
            "https://file06.16sucai.com/2016/0918/4c377e464a2e79aa069e7713490f7c0c.jpg",
        },
        {
          title: "首都疫情十分严峻！全市进入“战时状态”，近10万人投入“抗疫”战场",
          txt:
            "北京疫情扩散的风险很高！据报道，从6月11日至14日24时，北京累计报告新冠肺炎确诊病例79例，其中无症状感染者7例。",
          pic:
            "https://file06.16sucai.com/2016/0918/4c377e464a2e79aa069e7713490f7c0c.jpg",
        },
        {
          title: "首都疫情十分严峻！全市进入“战时状态”，近10万人投入“抗疫”战场",
          txt:
            "北京疫情扩散的风险很高！据报道，从6月11日至14日24时，北京累计报告新冠肺炎确诊病例79例，其中无症状感染者7例。",
          pic:
            "https://file06.16sucai.com/2016/0918/4c377e464a2e79aa069e7713490f7c0c.jpg",
        },
        {
          title: "首都疫情十分严峻！全市进入“战时状态”，近10万人投入“抗疫”战场",
          txt:
            "北京疫情扩散的风险很高！据报道，从6月11日至14日24时，北京累计报告新冠肺炎确诊病例79例，其中无症状感染者7例。",
          pic:
            "https://file06.16sucai.com/2016/0918/4c377e464a2e79aa069e7713490f7c0c.jpg",
        },
        {
          title: "首都疫情十分严峻！全市进入“战时状态”，近10万人投入“抗疫”战场",
          txt:
            "北京疫情扩散的风险很高！据报道，从6月11日至14日24时，北京累计报告新冠肺炎确诊病例79例，其中无症状感染者7例。",
          pic:
            "https://file06.16sucai.com/2016/0918/4c377e464a2e79aa069e7713490f7c0c.jpg",
        },
        {
          title: "首都疫情十分严峻！全市进入“战时状态”，近10万人投入“抗疫”战场",
          txt:
            "北京疫情扩散的风险很高！据报道，从6月11日至14日24时，北京累计报告新冠肺炎确诊病例79例，其中无症状感染者7例。",
          pic:
            "https://file06.16sucai.com/2016/0918/4c377e464a2e79aa069e7713490f7c0c.jpg",
        },
        {
          title: "首都疫情十分严峻！全市进入“战时状态”，近10万人投入“抗疫”战场",
          txt:
            "北京疫情扩散的风险很高！据报道，从6月11日至14日24时，北京累计报告新冠肺炎确诊病例79例，其中无症状感染者7例。",
          pic:
            "https://file06.16sucai.com/2016/0918/4c377e464a2e79aa069e7713490f7c0c.jpg",
        },
        {
          title: "首都疫情十分严峻！全市进入“战时状态”，近10万人投入“抗疫”战场",
          txt:
            "北京疫情扩散的风险很高！据报道，从6月11日至14日24时，北京累计报告新冠肺炎确诊病例79例，其中无症状感染者7例。",
          pic:
            "https://file06.16sucai.com/2016/0918/4c377e464a2e79aa069e7713490f7c0c.jpg",
        },
        {
          title: "首都疫情十分严峻！全市进入“战时状态”，近10万人投入“抗疫”战场",
          txt:
            "北京疫情扩散的风险很高！据报道，从6月11日至14日24时，北京累计报告新冠肺炎确诊病例79例，其中无症状感染者7例。",
          pic:
            "https://file06.16sucai.com/2016/0918/4c377e464a2e79aa069e7713490f7c0c.jpg",
        },
        {
          title: "首都疫情十分严峻！全市进入“战时状态”，近10万人投入“抗疫”战场",
          txt:
            "北京疫情扩散的风险很高！据报道，从6月11日至14日24时，北京累计报告新冠肺炎确诊病例79例，其中无症状感染者7例。",
          pic:
            "https://file06.16sucai.com/2016/0918/4c377e464a2e79aa069e7713490f7c0c.jpg",
        },
        {
          title: "首都疫情十分严峻！全市进入“战时状态”，近10万人投入“抗疫”战场",
          txt:
            "北京疫情扩散的风险很高！据报道，从6月11日至14日24时，北京累计报告新冠肺炎确诊病例79例，其中无症状感染者7例。",
          pic:
            "https://file06.16sucai.com/2016/0918/4c377e464a2e79aa069e7713490f7c0c.jpg",
        },
      ],
    };
  },

  created() {},

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.listtxt {
  height: 50px;
  font-size: 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.listtitle {
  height: 40px;
  font-size: 14px;
  padding-top: 8px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.listcont {
  width: 300px;
  display: flex;
	flex-direction: column;
	box-sizing: border-box;
	border-bottom: 1px solid #666;
}
.meinpic img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.meinpic {
  width: 92px;
  height: 92px;
  margin: 8px;
}
.alist {
  display: flex;
  flex-direction: row;
}
.meinlist {
  height: 847px;
  overflow: auto;
}
.MedicalInformation {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #666;
}
.meintitle {
  height: 50px;
  background-color: royalblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
