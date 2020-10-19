const webpack = {
  title: "webpack",
  path: "/webpack/",
  collapsable: false,
  children: [
    {
      title: "webpack-babel",
      path: "/webpack/webpack-babel/",
      collapsable: false,
      sidebarDepth: 1,
    },
    {
      title: "webpack-js",
      path: "/webpack/webpack-js/",
      collapsable: false,
      sidebarDepth: 1,
    },
    {
      title: "webpack-modules",
      path: "/webpack/webpack-modules/",
      collapsable: false,
      sidebarDepth: 1,
    },
    {
      title: "webpack-css",
      path: "/webpack/webpack-css/",
      collapsable: false,
      sidebarDepth: 1,
    },
    {
      title: "webpack-splitChunks",
      path: "/webpack/webpack-splitChunks/",
      collapsable: false,
      sidebarDepth: 1,
    },
  ],
};

module.exports = [
  webpack,
  {
    title: "react性能调优",
    path: "/react性能调优/",
    collapsable: false,
  },
  {
    title: "web日志监控",
    path: "/logger/",
    collapsable: false,
  },
];
