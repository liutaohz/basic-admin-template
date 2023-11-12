import { defineConfig } from '@umijs/max';
import routerArr from './src/router';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  hash: true,
  history: { type: 'hash' },
  historyWithQuery:{},
  jsMinifier: 'terser',
  outputPath: 'dist',
  // publicPath: '/basic-admin-template/',
  publicPath: process.env.NODE_ENV === 'production' ? '/basic-admin-template/' : '/',
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/basicProTable',
    },
    ...routerArr,
  ],
  npmClient: 'yarn',
});

