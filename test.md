## graphql相关

```js
{
  # 用户信息
  profileJson {
    # 仓库
    account {
      # 女武神
      valkyrie {
        ……
      }
      # 装备
      weapon {
        ……
      }
      # 圣痕
      stigmata {
        ……
      }
    }
  }
  # 本周战场
  arena_weeklyJson {
    ……
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

## 评阶/星阶相关(XXX_type)

- 1 ★
- 2 ★☆
- 3 ★★
- 4 ★★☆
- 5 ★★★
- 6 ★★★☆
- 7 ★★★★
- 8 ★★★★☆
- 9 ★★★★★
- 10 ★★★★★☆
- 11 ★★★★★☆☆
- 12 ★★★★★★
- 21 S
- 22 S☆
- 23 S1
- 24 S☆☆
- 25 S2
- 26 SS
- 27 SS☆
- 28 SS1
- 29 SS☆☆
- 30 SS2
- 31 SS☆☆☆
- 32 SS3
- 33 SSS