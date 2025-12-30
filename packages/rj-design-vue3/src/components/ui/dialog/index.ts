import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Dialog } from './Dialog.vue'
export { default as DialogTrigger } from './DialogTrigger.vue'
export { default as DialogContent } from './DialogContent.vue'
export { default as DialogHeader } from './DialogHeader.vue'
export { default as DialogFooter } from './DialogFooter.vue'
export { default as DialogTitle } from './DialogTitle.vue'
export { default as DialogDescription } from './DialogDescription.vue'
export { default as DialogDetails } from './DialogDetails.vue'
export { default as DialogClose } from './DialogClose.vue'
export { default as DialogOverlay } from './DialogOverlay.vue'

// ============ DialogContent 样式变体 ============

export const dialogContentVariants = cva('', {
  variants: {
    variant: {
      primary: 'p-0 bg-card border-none gap-0',
    },
    size: {
      default: '',
      sm: 'sm:max-w-[500px]',
      md: 'sm:max-w-[600px]',
      lg: 'sm:max-w-[1000px]',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
})

export type DialogContentVariants = VariantProps<typeof dialogContentVariants>

// ============ DialogHeader 样式变体 ============

export const dialogHeaderVariants = cva('border-solid border-border-split p-4', {
  variants: {
    variant: {
      primary: '',
    },
  },
  defaultVariants: {},
})

export type DialogHeaderVariants = VariantProps<typeof dialogHeaderVariants>

// ============ DialogFooter 样式变体 ============

export const dialogFooterVariants = cva('inline-flex py-2.5 px-4 h-14', {
  variants: {
    variant: {
      primary: '',
    },
  },
  defaultVariants: {},
})

export type DialogFooterVariants = VariantProps<typeof dialogFooterVariants>

// ============ DialogTitle 样式变体 ============

export const dialogTitleVariants = cva('gap-1 flex flex-row items-center justify-start', {
  variants: {
    variant: {
      default: '',
      primary: '',
      success: '',
      abnormal: '',
      danger: '',
    },
    size: {
      default: 'font-medium font-[17px] leading-[24px] not-italic',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export type DialogTitleVariants = VariantProps<typeof dialogTitleVariants>

// ============ DialogDetails 样式变体 ============

export const dialogDetailsVariants = cva('min-h-20 text-secondary-information', {
  variants: {
    variant: {
      default: '',
      icon: 'pl-10',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type DialogDetailsVariants = VariantProps<typeof dialogDetailsVariants>

// ============ DialogDescription 样式变体 ============

export const dialogDescriptionVariants = cva('px-4 py-2 flex items-center justify-between', {
  variants: {
    variant: {
      default: '',
      primary: 'bg-primary-light',
      success: 'bg-success/20',
      abnormal: 'bg-abnormal/10',
      danger: 'bg-danger-hover/20',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type DialogDescriptionVariants = VariantProps<typeof dialogDescriptionVariants>
