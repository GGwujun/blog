// Config for dumi
import { defineConfig } from "dumi";
import { getBookNavs } from "./scripts/navs";

const isDev = process.env.NODE_ENV === "development";
const isVercel = process.env.IS_VERCEL;

export default defineConfig({  
  base: isVercel ? "/" : "/blog",
  publicPath: isVercel ? "/" : "/blog/",
  favicons: ["/logo.png"],
  themeConfig: { name: "大师兄",logo: "/logo.png",nav: [...getBookNavs()], },
  locales: [{ id: 'zh-CN', name: '中文' }],
  resolve: {
    // includes: ["./src", "./docs"],
    docDirs: ['docs'], // 2.0 默认值
    atomDirs: [{ type: 'component', dir: 'src' }], // 2.0 默认值
  },
  
  polyfill: false,
  exportStatic: {},
  analytics: isDev
    ? false
    : {
        ga: "UA-149864185-1",
      },
});
