https://github.com/NervJS/taro/issues/12834
https://github.com/solidjs/solid/issues/1617

了解 taro 在本地是怎么工作的

- @ques taro 打包的流程是什么？webpack 的配置在哪

找一个话题 看看对方 能在这个话题上说的多深 看看她的激情 。。。
在某个领域表现的最好

## 2023-02-25 10:47:57

- @ques solid-js 1.7.3

- @ques `eslintsimple-import-sort/imports`

- @ques solidjs 内部更新的逻辑 owner 树

- @todo 搞清楚个部分的功能要做的事情。。。

  - 删除无用的东西
  - solidjs 的 render
  - hook 的逻辑 需要吗？怎么方便 开发？

- @todo

  - @ques ref ?
  - @ques fragment 需要怎么处理

- @ques setReconciler 是做什么的？

  - 一些内部的处理 solidjs 可能用不上
  - 可能是绑定 taro 中的一些内置方法

- @ques 怎么测试功能

  - 切换页面 -> 有没有销毁
  - 状态切换
  - scroll 属性
  - 弹框

- @ques 有哪些用 react 的地方

- @todo 删除不需要的

- 是不是把 render 换掉就行了

- @ques hooks.tap 是做什么的

- @todo webpack 监听 node_modules/...

- @todo 搞清楚个部分的功能
- @todo 默认组件在哪生成

- @ques 代码到底是在哪运行的

  - loader-meta -> creator
  - runtime/connect

- @ques loader-meta 是做什么对

  - 好像是注入运行文件

- @ques taro 能不能监听 node_modules 自动编译

### end

- @todo 替换 ReactDOM 为 SOlid...

- @ques `h` 是什么

  - 编译函数？
  - 用什么替换 solidjs 中的什么

- @ques 为什么 修改 runtime, 打包到 dist 里面就没有了

```
@tarojs/plugin-framework-react/dist/runtime
    - node_modules/.taro/weapp -> 清理
```

- @ques 要不换成 react

- @ques 能不能直接 watch plugin ? 然后自动打包到
