import { extend } from './helper';

function Canvas(wxCanvas, isNew, canvasId) {
  this.wxCanvas = wxCanvas;
  this.canvasId = canvasId;
  this.isNew = isNew;
  this.ctx = wxCanvas.getContext('2d');
  this.chart = null;

  this._initStyle();
  this._initEvent();
}

extend(Canvas.prototype, {
  _initStyle: function () {
    this.ctx.dpr = 1;
  },

  _initEvent: function () {
    // 小程序不需要事件系统
  },

  getContext: function (type) {
    if (type === '2d') {
      return this.ctx;
    }
  },

  setChart: function (chart) {
    this.chart = chart;
  },

  attachEvent: function () {
    // 小程序不需要事件系统
  },

  detachEvent: function () {
    // 小程序不需要事件系统
  },

  _initContext: function (ctx) {
    Object.keys(ctx).forEach(key => {
      if (typeof ctx[key] === 'function') {
        this[key] = function () {
          return ctx[key].apply(ctx, arguments);
        };
      } else {
        Object.defineProperty(this, key, {
          get: function () {
            return ctx[key];
          },
          set: function (val) {
            ctx[key] = val;
          }
        });
      }
    });
  }
});

export default Canvas; 