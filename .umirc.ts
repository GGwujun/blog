// Config for dumi
import { defineConfig } from "dumi";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  ...(isDev
    ? {
        dynamicImport: {},
      }
    : {
        ssr: {},
      }),

  logo: "http://wued.winning-health.com.cn:8088/win-design/icon.png",
  base: "/docs-winex-cli",
  publicPath: "/docs-winex-cli/",
  favicon: "http://wued.winning-health.com.cn:8088/win-design/icon.png",
  mode: "site",
  title: "winex",
  locales: [["zh-CN", "中文"]],
  resolve: {
    includes: ["./src","./docs"],
    previewLangs: [],
  },
  navs: [
    null,
    {
      title: "物料开发",
      path: "https://cool-fe.github.io/winex-material-doc/guides/",
    },
    {
      title: "GitHub",
      path: "https://github.com/cool-fe/winex-cli",
    },
  ],
  polyfill: false,
  nodeModulesTransform: {
    type: "none",
  },
  exportStatic: {},
  analytics: isDev
    ? false
    : {
        ga: "UA-149864185-1",
      },
});
