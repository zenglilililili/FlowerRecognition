// pages/photograph/photograph.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    logs: []
  },


  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  checkPhoto: function (srcImg) {
    if (JSON.stringify(srcImg.target.dataset) === "{}") {
      console.log("没有拍照")
      return
    }
    const tempFilePaths = srcImg.target.dataset.gid
    wx.uploadFile({
      filePath: tempFilePaths,
      name: 'recognition',
      url: 'http://127.0.0.1:5656/recognition',
      success(resData) {
        var resData = res2.data
        console.log(resData)
        //还需要跳转到花卉结果展示界面
        wx.redirectTo({
          url: '../result/result?flowerName=' + resData.result.flowerName + '&latinName=' + resData.result.latinName + '&detail1=' + resData.result.detail1 + '&detail2=' + resData.result.detail2 + '&src=' + tempFilePaths,
        })
      }
    })

    // var resData = {
    //   "state": 1,
    //   "result": {
    //     "flowerName": "睡莲",
    //     "latinName": "Nymphaea alba",
    //     "detail1": "花期7-10月，昼开夜合。全世界睡莲属植物有40-50种，中国有5种。",
    //     "detail2": "自古睡莲同莲花一样被视为圣洁、美丽的化身。寓意洁净、纯真、纯洁、迎着朝气。"
    //   }
    // }




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