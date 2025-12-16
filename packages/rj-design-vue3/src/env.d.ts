/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 扩展 JSX 的 IntrinsicAttributes 以支持 on:* 语法
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      // 支持 on:click、on:input 等 Vue 风格事件绑定
      [key: `on:${string}`]: any
    }
  }
}

export {}
