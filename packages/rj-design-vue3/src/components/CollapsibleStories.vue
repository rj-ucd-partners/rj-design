<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleHeader,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { TriangleRightIcon } from '@/components/icon'

// ============ 状态 ============

const primaryOpen = ref(false)
const borderOpen = ref(false)
const backOpen = ref(false)
const disabledOpen = ref(false)

// ============ 内容文本 ============

const contentText =
  '这部分是每个折叠面板折叠或展开的内容，可根据不同业务或用户的使用诉求，进行自定义填充。可以是纯文本、图文、子列表等内容形式。'
</script>

<template>
  <div class="space-y-8 p-6">
    <h1 class="text-2xl font-bold">Collapsible 折叠面板</h1>

    <!-- Primary -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Primary - 基础样式</h2>
      <Collapsible
        v-model:open="primaryOpen"
        class="flex w-full flex-col"
        variant="primary"
        size="sm"
      >
        <CollapsibleHeader layout="forward" variant="primary" size="sm" border="none">
          <CollapsibleTrigger as-child>
            <Button variant="collapsible">
              <TriangleRightIcon
                class="transition-transform duration-200"
                :class="{ 'rotate-90': primaryOpen }"
              />
            </Button>
          </CollapsibleTrigger>
          <h4 class="text-sm font-semibold">这是一个折叠面板标题</h4>
        </CollapsibleHeader>

        <CollapsibleContent variant="primary" size="sm">
          {{ contentText }}
          {{ contentText }}
          {{ contentText }}
          {{ contentText }}
        </CollapsibleContent>
      </Collapsible>
    </section>

    <!-- Border -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Border - 带边框</h2>
      <Collapsible
        v-model:open="borderOpen"
        class="flex w-full flex-col"
        variant="primary"
        size="sm"
      >
        <CollapsibleHeader layout="forward" variant="primary" size="sm" border="bottom">
          <CollapsibleTrigger as-child>
            <Button variant="collapsible">
              <TriangleRightIcon
                class="transition-transform duration-200"
                :class="{ 'rotate-90': borderOpen }"
              />
            </Button>
          </CollapsibleTrigger>
          <h4 class="text-sm font-semibold">这是一个折叠面板标题</h4>
        </CollapsibleHeader>

        <CollapsibleContent variant="primary" size="sm">
          {{ contentText }}
        </CollapsibleContent>
      </Collapsible>
    </section>

    <!-- Back Layout -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Back - 图标在后</h2>
      <Collapsible
        v-model:open="backOpen"
        class="flex w-full flex-col"
        variant="primary"
        size="sm"
      >
        <CollapsibleHeader layout="back" variant="primary" size="sm" border="bottom">
          <h4 class="text-sm font-semibold">这是一个折叠面板标题</h4>
          <CollapsibleTrigger as-child>
            <Button variant="collapsible">
              <TriangleRightIcon
                class="transition-transform duration-200"
                :class="{ 'rotate-90': backOpen }"
              />
            </Button>
          </CollapsibleTrigger>
        </CollapsibleHeader>

        <CollapsibleContent variant="primary" size="sm">
          {{ contentText }}
        </CollapsibleContent>
      </Collapsible>
    </section>

    <!-- Disabled -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Disabled - 禁用状态</h2>
      <Collapsible
        v-model:open="disabledOpen"
        class="flex w-full flex-col"
        variant="primary"
        size="sm"
        disabled
      >
        <CollapsibleHeader layout="forward" variant="primary" size="sm" border="none" disabled>
          <CollapsibleTrigger as-child>
            <Button variant="collapsible" disabled>
              <TriangleRightIcon />
            </Button>
          </CollapsibleTrigger>
          <h4 class="text-sm font-semibold">这是一个折叠面板标题</h4>
        </CollapsibleHeader>

        <CollapsibleContent variant="primary" size="sm" disabled>
          {{ contentText }}
        </CollapsibleContent>
      </Collapsible>
    </section>
  </div>
</template>
