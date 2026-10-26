export default defineAppConfig({
  pages: [
    'pages/scan/index',
    'pages/history/index',
    'pages/ingredient/index',
    'pages/mine/index',
    'pages/result/index',
    'pages/ingredientDetail/index',
    'pages/settings/index',
    'pages/about/index',
    'pages/allergenSettings/index'
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#00b870',
    navigationBarTitleText: '食安助手',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#86909c',
    selectedColor: '#00b870',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/scan/index',
        text: '扫描',
        iconPath: 'assets/tabbar/scan.png',
        selectedIconPath: 'assets/tabbar/scan-selected.png'
      },
      {
        pagePath: 'pages/history/index',
        text: '记录',
        iconPath: 'assets/tabbar/history.png',
        selectedIconPath: 'assets/tabbar/history-selected.png'
      },
      {
        pagePath: 'pages/ingredient/index',
        text: '配料库',
        iconPath: 'assets/tabbar/ingredient.png',
        selectedIconPath: 'assets/tabbar/ingredient-selected.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: 'assets/tabbar/mine.png',
        selectedIconPath: 'assets/tabbar/mine-selected.png'
      }
    ]
  }
})
