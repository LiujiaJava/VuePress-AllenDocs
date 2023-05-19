const private = require('./private/private')
// 把最后更改时间更改为 中国地区的样式
const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式

module.exports = {
  base: '/VuePress-AllenDocs/',
  title: "Allen帮助文档",
  description: "java,Vue，前端，后端帮助文档",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.svg" }],
    ['meta', { name: 'Allen', content: 'Allen帮助档' }],
    ['meta', { name: 'keywords', content: 'Vue,java,前端，后端帮助文档' }],
    // 百度统计
    ['script', {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?668842dc21c1b8f215b000531ec8f69e";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`],
    //引入js点击效果
    ['script', { src: "/utils/js/jq3.5.1.js" }, ``],
    ['script', { src: "/utils/js/click.js" }, ``],
  ],
  theme: "reco",
  themeConfig: {

    keyPage: {
      // keys: [''], // 1.3.0 版本后需要设置为密文
      color: '#42b983', // 登录页动画球的颜色
      lineColor: '#42b983' // 登录页动画线的颜色
    },
    // 博客配置
    type: "blog",
    fullscreen: true,
    logo: "/images/favicon.svg",
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: "auto",//所有页面自动生成侧边栏
    author: "Allen",
    authorAvatar: "/images/avatar.svg",
    mode: "light", //默认显示模式  modePicker: false 关闭该按钮
    codeTheme: "tomorrow", // default 'tomorrow' okaidia
    record: "蜀ICP备20019955号",
    recordLink: "https://icp.chinaz.com/home/info?host=pengsir.top",
    smooth: "true", //平滑滚动
    // 评论设置 
    // valineConfig: {
    //   appId: private.appId,
    //   appKey: private.appKey,
    //   recordIP: true,
    //   placeholder: '填写邮箱地址可以及时收到回复噢...',
    //   visitor: true,
    // },
    lastUpdated: '最后更新时间于', 
    //友情链接
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: '唐子涵的博客',
        desc: '至于未来会怎么样 反正路还长 天总会亮',
        link: 'https://www.zihanzy.com/'
      },
      {
        title: '李Sir的博客',
        desc: '活在当下',
        link: 'https://heroli.netlify.app/'
      },
      

      // ...
    ],
    nav: [
      // 导航栏
      { text: "主页", link: "/", icon: "reco-home" },
      //工具箱
      {
        text: "工具箱",
        icon: "iconfont icon-tools",
        items: [
          { text: "在线PS", link: "https://www.uupoop.com/" },
          { text: "奶牛快传", link: "https://cowtransfer.com/" },
          { text: "编程语言排行榜", link: "https://www.tiobe.com/tiobe-index/" },
        ]
      },
      //项目
      // {
      //   text: "项目",
      //   icon: 'iconfont icon-tools',
      //   items: [
      //     { text: 'CloudMusic\t|\t米奇妙妙屋', link: 'https://penggang-home.gitee.io/cloud-music/#/discovery', icon: "iconfont icon-wangyiyunyinle" },
      //     { text: '电商后台管理系统 V：1.3.0', link: 'http://120.53.120.229:1921/#/login', icon: "iconfont icon-vue" },
      //     { text: '电商后台管理系统 V：1.2.0', link: 'http://120.53.120.229:1920/#/login', icon: "iconfont icon-vue" },
      //     { text: "电商平台实时监控系统(Echarts)", link: "http://120.53.120.229:9989/#/home", icon: "iconfont icon-vue" },
      //     { text: "仿微信聊天", link: "http://120.53.120.229:8100", icon: "reco-wechat" },
      //   ]
      // },
      //时间线
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      //关于
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "关于我",
            link: "/views/About/author",
            icon: "reco-account"
          },
          {
            text: "简历",
            link: "/views/About/resume",
            icon: "reco-document"
          },
          
          {
            text: "CSDN",
            link: "https://blog.csdn.net/weixin_43742708",
            icon: "reco-csdn",
          },
          {
            text: "GitHub",
            link: "https://github.com/penggang-home",
            icon: "reco-github",
          },
          {
            text: "Gitee",
            link: "https://gitee.com/penggang-home",
            icon: "reco-mayun",
          },
        ]
      }
    ],

  },
  // 项目开始时间
  // startYear: '2017',
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页 ！',
  markdown: {
    lineNumbers: true, //代码显示行号
  }, // 搜索设置
  plugins: {
    //一键复制代码插件: "vuepress-plugin-code-copy": "^1.0.6",
    "vuepress-plugin-code-copy": true,
    // 阅读进度条: "vuepress-plugin-reading-progress": "^1.0.10",
    "reading-progress": true,

    // 分享插件: "vuepress-plugin-social-share": "^1.0.0"
    // "social-share": {
    //   networks: ["qq", "weibo", "email"], //分享类型
    //   qq: "2845486124",
    //   email: "2845486124@gmail.com", //email地址
    // },

    // 最后更改时间插件(内置)+moment 格式化为中国地区的样式
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return moment(timestamp).format('LLLL')
      }
    },
    // 看板娘插件 https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang
    "@vuepress-reco/vuepress-plugin-kan-ban-niang":
    {
      theme: ['miku','z16', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko'],
      clean: false,
      messages: {
        welcome: '我是bookbook,欢迎你的关注 ',
        home: '心里的花，我想要带你回家。',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '再见哦'
      },
      width: 100,
      height: 219,
    },
    // 点击爆炸的彩带效果
    "cursor-effects": {
      size: 3,                    // size of the particle, default: 2
      shape: ['circle'],  // shape of the particle, default: 'star'
      zIndex: 999999999           // z-index property of the canvas, default: 999999999
    },
   
  }
}
