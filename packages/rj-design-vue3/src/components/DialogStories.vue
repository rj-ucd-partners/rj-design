<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogDetails,
  DialogClose,
} from '@/components/ui/dialog'

// ============ 状态 ============

const defaultOpen = ref(false)
const descriptionOpen = ref(false)
const feedbackOpen = ref(false)
const feedback2Open = ref(false)

// ============ 当前选中的 variant ============

type TitleVariant = 'default' | 'primary' | 'success' | 'abnormal' | 'danger'
const titleVariant = ref<TitleVariant>('primary')

const variantOptions: TitleVariant[] = ['default', 'primary', 'success', 'abnormal', 'danger']

// ============ 方法 ============

const handleSubmit = (e: Event) => {
  e.preventDefault()
  console.log('Form submitted')
}
</script>

<template>
  <div class="space-y-8 p-6">
    <h1 class="text-2xl font-bold">Dialog 对话框</h1>

    <!-- Variant 选择器 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Title Variant 选择</h2>
      <div class="flex gap-2">
        <Button
          v-for="v in variantOptions"
          :key="v"
          :variant="titleVariant === v ? 'primary' : 'default'"
          size="sm"
          @click="titleVariant = v"
        >
          {{ v }}
        </Button>
      </div>
    </section>

    <!-- Default -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Default - 基础对话框</h2>
      <p class="text-sm text-secondary">标题 + 内容区 + 底部按钮</p>
      <Dialog v-model:open="defaultOpen">
        <DialogTrigger as-child>
          <Button variant="outline">开盖有惊喜</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>标题</DialogTitle>
          </DialogHeader>
          <DialogDetails>
            <div class="w-112 h-40 bg-primary-light flex items-center justify-center">
              这是一个无害的编辑区
            </div>
          </DialogDetails>
          <DialogFooter>
            <DialogClose as-child>
              <Button variant="default" size="md">取消</Button>
            </DialogClose>
            <Button variant="primary" size="md" type="submit">确认</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>

    <!-- Description -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Description - 带描述信息</h2>
      <p class="text-sm text-secondary">标题 + 描述提示 + 内容区 + 底部按钮</p>
      <Dialog v-model:open="descriptionOpen">
        <DialogTrigger as-child>
          <Button variant="outline">开盖有惊喜</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>标题</DialogTitle>
          </DialogHeader>
          <DialogDescription :variant="titleVariant">
            这是一条普通的消息提示
          </DialogDescription>
          <DialogDetails>
            <div class="w-112 h-40 bg-primary-light flex items-center justify-center">
              这是一个无害的编辑区
            </div>
          </DialogDetails>
          <DialogFooter>
            <DialogClose as-child>
              <Button variant="default" size="md">取消</Button>
            </DialogClose>
            <Button variant="primary" size="md" type="submit">确认</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>

    <!-- Feedback -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Feedback - 反馈对话框（单按钮）</h2>
      <p class="text-sm text-secondary">带图标标题 + 内容 + 单个确认按钮</p>
      <Dialog v-model:open="feedbackOpen">
        <DialogTrigger as-child>
          <Button variant="outline">开盖有惊喜</Button>
        </DialogTrigger>
        <DialogContent :show-close-button="false">
          <DialogHeader :has-border="false">
            <DialogTitle :variant="titleVariant">标题</DialogTitle>
          </DialogHeader>
          <DialogDetails
            :variant="titleVariant === 'default' ? 'default' : 'icon'"
            :has-border="false"
          >
            <div>
              我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度
            </div>
          </DialogDetails>
          <DialogFooter>
            <DialogClose as-child>
              <Button variant="primary" size="md" type="submit">知道了</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>

    <!-- Feedback2 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Feedback2 - 反馈对话框（双按钮）</h2>
      <p class="text-sm text-secondary">带图标标题 + 内容 + 取消/确认按钮</p>
      <Dialog v-model:open="feedback2Open">
        <DialogTrigger as-child>
          <Button variant="outline">开盖有惊喜</Button>
        </DialogTrigger>
        <DialogContent :show-close-button="false">
          <DialogHeader :has-border="false">
            <DialogTitle :variant="titleVariant">标题</DialogTitle>
          </DialogHeader>
          <DialogDetails
            :variant="titleVariant === 'default' ? 'default' : 'icon'"
            :has-border="false"
          >
            <div>
              我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度
            </div>
          </DialogDetails>
          <DialogFooter>
            <DialogClose as-child>
              <Button variant="default" size="md">取消</Button>
            </DialogClose>
            <Button variant="primary" size="md" type="submit">确认</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  </div>
</template>
