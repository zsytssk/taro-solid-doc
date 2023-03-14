- @bug getOwner | runWithOwner | https://www.solidjs.com/docs/latest/api#createuniqueid

- @ques 对 h5 的支持

- @ques taro merge request

  - framework: 'react' 换成 solid -> 报错
  - webpack5 增加 framework solid 设置
  - taro/cli 添加模版

- @ques @solid-refresh

- @ques 易用性 solidjs api + hooks

  - https://www.solidjs.com/tutorial/stores_nested_reactivity
  - getOwner
  - createRoot

- @ques UsePageContext

- @ques Current.router 是做什么地

- @ques useDidShow 其实没有什么意义

h 函数中的 children 有更好的方式处理吗

```
use:clickOutside -> use is not a function
findClosestRoot

function use(fn, ele, valAccessor) {
    createRenderEffect(() => {
        const val = valAccessor();
        fn(ele, val)
    })
}
```

- api use:clickOutside

- createMemo 可以用在多次地方依赖一个 signal，memo 可能是同样的作用

- Portal 能不能用在小程序中 -> 微信小程序的 RootPortal

  - 也许可以自己写一个
  - solid-js/universal 支不支持？

- 可以不引用 classNames -> classList 无效

- prop.ref

```
SharedArrayBuffer will require cross-origin isolation as of M92,
reportRealtimeAction:fail not support
```

- @ques -> plugin 里面要不要写

- @ques getLifecycle 要不要删除

- @ques initNativeApi 能做什么

- @ques h5 的支持怎么处理

- @ques `@tarojs/components$` 怎么处理

- @ques 能不能导入其他文件的注释

- @todo 可以吧 plugin 直接放到 src 兄弟文件夹下

  - 无法引用

- @ques setAlias 怎么处理

### end

- @ques `taro.getCurrentInstance()` 是在哪创建的

  - 这个在不同的框架上是不是不一样

- @ques alipay globalThis error

- @bug classList 为空的处理

- @ques app -> useLaunch ?

- @ques 原生的 react 打包之后有多大

- @ques solid 数据更新之后没有渲染

  - 是不是 h func 的问题 -> 能不能不用 h func
    - `use` 是做什么的
    - 属性中的 use 如何处理
    - 感觉总会缺少什么东西
  - 有没有更好的方法去处理

- @ques 属性中的 fun 如何处理？

  - createRenderEffect

- base.wxml 没有对应的模版

- @ques 打包成了两分 render 怎么处理

- https://indepth.dev/posts/1289/solidjs-reactivity-to-rendering

- @ques 为什么执行两次

  - console.log(`test:>name`, name, typeof children);

- @ques solidjs 能不能只监听他自己的修改

  - 现在好像是 每一个发生变化 每一个的 createEffect 都会变化 那还得了

- @ques swiperTop 多次创建

- @ques 属性中的 fun 如何处理？

```ts
return (0,
_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_0__.createComponent)(
  _tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View,
  ((_$createComponent2 = {}),
  _defineAccessor("get", _$createComponent2, "class", function () {
    return _index_module_less__WEBPACK_IMPORTED_MODULE_4__["default"].index;
  }),
  _defineAccessor("get", _$createComponent2, "children", function () {
    return (0,
    _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_0__.createComponent)(_components_swiperTop__WEBPACK_IMPORTED_MODULE_3__["default"], {
      homeConfig: homeConfig,
    });
  }),
  _$createComponent2)
);

(0,
_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_0__.insert)(
  _el$,
  (0,
  _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_0__.createComponent)(
    _components_swiperTop__WEBPACK_IMPORTED_MODULE_2__["default"],
    {
      homeConfig: homeConfig,
    }
  )
);
```

- computations created outside a `createRoot` or `render` will never be disposed

- @bug 切换页面之后返回首页 属性变化无法监听到了

  - 也许我应该用另一种方式来控制 app.tsx | AppWrapper
  - 所有的 effect 都被清理掉了 -> 看看在哪被 cleanUp 的

```
var _el$ = (0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_0__.createElement)("view");
    var _ref$ = ref;
    typeof _ref$ === "function" ? (0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_0__.use)(_ref$, _el$) : ref = _el$;
```

- @ques ref

```
var _el$ = createElement("view");
insert(_el$, count)
```

- @ques solidjs 如何 清理 unmount page

- @ques 只有一个 count children 无法显示的问题

  - getOwnPropertyDescriptor

- @ques 多次创建 index

- @ques 哪些地方能用到 batch

  - 需要 callback 的地方

- @ques h 函数需要更新 同时最好将所有的编译都直接使用 h 函数

  - @ques props 发生改变怎么办 最好是抄一个官方的 jsx

- @ques `dom-expressions/src/universal` 导出什么

- @ques setProp 如何碰到方法怎么处理

- test:>unmount error

- @ques 无法打开已经关闭的页面

  - `env.document.getElementById(id);` 找不到目标节点
  - Index 被运行了多次

- @ques 第一次渲染很慢

- @ques TaroNode 是如何渲染到页面上的

  - page setData -> 怎么 setData

- @ques 为什么默认会导入 scroll-view

  - componentConfig -> collectComponents

- base.wxml 是怎么生成的？

  - taro-webpack5-runner -> Prerender -> writeXML
  - generateMiniFiles ->
  - `console.warn(`test:>generateTemplateFile`, filePath, compilation.assets['base.wxml'])`
  - ***
  - ？getDOMNode
  - ? webpack5-prebundle
  - 有可能是那些组件自己注入的配置

```
sid: "_AH"
size="default"
role="button"
taro-button-core
@tarojs/plugin-platform-weapp/dist/components-react.js
```

- @ques 无法渲染 button

  - 默认的是怎么处理的
  - internalComponents ?

- @ques 可能到 vue 里面可以找到对应的
- @ques 可能我自己去创建节点 然后把默认的属性赋值上去。。。

  - internalComponents
  - 没有 setAttribute
  - 会不会是 build 的 template 中没有 button -> wxml.js 没有发现 button

- @todo

  - 无法更新节点 -> 在创建的时候没有将修改注册到 createRenderEffect 里面
    - 抄抄默认的处理 -> 同时处理下 createSignal 传 pages
  - 无法绑定事件
  - 无法渲染 button
  - 突然好了 --> 搞不懂

- PageContext 可以获取 id -> reactMeta

- @ques 为什么放一个 root 在 page 上就会报错
- 可能找不到当前页面对应的 TaroNode
- 为什么 app.ts 中 props 是 undefined

- @ques `App(createReactApp(component, React, ReactDOM, config))`

  - App 是干嘛的 -> vue 也有这个吗

- @ques connectReactPage 怎么处理

  - 是做什么的

- @ques 节点创建成功之后 在页面上无法显示 ？

  - `performUpdate mount`

- @todo 删除 react-dom
- @ques 如何替换 react 转译 jsx

- @ques `getFirstChild`
- 如何替换？

```ts
h = react.createElement;
```
