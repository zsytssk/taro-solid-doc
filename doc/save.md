- @todo hooks

  - usePullDownRefresh
  - usePullIntercept
  - useResize
  - usePageNotFound
  - useError
  - useTitleClick
  - ***
  - useReady
  - useLaunch
  - useDidHide
  - useDidShow
  - useLoad
  - useUnload
  - usePageScroll
  - useReachBottom
  - useAddToFavorites

- h func 的问题

  - 最好是由 solidjs 官方提供
  - 其次由我自己仿照官方写一个
  - 目前自己随便写写

- @ques 为了可用性 需要增加什么功能

- 类型

  - ref

- merge request

  - 能不能视频聊下？

- @taro

  - hooks

- @todo solidjs 要比 react 少 80k

## 2023-02-23 16:26:08

```md
Taro 对前端框架的支持，基本上是做到和 Taro 核心解藕的，可以参考：@tarojs/plugin-framework-react、@tarojs/plugin-framework-vue2、@tarojs/plugin-framework-vue3。基于此，开发者可以编写一个 Taro 插件增加对 solid、svelte 等框架的支持，不需要与 Taro 项目捆绑在一起。我们也是很希望有第三方开发者可以帮忙实现对上述前端框架的支持～

大概的思路：

编写 Taro 插件
调整 Webpack 配置
新增处理运行时核心逻辑的 connect.ts 文件，主要处理了前端框架初始化与小程序 App、Page 对象之间的对接。
修改 @tarojs/runtime（可能需要修改）
这个包主要是在小程序里模拟浏览器的环境，提供了一系列 DOM、BOM 方法等，如果前端框架使用到的某些浏览器 API 目前没有被实现，有可能需要修改 @tarojs/runtime 以添加对应方法。

其它
需要修改 @tarojs/cli 增加对应框架的项目初始化模板和初始化选项
可能需要修改 @tarojs/webpack5-runner（公共的 webpack 配置）
```
