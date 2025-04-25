// 使用小程序原生API实现计时器
Page({
  data: {
    salary: 2590,
    isRunning: false,
    timeElapsed: 0,
    earned: 0,
    formatTime: "0分0秒" // 添加这一行
  },
  
  // 处理月薪输入
  onSalaryInput(e) {
    const value = e.detail.value;
    this.setData({
      salary: value
    });
    // 如果计时器正在运行，更新已赚取金额
    if (this.data.isRunning) {
      const elapsed = Date.now() - this.startTime;
      const earned = (this.data.salary / (21.75 * 8)) * (elapsed / 3600000);
      const earnedFixed = parseFloat(earned.toFixed(2));
      this.setData({ earned: earnedFixed });
    }
  },

  onLoad() {
    // 创建音频上下文
    this.audioCtx = wx.createInnerAudioContext();
    this.audioCtx.src = '/assets/celebration.mp3';
    // 初始化lastCelebration变量
    this.lastCelebration = 0;
  },

  onUnload() {
    // 页面卸载时释放资源
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.audioCtx) {
      this.audioCtx.destroy();
    }
  },

  // 原生小程序计时器实现
  startTimer() {
    if (this.data.isRunning) return;
    
    // 保存当前时间作为开始时间，考虑已经过的时间
    this.startTime = Date.now() - this.data.timeElapsed;
    this.setData({ isRunning: true });
    
    // 清除可能存在的旧计时器
    if (this.timer) {
      clearInterval(this.timer);
    }
    
    this.timer = setInterval(() => {
      // 计算经过的时间（毫秒）
      const elapsed = Date.now() - this.startTime;
      
      // 计算时分秒
      const hours = Math.floor(elapsed / 3600000);
      const minutes = Math.floor((elapsed % 3600000) / 60000);
      const seconds = Math.floor((elapsed % 60000) / 1000);
      
      // 格式化时间字符串
      let timeStr = "";
      if (hours > 0) {
        timeStr += hours + "小时";
      }
      timeStr += minutes + "分" + seconds + "秒";
      
      // 根据月薪计算已赚取金额
      const earned = (this.data.salary / (21.75 * 8)) * (elapsed / 3600000);
      const earnedFixed = parseFloat(earned.toFixed(2));
      
      // 更新数据
      this.setData({ 
        timeElapsed: elapsed,
        earned: earnedFixed,
        formatTime: timeStr  // 添加这一行
      });
      
      // ...其余代码保持不变
    }, 100);
      
      // 强制更新UI
      this.setData({
        timeElapsed: elapsed
      });

      // 每满100元触发
      if (Math.floor(earnedFixed / 100) > Math.floor(this.lastCelebration / 100)) {
        this.lastCelebration = earnedFixed;
        // 先停止再播放，确保音频能够重新播放
        this.audioCtx.stop();
        setTimeout(() => {
          this.audioCtx.play();
        }, 100);
        wx.showToast({ 
          title: `🎉恭喜！已赚取 ${Math.floor(earnedFixed/100)*100} 元🎉`,
          icon: 'success',
          duration: 3000,
          mask: true
        });
        
        // 显示更炫酷的模态框，只有当赚到了100元或以上才显示
        if (Math.floor(earnedFixed/100)*100 >= 100) {
          // 创建随机鼓励语句数组
          const encouragements = [
            '你太棒了！💪',
            '财富自由的路上！💰',
            '继续加油！🔥',
            '成功在向你招手！👋',
            '这只是开始！⭐',
            '梦想在实现中！✨',
            '努力终将得到回报！🎁',
            '你是最闪亮的星！🌟'
          ];
          
          // 随机选择一个鼓励语句
          const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
          
          // 创建炫酷的金额显示文本
          const amount = Math.floor(earnedFixed/100)*100;
          const amountText = `💰${amount}💰`;
          
          setTimeout(() => {
            // 使用更炫酷的提示样式
            wx.showToast({
              title: `🎊 恭喜达成 ${amountText} 元 🎊\n✨ 太厉害了！✨`,
              icon: 'none',
              image: '', // 可以自定义图标
              duration: 2000, // 设置显示时间为2秒
              mask: true
            });
            
            // 添加双重振动效果增强体验
            wx.vibrateShort();
            setTimeout(() => wx.vibrateShort(), 300);
            
            // 1.5秒后显示随机鼓励语
            setTimeout(() => {
              wx.showToast({
                title: randomEncouragement,
                icon: 'none',
                duration: 2000
              });
            }, 1500);
          }, 100); // 更新为100毫秒，实现毫秒级显示
        }
        
        // 添加振动效果增强体验
        wx.vibrateShort({
          success: function() {
            console.log('振动成功');
          }
        });
      }
    }, 100); // 更新为100毫秒，实现毫秒级显示
  },
  
  // 停止计时器
  stopTimer() {
    if (!this.data.isRunning) return;
    clearInterval(this.timer);
    this.setData({ isRunning: false });
  },
  
  // 重置计时器
  resetTimer() {
    this.stopTimer();
    this.lastCelebration = 0;
    this.setData({
      timeElapsed: 0,
      earned: 0,
      salary: 2590 // 重置月薪到初始值
    });
  }
})