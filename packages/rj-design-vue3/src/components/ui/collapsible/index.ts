import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Collapsible } from './Collapsible.vue'
export { default as CollapsibleTrigger } from './CollapsibleTrigger.vue'
export { default as CollapsibleHeader } from './CollapsibleHeader.vue'
export { default as CollapsibleContent } from './CollapsibleContent.vue'

// ============ Collapsible 样式变体 ============

export const collapsibleVariants = cva('', {
  variants: {
    variant: {
      primary: '',
    },
    size: {
      sm: '',
      lg: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type CollapsibleVariants = VariantProps<typeof collapsibleVariants>

// ============ CollapsibleHeader 样式变体 ============

export const collapsibleHeaderVariants = cva('', {
  variants: {
    variant: {
      primary: 'bg-card',
      tree: 'bg-transparent',
    },
    size: {
      sm: 'px-4 py-2',
      lg: 'px-4 py-2',
      tree: '',
    },
    layout: {
      forward: 'inline-flex items-center flex-row gap-2 flex-1',
      back: 'inline-flex items-center flex-row justify-between flex-1',
    },
    border: {
      none: '',
      bottom: 'border-b border-border-split',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type CollapsibleHeaderVariants = VariantProps<typeof collapsibleHeaderVariants>

// ============ CollapsibleTrigger 样式变体 ============

export const collapsibleTriggerVariants = cva('', {
  variants: {
    variant: {
      primary: '',
    },
    size: {
      sm: '',
      lg: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type CollapsibleTriggerVariants = VariantProps<typeof collapsibleTriggerVariants>

// ============ CollapsibleContent 样式变体 ============

export const collapsibleContentVariants = cva('', {
  variants: {
    variant: {
      primary: 'bg-fill text-center',
      tree: '',
    },
    size: {
      sm: 'pt-3 pr-4 pb-3 pl-10',
      lg: 'pt-3 pr-4 pb-3 pl-10',
      tree: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type CollapsibleContentVariants = VariantProps<typeof collapsibleContentVariants>
