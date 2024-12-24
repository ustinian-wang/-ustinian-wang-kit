# 帮助手册

## Q: npm install 很慢



## Q：怎么发布npm包

- npm login
- npm publish

## Q: npm publish 发布不了

问题原因：墙的缘故
解决方式：
    1. 梯子开一下
        2. 设置npm的代理服务器地址，端口号可以在梯里面找http:
npm config set proxy http://127.0.0.1:8001

## Q: package.json如何填写

```json
{
  "name": "my-awesome-package",
  "version": "1.0.0",
  "description": "An awesome package for JavaScript",
  "main": "dist/index.js",
  "scripts": {
    "build": "webpack",
    "test": "jest",
    "start": "node dist/index.js"
  },
  "keywords": [
    "awesome",
    "package",
    "JavaScript"
  ],
  "files": [
    "dist"
  ],
  "author": {
    "name": "Your Name",
    "email": "your-email@example.com"
  },
  "license": "MIT",
  "dependencies": {
    "axios": "^0.21.1"
  },
  "devDependencies": {
    "jest": "^27.0.4",
    "webpack": "^5.45.1",
    "webpack-cli": "^4.8.0"
  },
  "repository": "https://github.com/your-username/my-awesome-package",
  "homepage": "https://github.com/your-username/my-awesome-package#readme"
}

```

## Q: 如果没有修改源代码，只是改了package.json，npm要怎么发布这个包，需要修改版本号么？

按照npm的规范来说是不行的，你只能`修订号`+1来重新发包了。

## Q: 如何加上changelog


### 1. 安装 standard-version

```bash
# 安装为开发依赖
npm install --save-dev standard-version
```

### 2. 配置 package.json

```json
{
  "scripts": {
    "release": "standard-version",
    "release:patch": "standard-version --release-as patch",
    "release:minor": "standard-version --release-as minor",
    "release:major": "standard-version --release-as major"
  }
}
```

### 3. 创建配置文件 .versionrc.json

```json
{
  "types": [
    {"type": "feat", "section": "✨ Features | 新功能"},
    {"type": "fix", "section": "🐛 Bug Fixes | Bug 修复"},
    {"type": "docs", "section": "📝 Documentation | 文档"},
    {"type": "style", "section": "💄 Styles | 风格"},
    {"type": "refactor", "section": "♻️ Code Refactoring | 代码重构"},
    {"type": "perf", "section": "⚡ Performance Improvements | 性能优化"},
    {"type": "test", "section": "✅ Tests | 测试"},
    {"type": "build", "section": "👷‍ Build System | 构建"},
    {"type": "ci", "section": "🔧 Continuous Integration | CI 配置"},
    {"type": "chore", "section": "📦 Chores | 其他更新"},
    {"type": "revert", "section": "⏪ Revert | 回退"}
  ]
}
```

### 4. 使用规范的 commit 消息

提交代码时使用规范的 commit message 格式：
```shell
# 新功能
git commit -m "feat: 添加新的功能"

# 修复 bug
git commit -m "fix: 修复了某个问题"

# 文档更新
git commit -m "docs: 更新了文档"

# 代码重构
git commit -m "refactor: 重构了某个功能"
```

### 5. 发布新版本

```bash
# 自动判断版本类型
npm run release

# 或指定版本类型
npm run release:patch
npm run release:minor
npm run release:major
```

### 6. 完整的发布流程示例

```bash
# 1. 提交你的改动
git add .
git commit -m "feat: 添加新功能"

# 2. 生成新版本和 CHANGELOG
npm run release

# 3. 推送到远程仓库
git push --follow-tags origin main

# 4. 发布到 npm
npm publish
```

### 7. 创建一个更完整的发布脚本

```json
{
  "scripts": {
    "release": "standard-version",
    "release:patch": "standard-version --release-as patch",
    "release:minor": "standard-version --release-as minor",
    "release:major": "standard-version --release-as major",
    "publish:patch": "npm run release:patch && git push --follow-tags origin main && npm publish",
    "publish:minor": "npm run release:minor && git push --follow-tags origin main && npm publish",
    "publish:major": "npm run release:major && git push --follow-tags origin main && npm publish"
  }
}
```

## Q: 给项目发版本打tag

## Q: 如何利用github actions自动部署github pages
原理：
- git actions 增加一个工作流文件`actions-yml`，文件的内容如下：
  ```yml
    name: kit deployment
    on:
    push:
    branches:
    - main
    permissions:
    contents: write
    jobs:
    build-and-deploy:
    concurrency: ci-${{ github.ref }} # Recommended if you intend to make multiple deployments in quick succession.
    runs-on: ubuntu-latest
    steps:
    - name: Checkout 🛎️
    uses: actions/checkout@v4
    
          - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
            run: |
              yarn install
              yarn test
              yarn docs:build
    
          - name: Deploy 🚀
            uses: JamesIves/github-pages-deploy-action@v4
            with:
              folder: kit-docs # The folder the action should deploy.
    ```
- `JamesIves/github-pages-deploy-action@v4`
  会为你的仓库自动创建了`gh-pages`分支 
- 当你构建结束后，会把产物提交到gh-pages上
- 接着github pages选择gh-pages分支作为文档
- 然后访问github.io即可看到效果

## Q 怎那么加上git commit规范校验

- 入门参考[官方文档](https://commitlint.js.org/guides/getting-started)
- 最后`commitlint.config.js`的内容参考这篇[博客](https://juejin.cn/post/6983191125242675230)
