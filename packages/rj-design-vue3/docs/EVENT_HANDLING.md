# JSX/TSX 事件处理指南

## 🎯 核心概念

在 Vue 3 JSX/TSX 中，事件处理分为两种情况：

### 1️⃣ 原生 HTML 元素事件

对于原生 HTML 元素（`button`、`input`、`div` 等），`transformOn: true` **会生效**：

```tsx
// ✅ 方式 1: React 风格（推荐）
<button onClick={handleClick}>Click</button>
<input onInput={handleInput} />

// ✅ 方式 2: Vue 风格（需要 transformOn: true）
<button on:click={handleClick}>Click</button>
<input on:input={handleInput} />

// ✅ 方式 3: Vue 风格 + 修饰符
<button on:click.prevent={handleClick}>Click</button>
<form on:submit.prevent={handleSubmit}>Submit</form>
```

### 2️⃣ Vue 组件事件

对于 Vue 组件（如 `<Button>`、`<Input>` 等），**必须**通过以下方式之一处理：

#### 方式 A: 组件声明 emits（推荐）✅

**组件定义**:
```tsx
// Button.tsx
export const Button = defineComponent({
  props: { /* ... */ },
  emits: {
    click: (event: MouseEvent) => true,
    submit: (data: any) => true,
  },
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => {
      emit('click', e)
    }
    
    return () => <button onClick={handleClick}>Click</button>
  },
})
```

**使用组件**:
```tsx
// ✅ 现在可以正常使用 onClick
<Button onClick={handleClick}>Click me</Button>
<Button onSubmit={handleSubmit}>Submit</Button>
```

#### 方式 B: 使用 attrs 透传

如果组件不声明 emits，事件会作为 attrs 传递：

```tsx
// 组件定义
export const Button = defineComponent({
  setup(props, { attrs, slots }) {
    return () => (
      <button {...attrs}>  {/* 透传所有 attrs，包括事件 */}
        {slots.default?.()}
      </button>
    )
  },
})

// 使用（虽然会有类型错误，但运行时可以工作）
<Button onClick={handleClick}>Click</Button>
```

#### 方式 C: 使用原生事件监听

```tsx
<Button onNativeClick={handleClick}>Click</Button>  // ❌ 不推荐
```

---

## 📚 完整示例

### 示例 1: 原生元素事件

```tsx
import { defineComponent, ref } from 'vue'

export const NativeEventExample = defineComponent({
  setup() {
    const count = ref(0)
    const inputValue = ref('')

    // 各种事件处理
    const handleClick = (e: MouseEvent) => {
      console.log('Clicked!', e)
      count.value++
    }

    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement
      inputValue.value = target.value
    }

    const handleSubmit = (e: Event) => {
      e.preventDefault()
      console.log('Form submitted')
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        console.log('Enter pressed')
      }
    }

    return () => (
      <div class="p-4 space-y-4">
        {/* 点击事件 */}
        <button onClick={handleClick} class="btn">
          Clicked {count.value} times
        </button>

        {/* 输入事件 */}
        <input
          type="text"
          value={inputValue.value}
          onInput={handleInput}
          onKeydown={handleKeydown}
          placeholder="Type something..."
        />

        {/* 表单提交（使用修饰符） */}
        <form on:submit.prevent={handleSubmit}>
          <input type="text" placeholder="Form input" />
          <button type="submit">Submit</button>
        </form>

        {/* 双击事件 */}
        <div onDblclick={() => console.log('Double clicked!')}>
          Double click me
        </div>

        {/* 鼠标事件 */}
        <div
          onMouseenter={() => console.log('Mouse entered')}
          onMouseleave={() => console.log('Mouse left')}
        >
          Hover over me
        </div>
      </div>
    )
  },
})
```

### 示例 2: Vue 组件事件（正确方式）

**定义可复用的 Button 组件**:

```tsx
// components/Button.tsx
import { defineComponent, type PropType } from 'vue'

export const Button = defineComponent({
  name: 'Button',
  props: {
    variant: {
      type: String as PropType<'primary' | 'secondary' | 'danger'>,
      default: 'primary',
    },
    disabled: Boolean,
  },
  emits: {
    // ⭐ 关键：声明组件支持的事件
    click: (event: MouseEvent) => true,
    dblclick: (event: MouseEvent) => true,
  },
  setup(props, { emit, slots }) {
    const handleClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', e)
      }
    }

    const handleDblClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('dblclick', e)
      }
    }

    return () => (
      <button
        class={['btn', `btn-${props.variant}`, props.disabled && 'disabled']}
        onClick={handleClick}
        onDblclick={handleDblClick}
        disabled={props.disabled}
      >
        {slots.default?.()}
      </button>
    )
  },
})
```

**使用组件**:

```tsx
import { defineComponent, ref } from 'vue'
import { Button } from './components/Button'

export const App = defineComponent({
  setup() {
    const count = ref(0)

    const handleClick = (e: MouseEvent) => {
      console.log('Button clicked!', e)
      count.value++
    }

    const handleDoubleClick = () => {
      console.log('Button double clicked!')
      count.value = 0
    }

    return () => (
      <div class="p-4">
        {/* ✅ 现在可以正常使用 onClick */}
        <Button variant="primary" onClick={handleClick}>
          Clicked {count.value} times
        </Button>

        {/* ✅ 支持多个事件 */}
        <Button
          variant="danger"
          onClick={handleClick}
          onDblclick={handleDoubleClick}
        >
          Click or Double Click
        </Button>

        {/* ✅ 禁用状态 */}
        <Button disabled onClick={handleClick}>
          Disabled Button
        </Button>
      </div>
    )
  },
})
```

### 示例 3: 高级事件处理

```tsx
import { defineComponent, ref } from 'vue'

export const AdvancedEventExample = defineComponent({
  setup() {
    const items = ref(['Item 1', 'Item 2', 'Item 3'])

    // 事件委托
    const handleListClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'LI') {
        console.log('Clicked item:', target.textContent)
      }
    }

    // 带参数的事件处理
    const handleItemClick = (item: string, index: number) => {
      console.log(`Clicked item ${index}: ${item}`)
    }

    // 防抖处理
    let timeoutId: number | undefined
    const handleDebounceInput = (e: Event) => {
      clearTimeout(timeoutId)
      timeoutId = window.setTimeout(() => {
        const value = (e.target as HTMLInputElement).value
        console.log('Debounced value:', value)
      }, 300)
    }

    return () => (
      <div class="p-4 space-y-4">
        {/* 事件委托 */}
        <ul onClick={handleListClick}>
          {items.value.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* 带参数的事件 */}
        <div>
          {items.value.map((item, index) => (
            <button
              key={item}
              onClick={() => handleItemClick(item, index)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* 防抖输入 */}
        <input
          type="text"
          onInput={handleDebounceInput}
          placeholder="Type to search (debounced)..."
        />

        {/* 多个事件修饰符 */}
        <div
          on:click.stop.prevent={() => console.log('Stopped and prevented')}
        >
          Click me (stop + prevent)
        </div>
      </div>
    )
  },
})
```

---

## 🎯 事件修饰符

当使用 `transformOn: true` 时，可以使用 Vue 的事件修饰符：

```tsx
// ✅ 阻止默认行为
<form on:submit.prevent={handleSubmit}>

// ✅ 停止事件冒泡
<div on:click.stop={handleClick}>

// ✅ 捕获模式
<div on:click.capture={handleClick}>

// ✅ 只触发一次
<button on:click.once={handleClick}>

// ✅ 被动模式（提升滚动性能）
<div on:scroll.passive={handleScroll}>

// ✅ 组合使用
<button on:click.stop.prevent={handleClick}>
```

**React 风格的替代方案**:

```tsx
// 手动实现修饰符
const handleSubmit = (e: Event) => {
  e.preventDefault()  // .prevent
  e.stopPropagation() // .stop
  // ...
}

<form onSubmit={handleSubmit}>
```

---

## ⚠️ 常见错误

### ❌ 错误 1: 组件未声明 emits

```tsx
// Button.tsx - 没有声明 emits
export const Button = defineComponent({
  props: { /* ... */ },
  // ❌ 缺少 emits 声明
  setup(props, { slots }) {
    return () => <button>{slots.default?.()}</button>
  },
})

// 使用时会报类型错误
<Button onClick={handleClick}>Click</Button>  // ❌ TypeScript error
```

**修复**:
```tsx
export const Button = defineComponent({
  props: { /* ... */ },
  emits: ['click'],  // ✅ 添加 emits 声明
  setup(props, { emit, slots }) {
    return () => (
      <button onClick={(e) => emit('click', e)}>
        {slots.default?.()}
      </button>
    )
  },
})
```

### ❌ 错误 2: 使用 v-on 指令

```tsx
// ❌ JSX 中不能使用 v-on
<button v-on:click={handleClick}>Click</button>

// ✅ 正确方式
<button onClick={handleClick}>Click</button>
<button on:click={handleClick}>Click</button>
```

### ❌ 错误 3: 事件名称错误

```tsx
// ❌ 错误的事件名
<button onCLick={handleClick}>  // 注意大小写
<input onchange={handleChange}>  // 应该是 onChange

// ✅ 正确的事件名
<button onClick={handleClick}>
<input onChange={handleChange}>
```

---

## 💡 最佳实践

### 1. 组件库开发：始终声明 emits

```tsx
export const Button = defineComponent({
  emits: {
    click: (e: MouseEvent) => true,
    submit: (data: FormData) => true,
  },
  // ...
})
```

### 2. 使用类型安全的事件处理

```tsx
// ✅ 明确事件类型
const handleClick = (e: MouseEvent) => {
  console.log(e.clientX, e.clientY)
}

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
}
```

### 3. 性能优化：避免内联箭头函数

```tsx
// ❌ 不推荐：每次渲染都创建新函数
{items.map(item => (
  <button onClick={() => handleClick(item)}>Click</button>
))}

// ✅ 推荐：使用 event delegation 或 useCallback
const handleClick = (e: MouseEvent) => {
  const id = (e.target as HTMLElement).dataset.id
  // ...
}

{items.map(item => (
  <button onClick={handleClick} data-id={item.id}>Click</button>
))}
```

---

## 📊 总结对比表

| 场景 | React 风格 | Vue 风格 | 推荐 |
|-----|-----------|---------|-----|
| 原生元素 | `onClick` | `on:click` | ✅ onClick |
| 原生元素 + 修饰符 | 手动实现 | `on:click.prevent` | ✅ on:click.prevent |
| Vue 组件（有 emits） | `onClick` | `on:click` | ✅ onClick |
| Vue 组件（无 emits） | attrs 透传 | attrs 透传 | ⚠️ 建议添加 emits |

---

希望这个指南能帮助你理解 Vue 3 JSX/TSX 中的事件处理！🚀
