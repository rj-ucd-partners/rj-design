import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Drawer } from './Drawer.vue'
export { default as DrawerTrigger } from './DrawerTrigger.vue'
export { default as DrawerContent } from './DrawerContent.vue'
export { default as DrawerHeader } from './DrawerHeader.vue'
export { default as DrawerFooter } from './DrawerFooter.vue'
export { default as DrawerTitle } from './DrawerTitle.vue'
export { default as DrawerDescription } from './DrawerDescription.vue'
export { default as DrawerDetails } from './DrawerDetails.vue'
export { default as DrawerClose } from './DrawerClose.vue'
export { default as DrawerOverlay } from './DrawerOverlay.vue'

// ============ DrawerContent 样式变体 ============

export const drawerContentVariants = cva('', {
  variants: {
    variant: {
      default: 'border-none bg-card',
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type DrawerContentVariants = VariantProps<typeof drawerContentVariants>

// ============ DrawerHeader 样式变体 ============

export const drawerHeaderVariants = cva('', {
  variants: {
    variant: {
      default: 'border-b border-solid border-border-split',
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type DrawerHeaderVariants = VariantProps<typeof drawerHeaderVariants>

// ============ DrawerFooter 样式变体 ============

export const drawerFooterVariants = cva('', {
  variants: {
    variant: {
      default: 'flex-row justify-end border-t border-solid border-border-split',
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type DrawerFooterVariants = VariantProps<typeof drawerFooterVariants>

// ============ DrawerTitle 样式变体 ============

export const drawerTitleVariants = cva('', {
  variants: {
    variant: {
      default:
        'flex flex-row items-center justify-between text-[17px] leading-[24px] font-normal not-italic text-text-deep',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type DrawerTitleVariants = VariantProps<typeof drawerTitleVariants>

// ============ DrawerDescription 样式变体 ============

export const drawerDescriptionVariants = cva(
  'flex flex-row items-center justify-between px-4 py-2 rounded-lg text-[13px] leading-[20px] text-text-deep font-normal not-italic',
  {
    variants: {
      variant: {
        primary: 'bg-primary/20',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export type DrawerDescriptionVariants = VariantProps<typeof drawerDescriptionVariants>

// ============ DrawerDetails 样式变体 ============

export const drawerDetailsVariants = cva('', {
  variants: {
    variant: {
      default: 'p-4',
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type DrawerDetailsVariants = VariantProps<typeof drawerDetailsVariants>
