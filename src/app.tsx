import React, { useEffect } from 'react';
import { useDidShow, useDidHide } from '@tarojs/taro';
import Taro from '@tarojs/taro';
// 全局样式
import './app.scss';

function App(props) {
  useEffect(() => {
    // 微信小程序初始化云开发
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({ env: 'healthcheck-d5gw64wx7d6fa5291', traceUser: true });
    }
  }, []);

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return props.children;
}

export default App;
