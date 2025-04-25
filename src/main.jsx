// 导入React核心库
import React from 'react';
// 导入ReactDOM客户端渲染方法
import ReactDOM from 'react-dom/client';
// 导入根组件
import App from './App';
// 导入Ant Design配置组件
import { ConfigProvider } from 'antd';
// 导入Ant Design中文语言包
import zhCN from 'antd/lib/locale/zh_CN';

// 创建React根节点并渲染应用
ReactDOM.createRoot(document.getElementById('root')).render(
  // 启用严格模式，用于检测潜在问题
  <React.StrictMode>
    {/* 配置Ant Design组件库使用中文 */}
    <ConfigProvider locale={zhCN}>
      {/* 渲染根组件 */}
      <App />
    </ConfigProvider>
  </React.StrictMode>
);