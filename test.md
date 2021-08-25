```js
{
  # 用户信息
  profileJson {
    account {
      charactor {
        name
      }
      weapon {
        name
      }
      stigmata {
        name
      }
    }
  }
  # 本周信息
  weeklyJson {
    name
  }
  # 配装库
  mdx {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      score
      boss
    }
    body
  }
}
```
