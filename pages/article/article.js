// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resList: [],
    src_lookup: "../../data/观看.png",
    src_like: "../../data/点赞.png"


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // var resData = {
    //   "state": 1,
    //   "result": [{
    //     "flowerName": "牡丹",
    //     "latinName": "Nymphaea alba",
    //     "detail1": "牡丹是灌木，冬季落叶后地表自古睡莲同莲花一样被视为圣洁、美丽的化身。寓意洁净、纯真、纯洁、迎着朝气",
    //     "detail2": "自古睡莲同莲花一样被视为圣洁、美丽的化身。寓意洁净、纯真、纯洁、迎着朝气。",
    //     "lookup": 2003,
    //     "like": 120
    //   }
    //     , {
    //     "flowerName": "杜鹃",
    //     "latinName": "Nymphaea alba",
    //     "detail1": "杜鹃花拥有上万个杂交品种的花木之王XXXXX",
    //     "detail2": "自古睡莲同莲花一样被视为圣洁、美丽的化身。寓意洁净、纯真、纯洁、迎着朝气。",
    //     "lookup": 2003,
    //     "like": 120
    //   }, {
    //     "flowerName": "菊花",
    //     "latinName": "Nymphaea alba",
    //     "detail1": "菊花是中国十大名花之一，花中四君子（梅兰竹菊）之一，也是世界四大切花（菊花、月季、康乃馨、唐菖蒲）之一，产量居首。因菊花具有清寒傲雪的品格，才有陶渊明的“采菊东篱下，悠然见南山”的名句。",
    //     "detail2": "自古睡莲同莲花一样被视为圣洁、美丽的化身。寓意洁净、纯真、纯洁、迎着朝气。",
    //     "lookup": 2003,
    //     "like": 120
    //   }
    //   ]
    // }
    wx.request({
      url: 'http://127.0.0.1:5656/article',
      header: {
        'content-type': 'application/json'
      },
      success(resData) {
        this.setData({
          resList: resData.result
        })
      }
    })
   

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
        list: [{
          pagePath: "../article/article",
          iconPath: "../data/知识.png",
          selectedIconPath: "../data/知识2.png",
          text: "知识科普"
        }, {
          pagePath: "../recognition/recognition",
          iconPath: "../data/相机.png",
          selectedIconPath: "../data/相机2.png",
          text: "花卉识别"
        }, {
          pagePath: "../game/game",
          iconPath: "../data/我来回答.png",
          selectedIconPath: "../data/我来回答2.png",
          text: "趣味问答"
        }]
      })
    }


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})