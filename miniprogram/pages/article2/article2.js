// pages/article2/article2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    culture:[
      {
        id: 1,
        title: "第一站：问津书院",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/B11cictDsNqMN5zfkib8woR7iclESZG4GAjY3X0SH19gSMGSdpG7pJ5YdoDd2oIhuKWcLp2FlRPShDl7NGX0zvjFQ/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1", 
        words:"公元前489年，孔子周游列国，至新洲未名河畔，使子路问津。这里是我国唯一以《论语》典故而命名的书院，作为中国最古老的“大学”，成为儒学文化教育圣地.\n参观书院的大成殿、讲堂等古建筑，感受浓厚的儒家文化氛围，了解孔子使子路问津的典故以及书院的千年历史传承\n",
      },

{
        id: 2,
        title: "第二站：城楼寨",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/B11cictDsNqMN5zfkib8woR7iclESZG4GAjyQXu8tL9biaibWhZ5QOaLf46buYt6vpdVLYibeQPPRFEXpTibCWsUwl2qA/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1", 
        words:"位于新洲区旧街，蕲黄四十八寨之一，大别山峻岭环视，2020年8月入选《武汉市第一批地名文化遗产保护名录》。山势蜿蜒伸展、层峦复涧、秀谷相迭，现已发展成为茶叶生产、休闲观光、土特产销售为一体的产业基地。\n在这里科研欣赏蜿蜒的山势和秀丽的茶园风光，参观茶叶生产加工过程，品尝当地的特色茶叶，深入体验茶文化。",
      },

{
        id: 3,
        title: "第三站：红色旅游线",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/B11cictDsNqO387rz4uxY32iaibdLibzNAlOQuEUCibTYp6v8NiacXtTOB40TUmbdkjJNHDib9w4Ilfr8QHnP4QIteUFg/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1", 
        words:"红色旅游线穿越新洲东部大别山区，连接贯通新洲区问津书院、道观河、将军山等多处红色遗迹和绿色生态、禅宗文化旅游景点景区。沿着蜿蜒曲折的柏油马路，漫山遍野的绿，自然生长的白（桦林），格桑花、柿子树、板栗树，道路两旁的山涧流水，依山而建的古建新舍，映衬出自然村落的美……\n沿着新洲区大别山老革命区红色旅游公路前行，能够参观鄂东抗日挺进中队旧址、将军山红色文化陈列室、革命烈士纪念碑等红色教育点位，接受爱国主义和革命传统教育。",
      },

{
        id: 4,
        title: "第四站：稻田记忆景区", 
        image: "https://mmbiz.qpic.cn/sz_mmbiz_png/r5z6URPdp1W03CavGZjWGf5oblEu5wnNcxF6uMXg44K1ddZIrSDHPN2aiacU4YtQBNLtFTNsguI3sGOmErGnZ0Q/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1",
        words:" 位于新洲区旧街街，占地面积1011亩，以现实稻田实景为基础，为游客提供农、文、旅一体化的体验。\n在这里，漫步田间，通过景区的展示和体验项目，了解一粒米的“前世今生”，感受春耕、夏耘、秋收、冬藏的农耕文化。\n",
      },

{
        id: 5,
        title: "第五站：道观河风景区",
        image:  "",       
        words:"位于大别山余脉南麓，是湖北省第一批定点旅游单位，也是新洲东部地区党组织的实际发祥地。区域内72座山峰层峦叠嶂，道观河水库一望无际，山随湖走，湖依山转，有着丰富的山水资源和红色文化资源。\n在这里可以欣赏由72座秀丽山峰和浩大潭湖构成的山水胜景，可沿湖漫步或乘船游览，感受自然风光的优美。",
      },

{
        id: 6,
        title: "第六站：将军山",
        image:         "", 
         words:" 位于新洲东部徐古街，山上怪石林立，幽泉不绝，植被茂盛，动植物种类繁多。绿色林海与红色胜迹相互交融，自然村落山水田园融为一体，风景秀丽独特。山上的将军洞，是进行革命传统教育的基地。\n攀登将军山，欣赏四周群山叠嶂、清溪缠绕的美景，参观山上的将军洞等红色胜迹，感受红色文化与自然风光的交融。\n",
      },

{
        id: 7,
        title: "第七站：花朝河湾景区",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/B11cictDsNqMN5zfkib8woR7iclESZG4GAjQ1CAt61Pos7BAMqxNBVELpYLRzMggTVEelWFlp5YicB4icjwNhCmqpNw/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1", 
        words:"景区以流行于鄂东的“花朝文化”为品牌基石，融花神文化、情缘文化、民俗文化于一体，有“赏花亲水”、“游船篝火”、“实景演艺”、“酒店民居”、“垂钓采摘”、“亲子乐活”、“生态科普”、“房车露营”等八大旅游产品板块。\n在这里可以欣赏以花朝文化为主题的景观，了解花神文化、情缘文化和民俗文化，若恰逢花朝节期间，还可参与丰富多彩的民俗活动。\n",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})