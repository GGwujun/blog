// Config for dumi
import { defineConfig } from "dumi";
import { nav } from "./books";

const isDev = process.env.NODE_ENV === "development";
const isVercel = process.env.IS_VERCEL;

const getNav = function () {
  return Object.keys(nav).map((cla) => ({
    title: nav[cla].title,
    children: nav[cla].data.map((book) => ({
      title: book.title,
      path: `/${book.title}`,
    })),
  }));
};

export default defineConfig({
  ...(isDev
    ? {
        dynamicImport: {},
      }
    : {
        ssr: {},
      }),

  logo: "/logo.png",
  base: isVercel ? "/" : "/blog",
  publicPath: isVercel ? "/" : "/blog/",
  favicon: "/logo.png",
  mode: "site",
  title: "大师兄",
  locales: [["zh-CN", "中文"]],
  resolve: {
    includes: ["./src", "./docs"],
    previewLangs: [],
  },
  navs: [...getNav()],
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
