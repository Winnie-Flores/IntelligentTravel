// pages/favoriteList/favoriteList.js

Page({
  data: {
    favorites: [],
  },

  // 页面加载时获取收藏数据
  onLoad() {
    this.loadFavorites();
  },

  // 加载收藏列表
  loadFavorites() {
    const favorites = wx.getStorageSync("favorites") || [];
    this.setData({ favorites });
  },

  // 跳转至文章页面
  goToArticle(e) {
    const articleId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/article1/article1?articleId=${articleId}`,
    });
  },

  // 删除收藏
  deleteFavorite(e) {
    const index = e.currentTarget.dataset.index;
    let favorites = this.data.favorites;
    favorites.splice(index, 1);
    wx.setStorageSync("favorites", favorites);
    this.setData({ favorites });
    wx.showToast({ title: "已删除", icon: "none" });
  },
});
