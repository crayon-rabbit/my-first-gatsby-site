# my-gatsby-site

> 参考 Gatsby[文档](https://www.gatsbyjs.com/docs/tutorial/)的练习，[链接](https://myfirstgatsbysitemain96692.gatsbyjs.io/blog/)

## 安装

### 使用脚手架

```bash
# 安装脚手架
npm i -g gatsby-cli
# 初始化
gatsby new
```

### 参考[入门库/样板库](https://www.gatsbyjs.com/starters-next/?)

```bash
# 克隆样板 形如gatsby new [SITE_DIRECTORY] [URL_OF_STARTER_GIT_REPO]
gatsby new my-gatsby-project https://github.com/cobidev/gatsby-simplefolio
```

### 不使用脚手架

```bash
# 安装脚手架
npm init gatsby
```

## How To Use 🔧 用法

```bash
# 安装依赖（常用）
yarn

# 开启热加载开发环境（常用）
yarn start

# 构建生产版本
yarn build

# 启动本地服务，本地查看生产环境版本
yarn serve

# 清缓存（常用）
yarn clean

# 上传到GitHub同步到云
git add.
git commit -m "XXX"
git push
```

## Technologies used 🛠️ 技术栈

- [Gatsby](https://www.gatsbyjs.org/) - 静态站点生成器
- [Reach Router](https://reach.tech/router/) - 路由管理
- [React](https://zh-hans.reactjs.org/) - 前端 js 库
- [GraphQL](https://www.howtographql.com/)/[GraphQL](https://graphql.cn/) - API 查询语言
- [Markdown](https://www.markdown.xyz/) - 轻量级标记语言
- [MDX](https://mdxjs.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## 项目结构

- data 数据
  - records 配装
  - arena_weekly.json 每周战场
  - item_valkyrie.json 女武神图鉴
  - profile.json 用户信息
- src
  - api 函数映射
  - components 通用组件
    - Layout 布局
    - Nav 导航栏
  - pages 路由映射
    - record 战场配装页面
    - 404.js 404 页面
    - index.js 项目入口
  - styles 页面样式
  - utils 工具类函数
- gatsby-config.js [基本配置文件](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/)
- gatsby-node.js [节点配置文件](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)
- gatsby-browser.js 客户端相关配置。一些浏览器相关的 API 通过在这个文件里去实现，比如一些监听路由变化，注册 serviceWorker 等等。
- gatsby-ssr.js 服务端渲染相关配置文件。使用 Gatsby 的服务端渲染 API 自定义影响服务端渲染的默认设置。

## gatsby 包的预构建组件

- Link 站点内页面链接
- useStaticQuery （非页面组件的）静态查询
- graphql （页面组件的）动态查询

## gatsby 的[插件库](https://www.gatsbyjs.com/plugins/)

### 普通插件（形如 gatsby-plugin-XXX）

- gatsby-plugin-gatsby-cloud 云
- gatsby-plugin-image 图片
- gatsby-plugin-manifest PWA 相关：Web 应用清单文件
- gatsby-plugin-offline PWA 相关：离线支持
- gatsby-plugin-react-helmet PWA 相关：页面元数据

### 资源插件/数据源插件（形如 gatsby-source-XXX）

- gatsby-source-filesystem 文件数据
  - allFile
  - file

### 转换插件（形如 gatsby-transformer-XXX）

- gatsby-plugin-mdx 解析.mdx 文件
  - allMdx
  - mdx
- gatsby-transformer-sharp 解析图片
- gatsby-transformer-remark 解析.md 文件
  - allMarkdownRemark
  - markdownRemark
- gatsby-transformer-json 解析json
  - allXXXJson/allJson
  - XXXJson/Json

### 评论插件（形如 gatsby-remark-XXX）

- gatsby-remark-images 响应式图像
- gatsby-remark-prismjs 语法高亮
- gatsby-remark-autolink-headers 标题创建链接

## GraphiQL

### SDL(schema definition language)

- schema (?)
  - type 定义对象(?)
    - 对象类型
    - 简单类型/标量类型
      - `String` UTF-8 字符串
      - `Int` 有符号 32 位整数
      - `Float` 有符号双精度浮点值
      - `Boolean` 布尔值
      - `ID` 唯一标识符
      - `Date` 日期
      - `String!` 非空字符串
      - `[String!]` 字符串数组可以为空，不能有空值元素
      - `[Episode!]!` 非空 Episode 数组
    - query 查询
    - mutation 变更
    - subscription 订阅
    - input 输入
    - union 联合
    - fragment 片段
  - interface 接口
  - enum 枚举

```js
type Query {
  allPersons(last: Int): [Person!]!
  allPosts(last: Int): [Post!]!
}

type Mutation {
  createPerson(name: String!, age: Int!): Person!
  updatePerson(id: ID!, name: String!, age: String!): Person!
  deletePerson(id: ID!): Person!
}

type Subscription {
  newPerson: Person!
}

type Person {
  id: ID!
  name: String!
  age: Int!
  posts: [Post!]!
}

type Post {
  title: String!
  author: Person!
}
```

### 查询语句

- 用于集合
  - sort 排序
    - fields 排序字段（可以用数组指定多个）
    - order 如何排序（可以用数组指定多个）
      - DESC 降序
      - ASC 升序（默认）
  - filter [过滤](https://www.gatsbyjs.com/docs/graphql-reference/#complete-list-of-possible-operators)
    - eq 等于
    - ne 不等于
    - regex 正则
    - glob
    - in 数组元素
    - nin 不在此数组元素
    - gt 大于
    - gte 大于等于
    - lt 小于
    - lte 小于等于
    - elemMatch 过滤器，返回一个元素数组
  - skip 跳过
  - limit 数量限制
- 用于date字段
  - formatString 格式化日期（参考[Moment.js](https://momentjs.com/)的 Format Dates）
  - locale 语言
- 用于excerpt字段
  - pruneLength
  - truncate
  - format
    - PLAIN
    - HTML
- ~~unit 长度单位~~
  - ~~METER~~
  - ~~FOOT~~
- ~~first 前~~
- ~~last 后~~

### 指令

- @include(if: Boolean) 参数为真时包含此字段
- @skip(if: Boolean) 参数为真时跳过此字段

### 元字段

- `__typename` 对象类型名称

### 内省

- `__schema`
- `__type`
- `__TypeKind`
- `__Field`
- `__InputValue`
- `__EnumValue`
- `__Directive`

## TODO

- [x] 了解 GraphQL
- [ ] 脚手架的 CMS
- [ ] 脚手架的 styling system
- [ ] 脚手架的其他插件
- [x] [用户身份验证](https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/)
- [x] [无服务器功能](https://www.gatsbyjs.com/docs/reference/functions/)
