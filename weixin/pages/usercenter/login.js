//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    email:'',
    password:''
  },
  bindEmailInput:function(e){
    this.setData({email:e.detail.value})
  },
  bindPasswordInput:function(e){
    this.setData({password:e.detail.value})
  },
  login:function(e){
    wx.showToast({
      title:'登录请求中',
      icon:'loading',
      duration:5000
    });
    //网络请求
    wx.request({
      url: 'http://api.gugujiankong.com/account/Login?email='+ this.data.email + '&password=' + this.data.password,
      header: {'Content-Type': 'application/json'}, // 设置请求的 header
      success: function(res){
        // success
        wx.hideToast();
        if(res.data.LoginStatus == 1){
          //进行一些用户状态的存储
					//进行 tab 的切换
          wx.switchTab({
            url: '../../pages/index/index',
            success: function(res){
              // success
              console.log("called switchtab.");
            }
          })
        }else{
          wx.showModal({
            title:'登录失败',
            content:'请检查您填写的用户信息！',
            showCancel:false,
            success:function(res){
            //回调函数
            }
          });
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }


})