// Node
var { Sitdown } = require("sitdown");
const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const books = require("../books");
const { strict } = require("assert");

const rmTrin = function (str) {
  return str.replace(/\s/g, "").replace(/\//g,'').replace(/\(([^)]*)\)/, "");
};

const getList = function (index) {
  return index < 9 ? `0${index+1}` : index+1;
};

const createRepoDir = function (book) {
  const repoDir = `docs/${book.title}`;
  if (!fs.existsSync(repoDir)) {
    fs.mkdirSync(repoDir);
  }
};

const createConfig = function (book) {
  const waqueConfigName = `docs/${rmTrin(book.title)}/yuque.yml`;

  const waqueConfig = `
  # 配置请参考：https://www.yuque.com/waquehq/docs/configuration
  repo: 'dashixiong-xacfr/nd09a9'
  pattern: '**/*.md'
  promote: false
  `;

  fs.writeFileSync(waqueConfigName, waqueConfig);
};

const createSummary = function (book) {
  const summaryDir = `docs/${book.title}/summary.md`;
  const indexDir = `docs/${book.title}/index.md`;

  let summaryData = "";
  book.data.forEach((chapter, index) => {
    // 一级目录
    const firstToc = chapter.chapterTitle;
    summaryData += `- [${getList(index)}.${rmTrin(chapter.chapterTitle)}]()\n`;
    chapter.children.forEach((article, i) => {
      summaryData += `  - [${article.article_title}](${getList(i)})\n`;
    });
  });

  fs.writeFileSync(summaryDir, summaryData);
  fs.writeFileSync(indexDir, summaryData);
};

const createDocs = function (book) {
  var sitdown = new Sitdown();
  const bookDir = `docs/${book.title}`;
  book.data.forEach((chapter, index) => {
    const dir = rmTrin(chapter.chapterTitle);
    const chapterDir = `${bookDir}/${getList(index)}.${dir}`;
    if (!fs.existsSync(chapterDir)) {
      fs.mkdirSync(chapterDir);
    }
    chapter.children.forEach((article, i) => {
      const mdContent = `---
date: "2019-06-23"
---  
      
# ${article.article_title}\n${sitdown.HTMLToMD(article.content)}`;

      fs.writeFileSync(`${chapterDir}/${getList(i)}.md`, mdContent);
    });
  });
};

const clearDocs = function () {
  rimraf.sync(path.resolve(process.cwd(), "docs/*"), {
    glob: true,
  });
};

clearDocs();

const createRepo = function (book) {
  createRepoDir(book);
  createConfig(book);
  createSummary(book);
};

books.forEach((book) => {
  createRepo(book);
  createDocs(book);
});
