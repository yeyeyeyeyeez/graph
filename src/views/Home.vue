<template>
  <div class="home">
    <div
      id="chart1"
      style="width: 1600px; height: 900px; margin: 0 auto;"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      var echarts = require("echarts");

      // 初始化echarts实例
      var myChart = echarts.init(document.getElementById("chart1"));

      
      var entityRelation = [
        {
          r: {
            name: "推荐食谱",
          },
          m: {
            name: "绿豆薏米饭",
          },
        },
        {
          r: {
            name: "推荐食谱",
          },
          m: {
            name: "姜丝萝卜汤",
          },
        },
        {
          r: {
            name: "推荐食谱",
          },
          m: {
            name: "葱蒜粥",
          },
        },
        {
          r: {
            name: "推荐食谱",
          },
          m: {
            name: "薏米莲子粥",
          },
        },
        {
          r: {
            name: "推荐食谱",
          },
          m: {
            name: "赤小豆粥",
          },
        },
        {
          r: {
            name: "推荐食谱",
          },
          m: {
            name: "香椿芽粥",
          },
        },
        {
          r: {
            name: "推荐食谱",
          },
          m: {
            name: "凉拌香椿",
          },
        },
        {
          r: {
            name: "推荐食谱",
          },
          m: {
            name: "醋熘土豆丝",
          },
        },
        {
          r: {
            name: "忌吃",
          },
          m: {
            name: "猪油（板油）",
          },
        },
        {
          r: {
            name: "忌吃",
          },
          m: {
            name: "咸鱼",
          },
        },
        {
          r: {
            name: "忌吃",
          },
          m: {
            name: "白扁豆",
          },
        },
        {
          r: {
            name: "忌吃",
          },
          m: {
            name: "油条",
          },
        },
        {
          r: {
            name: "宜吃",
          },
          m: {
            name: "芝麻",
          },
        },
        {
          r: {
            name: "宜吃",
          },
          m: {
            name: "鸡蛋",
          },
        },
        {
          r: {
            name: "宜吃",
          },
          m: {
            name: "南瓜子仁",
          },
        },
        {
          r: {
            name: "宜吃",
          },
          m: {
            name: "鹌鹑蛋",
          },
        },
        {
          r: {
            name: "所属科室",
          },
          m: {
            name: "呼吸内科",
          },
        },
        {
          r: {
            name: "常用药品",
          },
          m: {
            name: "感冒灵颗粒",
          },
        },
        {
          r: {
            name: "常用药品",
          },
          m: {
            name: "利巴韦林颗粒",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "伤风停胶囊",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "感冒灵颗粒",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "喉痛灵片",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "阿莫西林颗粒",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "洛索洛芬钠胶囊",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "酚咖片",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "洛索洛芬钠片",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "风油精",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "匹多莫德分散片",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "依托红霉素片",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "穿心莲片",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "头孢丙烯分散片",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "麻黄止嗽丸",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "肺宁片",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "抗病毒口服液",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "消炎片",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "头孢拉定胶囊",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "蒲公英颗粒",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "银芩胶囊",
          },
        },
        {
          r: {
            name: "好评药品",
          },
          m: {
            name: "愈美胶囊",
          },
        },
        {
          r: {
            name: "诊断检查",
          },
          m: {
            name: "白细胞计数（WBC）",
          },
        },
        {
          r: {
            name: "诊断检查",
          },
          m: {
            name: "血常规",
          },
        },
        {
          r: {
            name: "诊断检查",
          },
          m: {
            name: "肺和胸膜听诊",
          },
        },
        {
          r: {
            name: "诊断检查",
          },
          m: {
            name: "尿常规",
          },
        },
        {
          r: {
            name: "诊断检查",
          },
          m: {
            name: "内科检查",
          },
        },
        {
          r: {
            name: "症状",
          },
          m: {
            name: "鼻塞",
          },
        },
        {
          r: {
            name: "症状",
          },
          m: {
            name: "头痛",
          },
        },
        {
          r: {
            name: "症状",
          },
          m: {
            name: "浑身忽冷忽热",
          },
        },
        {
          r: {
            name: "症状",
          },
          m: {
            name: "情绪性感冒",
          },
        },
        {
          r: {
            name: "症状",
          },
          m: {
            name: "咽喉干燥及灼热感",
          },
        },
        {
          r: {
            name: "症状",
          },
          m: {
            name: "发烧",
          },
        },
        {
          r: {
            name: "症状",
          },
          m: {
            name: "发热伴寒战",
          },
        },
        {
          r: {
            name: "症状",
          },
          m: {
            name: "咽痛",
          },
        },
        {
          r: {
            name: "症状",
          },
          m: {
            name: "流鼻涕",
          },
        },
      ];
      // entityRelation中的r代表的关系，m代表的是第二个实体，这个数据是从neo4j数据库查询后进行json格式化后的，原数据过多，就删减了一部分。
      var key_word = "感冒";

      var data = []; // echarts中的节点数组
      var links = []; // echarts中边的数组

      // 获取实体1, 也就是中心节点
      var node = {};
      node["name"] = key_word;
      node["draggable"] = true; // 设置中心节点是否可以拖拽
      var id = 0;
      node["id"] = id.toString();
      data.push(node);

      // 获取实体2, 存储在data中, 如果实体2已经存在于data中, 则不push
      var maxDisPlayNode = 10; // 对展示节点的数量进行限制
      // console.log("实体长度----->", entityRelation.length); // 显示关系个数
      for (
        var i = 0;
        i < Math.min(maxDisPlayNode, entityRelation.length);
        i++
      ) {
        node = {};
        node["name"] = entityRelation[i]["m"]["name"];
        node["draggable"] = true;

        if (entityRelation[i]["r"]["name"] == "所属科室") {
          node["category"] = 1; // 节点分类, 数字代表option.series.categories中的索引
        } else if (entityRelation[i]["r"]["name"] == "常用药品") {
          node["category"] = 2;
        } else if (entityRelation[i]["r"]["name"] == "宜吃") {
          node["category"] = 3;
        } else if (entityRelation[i]["r"]["name"] == "诊断检查") {
          node["category"] = 4;
        } else if (entityRelation[i]["r"]["name"] == "忌吃") {
          node["category"] = 5;
        } else if (entityRelation[i]["r"]["name"] == "好评药品") {
          node["category"] = 6;
        } else if (entityRelation[i]["r"]["name"] == "推荐食谱") {
          node["category"] = 7;
        } else if (entityRelation[i]["r"]["name"] == "症状") {
          node["category"] = 8;
        } else if (entityRelation[i]["r"]["name"] == "并发症") {
          node["category"] = 9;
        } else if (entityRelation[i]["r"]["name"] == "生产药品") {
          node["category"] = 10;
        }

        id = i + 1;
        node["id"] = id.toString();

        var flag = 1;
        var relationTarget = id.toString();
        for (var j = 0; j < data.length; j++) {
          if (data[j]["name"] === node["name"]) {
            flag = 0;
            relationTarget = data[j]["id"];
            break;
          }
        }

        var relation = {};
        relation["source"] = 0; // 关系起点, 数字代表的是节点的id, 即node[id]
        relation["target"] = relationTarget; // 关系指向的终点, 也是id, 即通过节点的id描述两个节点以及关系
        relation["category"] = 0;

        if (flag === 1) {
          data.push(node);
          relation["value"] = entityRelation[i]["r"]["name"];
          relation["symbolSize"] = 10;
          links.push(relation);
        } else {
          maxDisPlayNode += 1;
          for (var k = 0; k < links.length; k++) {
            if (links[k]["target"] === relationTarget) {
              links[k]["value"] =
                links[k]["value"] + " | " + entityRelation[i]["r"]["name"];
                // console.log(links[k]["value"])
              break;
            }
          }
        }
      }
      // console.log("data====>>>", data);
      // console.log("links====>>>", links);

      var option = {
        title: {
          text: "",
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
            },
          },
        },
        legend: {
          x: "center",
          show: false,
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 45,
            focusNodeAdjacency: true, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点, 默认是true
            roam: true,
            edgeSymbol: ["none", "arrow"],
            categories: [
              {
                name: "查询实体",
                itemStyle: {
                  normal: {
                    color: "#FF0000",
                  },
                },
              },
              {
                name: "所属科室",
                itemStyle: {
                  normal: {
                    color: "#4592FF",
                  },
                },
              },
              {
                name: "常用药品",
                itemStyle: {
                  normal: {
                    color: "#FFFF00",
                  },
                },
              },
              {
                name: "宜吃",
                itemStyle: {
                  normal: {
                    color: "#66CD00",
                  },
                },
              },
              {
                name: "诊断检查",
                itemStyle: {
                  normal: {
                    color: "#B8860B",
                  },
                },
              },
              {
                name: "忌吃",
                itemStyle: {
                  normal: {
                    color: "#B23AEE",
                  },
                },
              },
              {
                name: "好评药品",
                itemStyle: {
                  normal: {
                    color: "#FFB90F",
                  },
                },
              },
              {
                name: "推荐食谱",
                itemStyle: {
                  normal: {
                    color: "#7FFF00",
                  },
                },
              },
              {
                name: "症状",
                itemStyle: {
                  normal: {
                    color: "#F08080",
                  },
                },
              },
              {
                name: "并发症",
                itemStyle: {
                  normal: {
                    color: "#87CEFA",
                  },
                },
              },
              {
                name: "生产药品",
                itemStyle: {
                  normal: {
                    color: "#FFFF00",
                  },
                },
              },
            ],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: "bolder",
                  fontFamily: "sans-serif",
                },
              },
            },
            force: {
              repulsion: 1000,
              edgeLength: [150, 100],
              layoutAnimation: false,
              // 因为力引导布局会在多次迭代后才会稳定, 这个参数决定是否显示布局的迭代动画(节点数量过多, 图在迭代的过程中会旋转),
              // 在浏览器端节点数据较多(>100)的时候不建议关闭, 布局过程会造成浏览器假死。
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 10,
                },
                formatter: "{c}", // 标签内容格式器。模板变量有 {a}、{b}、{c}，分别表示系列名，数据名，数据值。
              },
            },
            data: data, // 节点
            links: links, // 边或者关系
            lineStyle: {
              normal: {
                opacity: 0.5,
                width: 1.0,
                curveness: 0,
                color: "#262626",
              },
            },
          },
        ],
      };
      myChart.setOption(option); // 这步很重要, 必须设置才可以有效
      myChart.on("click", function(param) {
        console.log("param---->", param); // 打印出param, 可以看到里边有很多参数可以使用
        //获取节点点击的数组序号
        var arrayIndex = param.dataIndex;
        console.log("arrayIndex---->", arrayIndex);
        console.log("name---->", param.name);
        console.log("category---->", param.data.category);
        if (param.dataType == "node") {
          alert("点击了节点" + param.name);
        } else {
          alert("点击了边" + param.value);
        }
      });
    },
  },
};
</script>
