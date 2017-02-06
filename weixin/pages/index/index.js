//index.js
//获取应用实例
var app = getApp();
var Bmob = require('../../utils/bmob.js');
var Loger = require('../../utils/Loger.js');
Page({
  data: {
    motto: 'Hello World',
    userId :123456789,
    newsdata:''
  },
  loadData:function(){

    var Diary = Bmob.Object.extend("_User");
    var diary = new Diary();
    diary.set("username", "zhan");
    diary.set("password", "123456");
    //添加数据，第一个入口参数是null
    diary.save(null, {
      success: function (result) {
        // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
        console.log("日记创建成功, objectId:" + result.id);
      },
      error: function (result, error) {
        // 添加失败
        console.log('创建日记失败');

      }
    });

    var that = this;
    wx.request({
      url: 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10',
      header:{
        'content-type': 'application/json'
      },
      success:function(res){
        console.log(res.data);
        that.setData({
          newsdata:res.data
        });
      }
    })
  }
})
