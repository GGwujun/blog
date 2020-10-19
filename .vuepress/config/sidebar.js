const webpack = {
  title: "webpack",
  path: "/webpack/",
  collapsable: false,
  children: [
    {
      title: "dsx",
      path: "/webpack/JS",
      collapsable: false,
      sidebarDepth: 1,
    },
  ],
};

module.exports = [
  {
    title: "dsx",
    path: "/",
    collapsable: false,
    sidebarDepth: 1,
  },
  webpack,
];
