Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
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
    },{
      pagePath: "../game/game",
      iconPath: "../data/我来回答.png",
      selectedIconPath: "../data/我来回答2.png",
      text: "趣味问答"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})