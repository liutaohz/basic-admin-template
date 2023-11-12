const routerArr = [
  {
    name: 'ProTable基本使用',
    path: '/basicProTable',
    component: './BasicProTable',
    useLayout: true,
  },
  {
    name: 'ProTable搜索自定义',
    path: '/searchProTable',
    component: './SearchProTable',
    useLayout: true,
  },
  {
    name: 'ProTable其他使用',
    path: '/otherProTable',
    component: './OtherProTable',
    useLayout: true,
  },

  // 以下为原本自带的Demo页面
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
];
export default routerArr;