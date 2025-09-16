// pages/article3/article3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiking:[
      {
        id: 1,
        title: "点位一：道观河文化广场",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/B11cictDsNqMN5zfkib8woR7iclESZG4GAjY3X0SH19gSMGSdpG7pJ5YdoDd2oIhuKWcLp2FlRPShDl7NGX0zvjFQ/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1", 
        words:"想要立马开始徒步？\n不着急\n导航到道观河文化广场\n即可开始这场徒步吸氧之旅！\n在这里活跃一下身体，\n充分做好热身运动\n在绿茵的见证下\n开始这场徒步！",
      },

{
        id: 2,
        title: "点位二：龙凤桥",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/B11cictDsNqMN5zfkib8woR7iclESZG4GAjyQXu8tL9biaibWhZ5QOaLf46buYt6vpdVLYibeQPPRFEXpTibCWsUwl2qA/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1", 
        words:"走在龙凤桥上，观赏美景\n远处群山叠嶂、起伏有致\n河水潺潺，水面倒映着万佛宝塔\n在阳光的照射下，波光粼粼\n空气清新中带着水汽\n好山好水好风光\n",
      },

{
        id: 3,
        title: "点位三：道观河风景旅游区",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/B11cictDsNqO387rz4uxY32iaibdLibzNAlOQuEUCibTYp6v8NiacXtTOB40TUmbdkjJNHDib9w4Ilfr8QHnP4QIteUFg/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1", 
        words:"从这里开始，道观河的绝美山水尽在眼前\n沿途有通禅湖、道观河水库大坝、报恩禅寺\n万佛宝塔等景点\n还有丰富的植物\n点缀在绿色的山林之间，一派生机勃勃\n",
      },

{
        id: 4,
        title: "点位四：红色步道入口", 
        image: "https://mmbiz.qpic.cn/sz_mmbiz_png/r5z6URPdp1W03CavGZjWGf5oblEu5wnNcxF6uMXg44K1ddZIrSDHPN2aiacU4YtQBNLtFTNsguI3sGOmErGnZ0Q/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1",
        words:"红色文化步道全长1730米\n如果进入步道，就可以享受一段有氧之旅\n沿途不仅有茂密的植被树林\n还有战壕、瞭望台、红色长廊等景观\n感受生态美景和红色文化的有机融合\n",
      },

{
        id: 5,
        title: "点位五：汉子村董家冲湾",
        image:  "",       
        words:"现在暮春时节，你能看到大片的果树翠绿\n桃子、桑葚、西瓜、梨子、玉米等果蔬正在蓬勃生长\n春季赏花，夏季采摘，秋季农家乐\n不同的季节都有不同的玩法！",
      },

{
        id: 6,
        title: "点位六：桐子岗村土门湾附近",
        image:         "", 
         words:"流水潺潺，轻击顽石，迸发出悦耳的自然水声\n湿润的空气迎面袭来，花香草香\n眼前是雪浪翻涌，耳边是流水击石\n心境也随之开阔\n",
      },

{
        id: 7,
        title: "点位七：小流域景点",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/B11cictDsNqMN5zfkib8woR7iclESZG4GAjQ1CAt61Pos7BAMqxNBVELpYLRzMggTVEelWFlp5YicB4icjwNhCmqpNw/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1", 
        words:"一边是绿油油的树木，一边则是波光粼粼的湖水\n带着些许童趣，走过彩虹桥\n近距离感受清澈的河水\n满面的凉爽水汽\n离自然更近了一步\n",
      },

{
        id: 8,
        title: "点位八：红色旅游线二期",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/B11cictDsNqMN5zfkib8woR7iclESZG4GAjWfEiapxMFPANTzz9xqUAW6hwiaeZuTe2dOKUkborQKoO0ha16T4w4ibCA/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1", 
        words:"沿线自然和人文景观宜人\n不同的季节有不同的花海\n美人蕉、紫薇、木槿、宿根金鸡菊等花卉轮番开放\n一年四季，总让人惊喜连连\n暮春时节，鸢尾花开成一片，美不胜收\n",
      },

{
        id: 9,
        title: "点位九：石寨村美丽乡村院墙湾",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/B11cictDsNqMN5zfkib8woR7iclESZG4GAjdu9bJlzLOO7VjiblU4ic2ug564o7vhc5hicHaiaTHQDeZEyLJv1uHSwCdQ/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1", 
        words:"干净的马路穿村而过\n农家小院整洁有序\n路边行走的鸡鸭\n满园的瓜果\n淳朴的田园风情\n无不展现出清新清净的农家风光\n",
      },

{
        id: 10,
        title: "点位十：旅游大道",
        image: "https://mmbiz.qpic.cn/mmbiz_jpg/B11cictDsNqMN5zfkib8woR7iclESZG4GAjY6S0YnsZyB0QOOWwUKSyGb7QicXqYZLWShRcJdbUoeKNYwTIQOiaH5SQ/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1", 
        words:"从农家风光转到旅游大道\n不由得让人眼前一亮\n两侧街道古朴典雅，步道干净整洁\n加上植物景观点缀\n心情也跟着明媚起来\n走得累了，还可以到店铺小坐\n品尝火烧耙等新洲特色美食\n",
      },


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