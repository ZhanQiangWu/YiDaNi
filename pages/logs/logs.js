//logs.js
var util = require('../../utils/util.js')
Page({
  data:{
     logs: []
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    }),
      console.log("logs page execute: onLoad.");    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    console.log("logs page execute: onReady.");
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    console.log("logs page execute: onShow.");
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    console.log("logs page execute: onHide.");
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    console.log("logs page execute: onUnload.");
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log("logs page execute: onPullDownRefresh.");
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    console.log("logs page execute: onReachBottom.");
  },
  onShareAppMessage: function() {
    console.log("logs page execute: onShareAppMessage.");    
    // 用户点击右上角分享
    return {
      title: 'title zhan', // 分享标题
      desc: 'my first demo', // 分享描述
      path: 'path' // 分享路径
    };
  }
})