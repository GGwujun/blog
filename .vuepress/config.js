const { mdConf, themeConf, localesConf } = require("./config/index");

module.exports = {
  base: "/",
  dest: "./docs",
  locales: localesConf,
  markdown: mdConf,
  themeConfig: themeConf,
  plugins: [
    require("./plugins/my-router"),
    "@vuepress/back-to-top",
    ["@vuepress/google-analytics", { ga: "UA-124601890-1" }],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现页面有新内容",
          buttonText: "刷新",
        },
      },
    ],
    [
      "vuepress-plugin-comment",
      {
        choosen: "gitalk",
        options: {
          clientID: "c8097cb5f60fc819c951",
          clientSecret: process.env.clientSecret || "",
          repo: "blog",
          owner: "GGwujun",
          admin: ["GGwujun"],
          id: "<%- frontmatter.commentid || frontmatter.permalink %>", // Ensure uniqueness and length less than 50
          distractionFreeMode: false, // Facebook-like distraction free mode
          labels: ["Gitalk", "Comment"],
          title: "「评论」<%- frontmatter.title %>",
          body:
            "<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>",
        },
      },
    ],
  ],
};
