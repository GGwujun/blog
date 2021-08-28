const net = require("./net");
const algorithm = require("./algorithm");
const dataStructure = require("./dataStructure");
const http = require("./http");
const manager = require("./manger");
const browser = require("./browser");
const javascript = require("./JavaScript");
const computer = require("./computer");
const designPattern = require("./designPattern")

const category = {
  computer: {
    title: "计算机基础",
    data: [computer, net, http],
  },
  algorithm: {
    title: "算法",
    data: [algorithm, dataStructure],
  },
  frontend: {
    title: "前端开发",
    data: [javascript, browser],
  },
  architect: {
    title: "架构师",
    data: [designPattern],
  },
  manage: {
    title: "管理",
    data: [manager],
  },
};

exports.nav = category;

exports.books = Object.keys(category)
  .map((cla) => category[cla].data)
  .reduce((pre, cur) => {
    pre.push(...cur);
    return pre;
  }, []);
