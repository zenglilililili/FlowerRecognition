// pages/recognition/recognition.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    src_choose: "../../data/相机_s.png"
  },
  photograph() {

    console.log("跳转到拍照界面")
    wx.redirectTo({
      url: '../photograph/photograph',
    })

  },
  choose() {
    wx.chooseMedia({

      count: 1,
      mediaType: ['image', 'video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        // console.log(res.tempFiles[0].tempFilePath)
        wx.uploadFile({
          filePath: res.tempFiles[0].tempFilePath,
          name: 'recognition',
          url: 'http://127.0.0.1:5656/recognition',
          success(res2) {
            var resData = res2.data
            console.log(resData)

            //还需要跳转到花卉结果展示界面
            wx.redirectTo({
              url: '../result/result?flowerName=' + resData.result.flowerName + '&latinName=' + resData.result.latinName + '&detail1=' + resData.result.detail1 + '&detail2=' + resData.result.detail2 + '&src=' + res.tempFiles[0].tempFilePath,
            })

          }
        })

        // var resData = {
        //   "state": 1,
        //   "result": {
        //       "flowerName": "月季",
        //       "latinName": "Nymphaea alba",
        //       "detail1": "花期7-10月，昼开夜合。全世界睡莲属植物有40-50种，中国有5种。",
        //       "detail2": "自古睡莲同莲花一样被视为圣洁、美丽的化身。寓意洁净、纯真、纯洁、迎着朝气。"
        //       }
        //   }

      }
    })
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
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