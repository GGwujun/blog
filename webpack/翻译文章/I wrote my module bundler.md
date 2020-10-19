# I wrote my module bundler

在上一篇文章中，我解释了模块绑定器的工作原理。我以webpack和rollup为例，它们分别为我们提供了一个不同的视角，让我们了解如何捆绑javascript应用程序。

在本文中，我将向您展示如何编写模块绑定器。模块捆绑器本身还没有准备好生产，但我通过练习学到了很多东西，我更欣赏现代模块捆绑器提供的功能。



> ⚠️ **警告：前面有大量javascript代码。**🙈😱😨** ⚠️



### 起步

在上一篇文章中，我讨论了模块绑定器的输入（javascript模块）和输出（捆绑的javascript文件）。现在是时候编写一个模块绑定器来接收输入并生成输出了。

基本模块捆绑器可分为两部分：

- 理解代码并构造依赖关系图（**依赖关系解析**）
- 将模块组装成一个（或多个）javascript文件（**Bundle**）



> 依赖图是模块之间依赖关系的图表示。



#### 输入

在本文中，我将使用以下文件作为绑定器的输入：

```javascript
index.js

import squareArea from './square.js';
import circleArea from './circle.js';

console.log('Area of square: ', squareArea(5));
console.log('Area of circle', circleArea(5));
```

```javascript
square.js

function area(side) {
  return side * side;
}
export default area;
```

```javascript
circle.js

const PI = 3.141;
function area(radius) {
  return PI * radius * radius;
}
export default area;
```

我已经在github上创建了这个项目，所以如果您有兴趣自己尝试一下，可以克隆它并签出fixture-1标记。输入文件在fixture/文件夹中。



### 写代码

我从模块捆绑器的主要结构开始：

```javascript
function build({ entryFile, outputFolder }) {
  // build dependency graph
  const graph = createDependencyGraph(entryFile);
  // bundle the asset
  const outputFiles = bundle(graph);
  // write to output folder
  for(const outputFile of outputFiles) {
    fs.writeFileSync(
      path.join(outputFolder, outputFile.name),
      outputFile.content,
      'utf-8'
    )
  }
}
```



> 依赖图是一个有向图，其中顶点是模块，有向边是模块之间的依赖关系。



```javascript
function createDependencyGraph(entryFile) {
  const rootModule = createModule(entryFile);
  return rootModule;
}
```

所以，入口模块是图的“根”。

在createmodule中，我实例化了一个新的模块实例：

```javascript
function createModule(filePath) {
  return new Module(filePath);
}
```

类模块将用于记录模块属性，如内容、依赖项、导出键等。

```javascript
class Module {
  constructor(filePath) {
    this.filePath = filePath;
    this.content = fs.readFileSync(filePath, 'utf-8');
    this.dependencies = [];
  }
}
```

虽然内容是模块的字符串内容，但为了理解它的实际含义，我使用babel将内容解析为ast（抽象语法树）：

```javascript
const babel = require('@babel/core');

class Module {
  constructor(filePath) {
    this.filePath = filePath;
    this.content = fs.readFileSync(filePath, 'utf-8');
    this.ast = babel.parseSync(this.content);
  }
}
```

接下来，我需要找出这个模块的依赖关系：

```javascript
class Module {
  constructor(filePath) {
    this.filePath = filePath;
    this.content = fs.readFileSync(filePath, 'utf-8');
    this.ast = babel.parseSync(this.content);
    this.dependencies = this.findDependencies();
  }
  findDependencies() {
    //
  }
}
```

那么，我怎么知道这个模块的依赖关系呢？在babel ast explorer的帮助下，我可以从ast中查找import语句。

![image-20191009215506089](/Users/gaowujun/Library/Application Support/typora-user-images/image-20191009215506089.png)

我发现ast中的import语句称为importdeclaration。它有说明符和源，source.value告诉我们这个模块从哪个导入：

```javascript
findDependencies() {
  return this.ast.program.body
    .filter(node => node.type === 'ImportDeclaration')
    .map(node => node.source.value)
}
```

