import { defineComponent, type PropType } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'
import { buttonVariants, type ButtonVariants } from '.'

/**
 * Button 组件 - TSX 版本
 * 使用 JSX/TSX 语法编写的 Vue 3 组件示例
 */
export const ButtonTsx = defineComponent({
  name: 'ButtonTsx',
  props: {
    variant: {
      type: String as PropType<ButtonVariants['variant']>,
      default: 'default',
    },
    size: {
      type: String as PropType<ButtonVariants['size']>,
      default: 'default',
    },
    as: {
      type: String,
      default: 'button',
    },
    asChild: {
      type: Boolean,
      default: false,
    },
    class: {
      type: String,
      default: '',
    },
  },
  emits: {
    click: (_event: MouseEvent) => true,
  },
  setup(props, { slots, emit }) {
    const handleClick = (event: MouseEvent) => {
      emit('click', event)
    }

    return () => (
      <Primitive
        data-slot="button"
        as={props.as}
        asChild={props.asChild}
        class={cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)}
        // 在 Vue JSX 中，使用 on-click 或对象展开避免类型错误
        on-click={handleClick}
      >
        {slots.default?.()}
      </Primitive>
    )
  },
})

export default ButtonTsx
