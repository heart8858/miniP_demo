// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"初始化测试数据",
    userInfo:{}, //存放用户的基本信息
  },

  handleParent() {
    console.log('parent')
  },
  handleChild() {
    console.log('Child')
  },

  //跳转至logs页面的方法
  toLogs() {
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload')
    // debugger;

    // 修改msg 的状态数据,this代表当前页面的实例对象
    // console.log(this.data.msg)
    // setTimeout(() => {
    //   this.setData({
    //     msg: "修改之后的数据"
    //   })
    //   console.log(this.data.msg)
    // },2000)

    // 授权后,获取用户信息
    wx.getUserInfo({
      success:(res) => {
        console.log(res);
      },
      faile: (err) => {
        console.log(err);
      }
    })
  },

  //获取用户信息的回调
  handleGetUserInfo(res) {
    console.log(res)
    if(res.detail.userInfo) {//允许
      //修改userInfo的状态数据
      this.setData({
        userInfo: res.detail.userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示 执行多次
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
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