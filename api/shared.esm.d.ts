declare const touchEvents: {
    bindTouchStart: string;
    bindTouchMove: string;
    bindTouchEnd: string;
    bindTouchCancel: string;
    bindLongTap: string;
};
declare const animation: {
    animation: string;
    bindAnimationStart: string;
    bindAnimationIteration: string;
    bindAnimationEnd: string;
    bindTransitionEnd: string;
};
declare function singleQuote(s: string): string;
declare const internalComponents: Record<string, Record<string, string>>;
declare const controlledComponent: Set<string>;
declare const focusComponents: Set<string>;
declare const voidElements: Set<string>;
declare const nestElements: Map<string, number>;
type Callback1<T1> = (arg1: T1) => any;
type Callback2<T1, T2> = (arg1: T1, arg2: T2) => any;
type Callback3<T1, T2, T3> = (arg1: T1, arg2: T2, arg3: T3) => any;
type Callback4<T1, T2, T3, T4> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => any;
type Callback5<T1, T2, T3, T4, T5> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => any;
type Callback6Rest<T1, T2, T3, T4, T5, T6> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, ...rest: any[]) => any;
declare class Events {
    protected callbacks?: Record<string, unknown>;
    static eventSplitter: RegExp;
    constructor(opts?: any);
    on<T>(event: string, callback: Callback1<T>, context?: any): this;
    on<T1, T2>(event: string, callback: Callback2<T1, T2>, context?: any): this;
    on<T1, T2, T3>(event: string, callback: Callback3<T1, T2, T3>, context?: any): this;
    on<T1, T2, T3, T4>(event: string, callback: Callback4<T1, T2, T3, T4>, comtext: any): this;
    on<T1, T2, T3, T4, T5>(event: string, callback: Callback5<T1, T2, T3, T4, T5>, context?: any): this;
    on<T1, T2, T3, T4, T5, T6>(event: string, callback: Callback6Rest<T1, T2, T3, T4, T5, T6>, context?: any): this;
    once(events: any, callback: any, context: any): this;
    off(events: any, callback?: any, context?: any): this;
    trigger(event: string): any;
    trigger<T1>(event: string, arg: T1): any;
    trigger<T1, T2>(event: string, arg1: T1, arg2: T2): any;
    trigger<T1, T2, T3>(event: string, arg1: T1, arg2: T2, arg3: T3): any;
    trigger<T1, T2, T3, T4>(event: string, arg1: T1, arg2: T2, arg3: T3, arg4: T4): any;
    trigger<T1, T2, T3, T4, T5>(event: string, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): any;
    trigger<T1, T2, T3, T4, T5, T6>(event: string, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, ...rest: any[]): any;
}
declare function isString(o: unknown): o is string;
declare function isUndefined(o: unknown): o is undefined;
declare function isNull(o: unknown): o is null;
declare function isObject<T>(o: unknown): o is T;
declare function isBoolean(o: unknown): o is boolean;
declare function isFunction(o: unknown): o is (...args: any[]) => any;
declare function isNumber(o: unknown): o is number;
declare function isBooleanStringLiteral(o: unknown): o is string;
declare const isArray: (arg: any) => arg is any[];
type IObject = Record<string, any>;
interface IProcessApisIOptions {
    noPromiseApis?: Set<string>;
    needPromiseApis?: Set<string>;
    handleSyncApis?: (key: string, global: IObject, args: any[]) => any;
    transformMeta?: (key: string, options: IObject) => {
        key: string;
        options: IObject;
    };
    modifyApis?: (apis: Set<string>) => void;
    modifyAsyncResult?: (key: string, res: any) => void;
    isOnlyPromisify?: boolean;
    [propName: string]: any;
}
declare function processApis(taro: any, global: any, config?: IProcessApisIOptions): void;
// 字符串简写
declare const enum Shortcuts {
    Container = "container",
    Childnodes = "cn",
    Text = "v",
    NodeType = "nt",
    NodeName = "nn",
    // Attrtibutes
    Style = "st",
    Class = "cl",
    Src = "src"
}
declare const EMPTY_OBJ: any;
declare const EMPTY_ARR: never[];
declare const noop: (..._: unknown[]) => void;
/**
 * Boxed value.
 *
 * @typeparam T Value type.
 */
interface Box<T> {
    v: T;
}
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param v Value.
 * @returns Boxed value.
 */
declare const box: <T>(v: T) => {
    v: T;
};
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param b Boxed value.
 * @returns Value.
 */
declare const unbox: <T>(b: Box<T>) => T;
declare function toDashed(s: string): string;
declare function toCamelCase(s: string): string;
declare const toKebabCase: (string: any) => any;
declare function capitalize(s: string): string;
declare const hasOwn: (val: Record<any, any>, key: string | symbol) => any;
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */
declare function ensure(condition: boolean, msg: string): asserts condition;
declare function warn(condition: boolean, msg: string): void;
declare function queryToJson(str: any): {};
declare function getUniqueKey(): string;
declare function cacheDataSet(key: any, val: any): void;
declare function cacheDataGet(key: any, delelteAfterGet?: any): any;
declare function cacheDataHas(key: any): boolean;
declare function mergeInternalComponents(components: any): Record<string, Record<string, string>>;
declare function getComponentsAlias(origin: typeof internalComponents): {};
declare function mergeReconciler(hostConfig: any, hooksForTest?: any): void;
declare function nonsupport(api: any): () => void;
declare function setUniqueKeyToRoute(key: string, obj: any): void;
declare function indent(str: string, size: number): string;
type Func = (...args: any[]) => any;
declare enum HOOK_TYPE {
    SINGLE = 0,
    MULTI = 1,
    WATERFALL = 2
}
interface Hook {
    type: HOOK_TYPE;
    initial?: Func | null;
}
interface MiniLifecycle {
    app: [
        string,
        /** onLaunch */ string,
        /** onShow */ string /** onHide */
    ];
    page: [
        string,
        /** onLoad */ string,
        /** onUnload */ string,
        /** onReady */ string,
        /** onShow */ string,
        /** onHide */ string[],
        /** others */ string[] /** side-effects */
    ];
}
interface MiniElementData {
    [Shortcuts.Childnodes]?: MiniData[];
    [Shortcuts.NodeName]: string;
    [Shortcuts.Class]?: string;
    [Shortcuts.Style]?: string;
    uid?: string;
    sid: string;
    [key: string]: unknown;
}
interface MiniTextData {
    [Shortcuts.Text]: string;
    [Shortcuts.NodeName]: string;
}
type MiniData = MiniElementData | MiniTextData;
interface UpdatePayload {
    path: string;
    value: string | boolean | (() => MiniData | MiniData[]);
}
type Target = Record<string, unknown> & {
    dataset: Record<string, unknown>;
    id: string;
};
interface MpEvent {
    type: string;
    detail: Record<string, unknown>;
    target: Target;
    currentTarget: Target;
}
declare function TaroHook(type: HOOK_TYPE, initial?: Func): Hook;
declare class TaroHooks<T extends Record<string, Func>> extends Events {
    hooks: Record<keyof T, Hook>;
    constructor(hooks: Record<keyof T, Hook>, opts?: any);
    private tapOneOrMany;
    tap<K extends Extract<keyof T, string>>(hookName: K, callback: T[K] | T[K][]): void;
    call<K extends Extract<keyof T, string>>(hookName: K, ...rest: Parameters<T[K]>): ReturnType<T[K]> | undefined;
    isExist(hookName: string): boolean;
}
type ITaroHooks = {
    /** 小程序端 App、Page 构造对象的生命周期方法名称 */
    getMiniLifecycle: (defaultConfig: MiniLifecycle) => MiniLifecycle;
    getMiniLifecycleImpl: () => MiniLifecycle;
    /** 解决 React 生命周期名称的兼容问题 */
    getLifecycle: (instance: any, lifecyle: any) => Func | Array<Func> | undefined;
    /** 解决百度小程序的模版语法问题 */
    getPathIndex: (indexOfNode: number) => string;
    /** 解决支付宝小程序分包时全局作用域不一致的问题 */
    getEventCenter: (EventsClass: typeof Events) => Events;
    isBubbleEvents: (eventName: string) => boolean;
    getSpecialNodes: () => string[];
    /** 解决 Vue2 布尔值属性值的设置问题 */
    onRemoveAttribute: (element: any, qualifiedName: string) => boolean;
    /** 用于把 React 同一事件回调中的所有 setState 合并到同一个更新处理中 */
    batchedEventUpdates: (cb: Func) => void;
    /** 用于处理 React 中的小程序生命周期 hooks */
    mergePageInstance: (prev: any, next: any) => void;
    /** 用于修改传递给小程序 Page 构造器的对象 */
    modifyPageObject: (config: Record<any, any>) => void;
    /** H5 下拉刷新 wrapper */
    createPullDownComponent: (el: any, path: string, framework: any, customWrapper?: any) => void;
    /** H5 获取原生 DOM 对象 */
    getDOMNode: (instance: any) => any;
    /**
     * @todo: multi
     * 修改 Taro DOM 序列化数据
     **/
    modifyHydrateData: (data: Record<string, any>) => void;
    /**
     * @todo: multi
     * 修改 Taro DOM 序列化数据
     **/
    modifySetAttrPayload: (element: any, key: string, payload: UpdatePayload, componentsAlias: Record<string, any>) => void;
    /**
     * @todo: multi
     * 修改 Taro DOM 序列化数据
     **/
    modifyRmAttrPayload: (element: any, key: string, payload: UpdatePayload, componentsAlias: Record<string, any>) => void;
    /**
     * @todo: multi
     * 调用 addEventListener 时触发
     **/
    onAddEvent: (type: string, handler: any, options: any, node: any) => void;
    /** 用于修改小程序原生事件对象 */
    modifyMpEvent: (event: MpEvent) => void;
    modifyMpEventImpl: (event: MpEvent) => void;
    /** 用于修改 Taro DOM 事件对象 */
    modifyTaroEvent: (event: any, element: any) => void;
    modifyDispatchEvent: (event: any, element: any) => void;
    initNativeApi: (taro: Record<string, any>) => void;
    patchElement: (node: any) => void;
};
declare const hooks: TaroHooks<ITaroHooks>;
export { touchEvents, animation, singleQuote, internalComponents, controlledComponent, focusComponents, voidElements, nestElements, Events, isString, isUndefined, isNull, isObject, isBoolean, isFunction, isNumber, isBooleanStringLiteral, isArray, processApis, HOOK_TYPE, TaroHook, TaroHooks, hooks, Shortcuts, EMPTY_OBJ, EMPTY_ARR, noop, Box, box, unbox, toDashed, toCamelCase, toKebabCase, capitalize, hasOwn, ensure, warn, queryToJson, getUniqueKey, cacheDataSet, cacheDataGet, cacheDataHas, mergeInternalComponents, getComponentsAlias, mergeReconciler, nonsupport, setUniqueKeyToRoute, indent };
