// pages/game/game.js
var gameLength = 0
var flag = 0
var colorRed = "rgb(229,71,71)"
var colorGreen = "rgb(131,193,193)"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    gameList: [],
    randomNum: 0,
    gameOne: {},
    btnColor: ["", "", "", ""],
    txtColor: ["", "", "", ""]
  },
  check: function (option) {
    if (flag == 1) return
    else flag = 1
    var choice = option.currentTarget.dataset.choice
    var answer = option.currentTarget.dataset.answer
    var pos = parseInt(choice, 16) - parseInt('A', 16)
    var ansPos = parseInt(answer, 16) - parseInt('A', 16)
    console.log(pos)
    var up = "btnColor[" + pos + "]"
    var ansUp = "btnColor[" + ansPos + "]"
    var upTxt = "txtColor[" + pos + "]"
    var ansUpTxt = "txtColor[" + ansPos + "]"

    if (choice != answer) {
      this.setData({
        [up]: colorRed,
        [ansUp]: colorGreen,
        [upTxt]: "white",
        [ansUpTxt]: "white"

      })
    } else {
      this.setData({
        [up]: colorGreen,
        [upTxt]: "white"
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var gameData = {
    //   "state": 1,
    //   "result": [{
    //     "qId": 1,
    //     "flowerName": "彼岸花",
    //     "question": "上图显示的是什么花？",
    //     "optionA": "彼岸花",
    //     "optionB": "桃花",
    //     "optionC": "樱花",
    //     "optionD": "梅花",
    //     "answer": "A"

    //   }, {
    //     "qId": 2,
    //     "flowerName": "牡丹",
    //     "question": "上图显示的是什么花？",
    //     "optionA": "彼岸花",
    //     "optionB": "牡丹花",
    //     "optionC": "樱花",
    //     "optionD": "梅花",
    //     "answer": "B"
    //   }, {
    //     "qId": 3,
    //     "flowerName": "睡莲",
    //     "question": "上图显示的是什么花？",
    //     "optionA": "彼岸花",
    //     "optionB": "牡丹花",
    //     "optionC": "睡莲",
    //     "optionD": "梅花",
    //     "answer": "C"
    //   }]
    // }



    wx.request({
      url: 'http://127.0.0.1:5656/game',
      header: {
        'content-type': 'application/json'
      },
      success(gameData) {
        gameLength = gameData.result.length
        this.setData({
          gameList: gameData.result
        })
      }
    })


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
        selected: 2,
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

    var ranNum = Math.floor(Math.random() * gameLength)
    this.setData({
      randomNum: ranNum,
      btnColor: ["", "", "", ""],
      txtColor: ["", "", "", ""]
    })
    flag = 0
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