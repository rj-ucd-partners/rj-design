<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerDetails,
  DrawerClose,
} from '@/components/ui/drawer'

// ============ 状态 ============

const defaultOpen = ref(false)
const descriptionOpen = ref(false)
const footerOpen = ref(false)

// ============ 方向选择 ============

type Direction = 'left' | 'right' | 'top' | 'bottom'
const direction = ref<Direction>('bottom')

const directionOptions: Direction[] = ['left', 'right', 'top', 'bottom']
</script>

<template>
  <div class="space-y-8 p-6">
    <h1 class="text-2xl font-bold">Drawer 抽屉</h1>

    <!-- Direction 选择器 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Direction 方向选择</h2>
      <div class="flex gap-2">
        <Button
          v-for="d in directionOptions"
          :key="d"
          :variant="direction === d ? 'primary' : 'default'"
          size="sm"
          @click="direction = d"
        >
          {{ d }}
        </Button>
      </div>
    </section>

    <!-- Default -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Default - 基础抽屉</h2>
      <p class="text-sm text-secondary">标题 + 内容区</p>
      <Drawer v-model:open="defaultOpen" :direction="direction">
        <DrawerTrigger as-child>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent variant="default">
          <DrawerHeader>
            <DrawerTitle variant="default" :show-close="true">
              <div class="flex flex-row items-center justify-between">Move Goal</div>
            </DrawerTitle>
          </DrawerHeader>
          <DrawerDetails variant="default">
            <div class="h-40 flex items-center justify-center text-secondary">
              抽屉内容区域
            </div>
          </DrawerDetails>
        </DrawerContent>
      </Drawer>
    </section>

    <!-- Description -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Description - 带描述信息</h2>
      <p class="text-sm text-secondary">标题 + 描述提示 + 内容区</p>
      <Drawer v-model:open="descriptionOpen" :direction="direction">
        <DrawerTrigger as-child>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent variant="default">
          <DrawerHeader>
            <DrawerTitle variant="default" :show-close="true">
              <div class="flex flex-row items-center justify-between">Move Goal</div>
            </DrawerTitle>
          </DrawerHeader>
          <DrawerDescription variant="primary">
            这是一条普通的消息提示
          </DrawerDescription>
          <DrawerDetails variant="default">
            <div class="h-40 flex items-center justify-center text-secondary">
              抽屉内容区域
            </div>
          </DrawerDetails>
        </DrawerContent>
      </Drawer>
    </section>

    <!-- Footer -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Footer - 带底部按钮</h2>
      <p class="text-sm text-secondary">标题 + 内容区 + 底部按钮</p>
      <Drawer v-model:open="footerOpen" :direction="direction">
        <DrawerTrigger as-child>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent variant="default">
          <DrawerHeader>
            <DrawerTitle variant="default" :show-close="true">
              Move Goal
            </DrawerTitle>
          </DrawerHeader>
          <DrawerDetails variant="default">
            <div class="h-40 flex items-center justify-center text-secondary">
              抽屉内容区域
            </div>
          </DrawerDetails>
          <DrawerFooter>
            <DrawerClose as-child>
              <Button variant="outline" size="md">取消</Button>
            </DrawerClose>
            <Button variant="primary" size="md">确认</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  </div>
</template>
