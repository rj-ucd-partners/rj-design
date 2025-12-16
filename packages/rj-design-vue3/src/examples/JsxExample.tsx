import { defineComponent, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { ButtonTsx } from '@/components/ui/button/Button.tsx'

/**
 * JSX/TSX 使用示例
 * 演示如何在 Vue 3 中使用 JSX/TSX 语法
 */
export const JsxExample = defineComponent({
  name: 'JsxExample',
  setup() {
    const count = ref(0)
    const message = ref('Hello JSX!')

    const handleClick = () => {
      count.value++
    }

    const handleReset = () => {
      count.value = 0
    }

    return () => (
      <div class="p-6 space-y-4">
        <h1 class="text-2xl font-bold">JSX/TSX Example</h1>
        
        {/* 使用 SFC 版本的 Button - 现在支持 onClick 了！ */}
        <div class="space-x-2">
          <h2 class="text-lg font-semibold mb-2">SFC Button (from .vue file)</h2>
          <Button variant="default" onClick={handleClick}>
            Click me ({count.value})
          </Button>
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
        </div>

        {/* 使用 TSX 版本的 Button - 同样支持 onClick */}
        <div class="space-x-2">
          <h2 class="text-lg font-semibold mb-2">TSX Button (from .tsx file)</h2>
          <ButtonTsx variant="default" onClick={handleClick}>
            Click me ({count.value})
          </ButtonTsx>
          <ButtonTsx variant="secondary" onClick={handleReset}>
            Reset
          </ButtonTsx>
        </div>

        {/* 原生 HTML 元素 - 所有方式都可用 */}
        <div class="space-x-2">
          <h2 class="text-lg font-semibold mb-2">Native Elements (Multiple styles)</h2>
          {/* React 风格 - 最常用 */}
          <button 
            onClick={handleClick}
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            onClick (React style)
          </button>
          
          {/* Vue 风格 - 因为开启了 transformOn: true */}
          <button 
            {...{ 'on:click': handleClick }}
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            on:click (Vue style)
          </button>
          
          {/* Vue 风格 + 修饰符 - 使用展开运算符避免 TS 错误 */}
          <button 
            {...{ 'on:click.stop': handleClick }}
            class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            on:click.stop (with modifier)
          </button>
        </div>

        {/* 条件渲染 */}
        <div>
          <h2 class="text-lg font-semibold mb-2">Conditional Rendering</h2>
          {count.value > 5 ? (
            <div class="text-green-600 font-semibold">
              🎉 You've clicked more than 5 times!
            </div>
          ) : (
            <div class="text-gray-600">
              Click count: {count.value}
            </div>
          )}
        </div>

        {/* 列表渲染 */}
        <div>
          <h2 class="text-lg font-semibold mb-2">List Rendering</h2>
          <div class="flex gap-2 flex-wrap">
            {['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'].map(
              (variant) => (
                <ButtonTsx
                  key={variant}
                  variant={variant as any}
                  size="sm"
                  onClick={() => console.log(`Clicked ${variant}`)}
                >
                  {variant}
                </ButtonTsx>
              )
            )}
          </div>
        </div>

        {/* 响应式数据 */}
        <div>
          <h2 class="text-lg font-semibold mb-2">Reactive Data</h2>
          <input
            type="text"
            value={message.value}
            onInput={(e) => (message.value = (e.target as HTMLInputElement).value)}
            class="px-3 py-2 border rounded-md"
            placeholder="Type something..."
          />
          <p class="mt-2 text-gray-700">Message: {message.value}</p>
        </div>
      </div>
    )
  },
})

export default JsxExample
