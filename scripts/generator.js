// Node
var { Sitdown } = require("../packages/sitdown");
const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const chalk = require("chalk");
const books = require("../books");
const { strict } = require("assert");

const isDev = process.argv.slice(2) && process.argv.slice(2).includes("DEBUG");

const logger = {
  log: function (str) {
    if (!isDev) return;
    else {
      console.log(str);
    }
  },
};

const rmTrin = function (str) {
  return str
    .replace(/\s/g, "")
    .replace(/\//g, "")
    .replace(/\(([^)]*)\)/, "")
    .replace(/\*/g, " ")
    .replace(/（/g, "(")
    .replace(/）/g, ")")
    .replace(/\%/g, "")
    .replace(/\|/, " ")
    .replace(/[\?：，]/g, "");
};

const getList = function (index) {
  return index < 9 ? `0${index + 1}` : index + 1;
};

const createDocDir = function (book) {
  const DocDir = `docs`;
  if (!fs.existsSync(DocDir)) {
    fs.mkdirSync(DocDir);
  }
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

  let summaryData = `# ${book.title}\n`;
  book.data.forEach((chapter, index) => {
    // 一级目录
    const firstToc = chapter.chapterTitle;
    // 只有一级目录
    if (!firstToc) {
      const parentLink = `/${book.title}/${rmTrin(chapter.article_title)}`;
      summaryData += `- [${chapter.article_title}](${parentLink})\n`;
    } else {
      const parentLinkName = `${getList(index)}.${rmTrin(
        chapter.chapterTitle
      )}`;
      const parentLink = `/${book.title}/${getList(index)}.${rmTrin(
        chapter.chapterTitle
      )}`;
      summaryData += `- [${parentLinkName}](${parentLink})\n`;
      chapter.children.forEach((article, i) => {
        summaryData += `  - [${article.article_title}](${parentLink}/${getList(
          i
        )})\n`;
      });
    }
  });

  fs.writeFileSync(summaryDir, summaryData);
  fs.writeFileSync(indexDir, summaryData);
};

const createDocs = function (book) {
  var sitdown = new Sitdown();
  const bookDir = `docs/${book.title}`;
  logger.log(chalk.green(`create book: ${book.title}`));
  book.data.forEach((chapter, index) => {
    if (!chapter.chapterTitle) {
      const articleDir = `${bookDir}/${rmTrin(chapter.article_title)}`;
      logger.log(chalk.white(`  create book article:${chapter.article_title}`));
      const mdContent = `---
date: "2019-06-23"
---  
      
# ${chapter.article_title}\n${sitdown.HTMLToMD(chapter.content)}`;
      fs.writeFileSync(`${articleDir}.md`, mdContent);
    } else {
      const dir = rmTrin(chapter.chapterTitle);
      const chapterDir = `${bookDir}/${getList(index)}.${dir}`;
      if (!fs.existsSync(chapterDir)) {
        fs.mkdirSync(chapterDir);
      }

      logger.log(chalk.yellow(`  create book chapter:${chapter.chapterTitle}`));

      chapter.children.forEach((article, i) => {
        logger.log(
          chalk.white(`    create book article:${article.article_title}`)
        );
        const mdContent = `---
date: "2019-06-23"
---  
      
# ${article.article_title}\n${sitdown.HTMLToMD(article.content)}`;

        fs.writeFileSync(`${chapterDir}/${getList(i)}.md`, mdContent);
      });
    }
  });

  console.log(
    chalk.green(`successfully generator book:${book.title}|${book.data.length}`)
  );
};

const clearDocs = function () {
  rimraf.sync(path.resolve(process.cwd(), "docs/*"), {
    glob: true,
  });
};

clearDocs();
createDocDir();

const createRepo = function (book) {
  createRepoDir(book);
  createConfig(book);
  createSummary(book);
};

books.forEach((book) => {
  createRepo(book);
  createDocs(book);
});
