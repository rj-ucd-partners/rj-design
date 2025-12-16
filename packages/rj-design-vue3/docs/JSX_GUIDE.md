# Vue 3 JSX/TSX 使用指南

本项目已配置支持 JSX/TSX 语法，你可以使用类似 React 的方式编写 Vue 3 组件。

## 📦 已配置内容

### 1. 插件支持
- ✅ `@vitejs/plugin-vue-jsx` - Vite 的 JSX/TSX 插件
- ✅ Vite 配置已更新
- ✅ TypeScript 配置已完善

### 2. TypeScript 配置
```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "vue"
  }
}
```

## 🚀 基础用法

### 1. 创建 TSX 组件

```tsx
// components/MyComponent.tsx
import { defineComponent, ref } from 'vue'

export const MyComponent = defineComponent({
  name: 'MyComponent',
  props: {
    title: String,
  },
  setup(props, { slots }) {
    const count = ref(0)

    return () => (
      <div class="my-component">
        <h1>{props.title}</h1>
        <button onClick={() => count.value++}>
          Count: {count.value}
        </button>
        {slots.default?.()}
      </div>
    )
  },
})
```

### 2. 使用 Props

```tsx
import { defineComponent, type PropType } from 'vue'

interface User {
  name: string
  age: number
}

export const UserCard = defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
    variant: {
      type: String as PropType<'default' | 'compact'>,
      default: 'default',
    },
  },
  setup(props) {
    return () => (
      <div class="user-card">
        <h2>{props.user.name}</h2>
        <p>Age: {props.user.age}</p>
      </div>
    )
  },
})
```

### 3. 事件处理

```tsx
export const ButtonExample = defineComponent({
  setup() {
    const handleClick = (e: MouseEvent) => {
      console.log('Clicked!', e)
    }

    const handleInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value
      console.log(value)
    }

    return () => (
      <div>
        {/* 点击事件 */}
        <button onClick={handleClick}>Click me</button>
        
        {/* 输入事件 */}
        <input onInput={handleInput} />
        
        {/* 修饰符 */}
        <button onClick={(e) => {
          e.preventDefault()
          handleClick(e)
        }}>
          Prevent Default
        </button>
      </div>
    )
  },
})
```

### 4. 条件渲染

```tsx
export const ConditionalExample = defineComponent({
  setup() {
    const isVisible = ref(true)
    const status = ref<'loading' | 'success' | 'error'>('loading')

    return () => (
      <div>
        {/* if/else */}
        {isVisible.value ? <div>Visible</div> : <div>Hidden</div>}

        {/* 多条件 */}
        {status.value === 'loading' && <div>Loading...</div>}
        {status.value === 'success' && <div>Success!</div>}
        {status.value === 'error' && <div>Error!</div>}

        {/* 使用函数 */}
        {(() => {
          switch (status.value) {
            case 'loading':
              return <div>Loading...</div>
            case 'success':
              return <div>Success!</div>
            case 'error':
              return <div>Error!</div>
          }
        })()}
      </div>
    )
  },
})
```

### 5. 列表渲染

```tsx
export const ListExample = defineComponent({
  setup() {
    const items = ref([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ])

    return () => (
      <div>
        {/* 基础列表 */}
        <ul>
          {items.value.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        {/* 带索引 */}
        <ul>
          {items.value.map((item, index) => (
            <li key={item.id}>
              {index + 1}. {item.name}
            </li>
          ))}
        </ul>

        {/* 过滤 */}
        <ul>
          {items.value
            .filter((item) => item.id > 1)
            .map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      </div>
    )
  },
})
```

### 6. 插槽 (Slots)

```tsx
export const SlotExample = defineComponent({
  setup(props, { slots }) {
    return () => (
      <div class="container">
        {/* 默认插槽 */}
        <div class="content">
          {slots.default?.()}
        </div>

        {/* 具名插槽 */}
        <div class="header">
          {slots.header?.()}
        </div>
        <div class="footer">
          {slots.footer?.()}
        </div>

        {/* 作用域插槽 */}
        <div class="items">
          {slots.item?.({ data: 'some data' })}
        </div>
      </div>
    )
  },
})

// 使用
<SlotExample
  v-slots={{
    header: () => <h1>Header</h1>,
    default: () => <p>Content</p>,
    footer: () => <footer>Footer</footer>,
    item: ({ data }) => <div>{data}</div>,
  }}
/>
```

### 7. v-model

```tsx
export const InputExample = defineComponent({
  setup() {
    const text = ref('')

    return () => (
      <div>
        {/* 手动实现 v-model */}
        <input
          value={text.value}
          onInput={(e) => (text.value = (e.target as HTMLInputElement).value)}
        />

        {/* 显示值 */}
        <p>Input: {text.value}</p>
      </div>
    )
  },
})
```

### 8. 样式绑定

```tsx
export const StyleExample = defineComponent({
  setup() {
    const isActive = ref(true)
    const color = ref('red')

    return () => (
      <div>
        {/* 静态 class */}
        <div class="static-class">Static</div>

        {/* 动态 class */}
        <div class={isActive.value ? 'active' : 'inactive'}>Dynamic</div>

        {/* 多个 class */}
        <div class={['base-class', isActive.value && 'active']}>Multiple</div>

        {/* 内联样式 */}
        <div style={{ color: color.value, fontSize: '16px' }}>Styled</div>

        {/* 使用 cn 工具 */}
        <div class={cn('base', isActive.value && 'active')}>With cn()</div>
      </div>
    )
  },
})
```

### 9. Ref 和响应式

```tsx
export const RefExample = defineComponent({
  setup() {
    const inputRef = ref<HTMLInputElement>()
    const divRef = ref<HTMLDivElement>()

    const focusInput = () => {
      inputRef.value?.focus()
    }

    return () => (
      <div>
        <input ref={inputRef} />
        <button onClick={focusInput}>Focus Input</button>
        
        <div ref={divRef}>Div with ref</div>
      </div>
    )
  },
})
```

## 🎯 高级用法

### 1. 组合式函数 (Composables)

```tsx
import { ref, computed } from 'vue'

function useCounter(initial = 0) {
  const count = ref(initial)
  const double = computed(() => count.value * 2)

  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, double, increment, decrement }
}

export const CounterComponent = defineComponent({
  setup() {
    const { count, double, increment, decrement } = useCounter()

    return () => (
      <div>
        <p>Count: {count.value}</p>
        <p>Double: {double.value}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    )
  },
})
```

### 2. 泛型组件

```tsx
import { defineComponent, type PropType } from 'vue'

export function createGenericList<T>() {
  return defineComponent({
    props: {
      items: {
        type: Array as PropType<T[]>,
        required: true,
      },
      renderItem: {
        type: Function as PropType<(item: T) => JSX.Element>,
        required: true,
      },
    },
    setup(props) {
      return () => (
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>{props.renderItem(item)}</li>
          ))}
        </ul>
      )
    },
  })
}

// 使用
const UserList = createGenericList<User>()
```

## 📝 最佳实践

### ✅ DO

```tsx
// 使用箭头函数返回 JSX
setup() {
  return () => <div>Content</div>
}

// 正确的事件处理
<button onClick={handleClick}>Click</button>

// 使用 key 属性
{items.map(item => <div key={item.id}>{item.name}</div>)}

// 类型安全的 props
props: {
  variant: {
    type: String as PropType<'default' | 'primary'>,
    default: 'default'
  }
}
```

### ❌ DON'T

```tsx
// 不要直接返回 JSX（会导致类型错误）
setup() {
  return <div>Content</div> // ❌
}

// 不要使用 Vue 模板指令
<div v-if={condition}>Content</div> // ❌

// 不要忘记 key
{items.map(item => <div>{item.name}</div>)} // ❌

// 避免使用 any
props: {
  data: Object as PropType<any> // ❌
}
```

## 🔄 SFC vs TSX 选择建议

### 使用 SFC (.vue) 当：
- 组件逻辑简单，模板为主
- 需要 scoped 样式
- 团队更熟悉模板语法
- 需要 CSS 预处理器

### 使用 TSX (.tsx) 当：
- 组件逻辑复杂，需要大量条件渲染
- 需要更好的类型推导
- 动态渲染场景多
- 团队熟悉 React/JSX

## 📚 示例文件

查看以下示例文件了解更多：
- `src/components/ui/button/Button.tsx` - TSX 版本的 Button 组件
- `src/examples/JsxExample.tsx` - 完整的 JSX 使用示例

## 🔗 参考资源

- [Vue JSX 官方文档](https://vuejs.org/guide/extras/render-function.html#jsx-tsx)
- [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)
- [TypeScript JSX](https://www.typescriptlang.org/docs/handbook/jsx.html)
