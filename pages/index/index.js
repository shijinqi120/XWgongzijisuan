// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseSalary: '',
    overtimeHours: '',
    overtimeRate: '1.5',
    bonus: '',
    insuranceRate: '10.5',
    taxThreshold: '5000',
    overtimePay: 0,
    insurance: 0,
    taxableIncome: 0,
    tax: 0,
    netSalary: 0,
    showResult: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 初始化页面数据
  },

  // 输入框事件处理函数
  inputBaseSalary(e) {
    this.setData({
      baseSalary: e.detail.value
    });
  },

  inputOvertimeHours(e) {
    this.setData({
      overtimeHours: e.detail.value
    });
  },

  inputOvertimeRate(e) {
    this.setData({
      overtimeRate: e.detail.value
    });
  },

  inputBonus(e) {
    this.setData({
      bonus: e.detail.value
    });
  },

  inputInsuranceRate(e) {
    this.setData({
      insuranceRate: e.detail.value
    });
  },

  inputTaxThreshold(e) {
    this.setData({
      taxThreshold: e.detail.value
    });
  },

  // 计算工资函数
  calculateSalary() {
    // 获取输入值并转换为数字
    const baseSalary = parseFloat(this.data.baseSalary) || 0;
    const overtimeHours = parseFloat(this.data.overtimeHours) || 0;
    const overtimeRate = parseFloat(this.data.overtimeRate) || 1.5;
    const bonus = parseFloat(this.data.bonus) || 0;
    const insuranceRate = parseFloat(this.data.insuranceRate) || 10.5;
    const taxThreshold = parseFloat(this.data.taxThreshold) || 5000;
    
    // 计算加班费 (基本工资 / 21.75天 / 8小时 * 加班小时 * 加班费率)
    const hourlyRate = baseSalary / 21.75 / 8;
    const overtimePay = hourlyRate * overtimeHours * overtimeRate;
    
    // 计算社保个人缴纳部分
    const insurance = baseSalary * (insuranceRate / 100);
    
    // 计算应纳税所得额 (工资 + 加班费 + 奖金 - 社保 - 起征点)
    const totalIncome = baseSalary + overtimePay + bonus;
    const taxableIncome = totalIncome - insurance - taxThreshold;
    
    // 计算个人所得税 (使用超额累进税率)
    let tax = 0;
    if (taxableIncome > 0) {
      if (taxableIncome <= 3000) {
        tax = taxableIncome * 0.03;
      } else if (taxableIncome <= 12000) {
        tax = taxableIncome * 0.1 - 210;
      } else if (taxableIncome <= 25000) {
        tax = taxableIncome * 0.2 - 1410;
      } else if (taxableIncome <= 35000) {
        tax = taxableIncome * 0.25 - 2660;
      } else if (taxableIncome <= 55000) {
        tax = taxableIncome * 0.3 - 4410;
      } else if (taxableIncome <= 80000) {
        tax = taxableIncome * 0.35 - 7160;
      } else {
        tax = taxableIncome * 0.45 - 15160;
      }
    }
    
    // 计算实发工资
    const netSalary = totalIncome - insurance - tax;
    
    // 更新数据，保留两位小数
    this.setData({
      overtimePay: overtimePay.toFixed(2),
      insurance: insurance.toFixed(2),
      taxableIncome: taxableIncome > 0 ? taxableIncome.toFixed(2) : '0.00',
      tax: tax.toFixed(2),
      netSalary: netSalary.toFixed(2),
      showResult: true
    });
    
    // 如果计算结果为正，播放庆祝音效
    if (netSalary > 0) {
      this.playCelebrationSound();
    }
  },
  
  // 播放庆祝音效
  playCelebrationSound() {
    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.src = '/assets/celebration.mp3';
    innerAudioContext.play();
  },
  
  // 重置表单
  resetForm() {
    this.setData({
      baseSalary: '',
      overtimeHours: '',
      overtimeRate: '1.5',
      bonus: '',
      insuranceRate: '10.5',
      taxThreshold: '5000',
      overtimePay: 0,
      insurance: 0,
      taxableIncome: 0,
      tax: 0,
      netSalary: 0,
      showResult: false
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '智能工薪计算系统',
      path: '/pages/index/index'
    }
  }
})