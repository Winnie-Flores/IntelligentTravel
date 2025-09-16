// index.js
Page({
  data: {
    articleList: [
      { title: "旅游 ｜ 相约新洲，民宿线路攻略", id: 1 },
      { title: "文化 ｜ 新洲红色文化", id: 2 },
      { title: "徒步 ｜ 快来GET徒步路线", id: 3 },
      { title: "赏花 ｜ 春日赏花怎么走～", id: 4 },
      { title: "两天一夜 ｜ 这份攻略快来查收！", id: 5 },
      { title: "亲子游 ｜ 和孩子的独处时刻～", id: 6 }
    ],
    filteredArticleList: [
      { title: "旅游 ｜ 相约新洲，民宿线路攻略", id: 1 },
      { title: "文化 ｜ 新洲红色文化", id: 2 },
      { title: "徒步 ｜ 快来GET徒步路线", id: 3 },
      { title: "赏花 ｜ 春日赏花怎么走～", id: 4 },
      { title: "两天一夜 ｜ 这份攻略快来查收！", id: 5 },
      { title: "亲子游 ｜ 和孩子的独处时刻～", id: 6 }
    ]
  },
  onLoad: function () {
    // 页面加载时，将articleList赋值给filteredArticleList
    this.setData({
      filteredArticleList: this.data.articleList
    });
  },
  handleSearchInput: function (e) {
    const keyword = e.detail.value;
    const articleList = this.data.articleList;
    const filteredArticleList = articleList.filter(article => article.title.includes(keyword));
    this.setData({
      filteredArticleList: filteredArticleList
    });
  },

  discoverArticle1() {
    wx.navigateTo({
      url: '/pages/article1/article1',
    })
  },
  discoverArticle2() {
    wx.navigateTo({
      url: '/pages/article2/article2',
    })
  },
  discoverArticle3() {
    wx.navigateTo({
      url: '/pages/article3/article3',
    })
  },
  discoverArticle4() {
    wx.navigateTo({
      url: '/pages/article4/article4',
    })
  },
  discoverArticle5() {
    wx.navigateTo({
      url: '/pages/article5/article5',
    })
  },
  discoverArticle6() {
    wx.navigateTo({
      url: '/pages/article6/article6',
    })
  }
});
