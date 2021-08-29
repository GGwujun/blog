const path = require('path')
const books = require("../books");
const { scan } = require("./utils");

const CUSTOM_DOC_ROOT_PATH = path.resolve(process.cwd(), "src");

const category = {
  computer: {
    title: "计算机基础",
    data: [],
  },
  algorithm: {
    title: "算法",
    data: [],
  },
  frontend: {
    title: "前端开发",
    data: [],
  },
  fengine: {
    title: "前端工程化",
    data: [],
  },
  performance: {
    title: "前端性能优化",
    data: [],
  },
  architect: {
    title: "架构师",
    data: [],
  },
  manage: {
    title: "管理",
    data: [],
  },
  other: {
    title: "其他",
    data: [],
  },
};

const getNav = function (nav) {
  return Object.keys(nav).map((cla) => ({
    title: nav[cla].title,
    children: nav[cla].data.map((book) => ({
      title: book.title,
      path: `/${book.title}`,
    })),
  }));
};

exports.getBookNavs = function () {
  [...books, ...scan(CUSTOM_DOC_ROOT_PATH)].forEach((book) => {
    category[book.category || "other"].data.push(book);
  });
  return getNav(category);
};