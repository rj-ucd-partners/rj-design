<script setup lang="ts">
import { Badge, BadgeDot } from '@/components/ui/badge'

// 徽章变体
const badgeVariants = [
  { variant: 'default', label: '默认' },
  { variant: 'primary-light', label: '主色浅' },
  { variant: 'primary-heavy', label: '主色深' },
  { variant: 'success-light', label: '成功浅' },
  { variant: 'success-heavy', label: '成功深' },
  { variant: 'abnormal-light', label: '警告浅' },
  { variant: 'abnormal-heavy', label: '警告深' },
] as const

// 徽章点变体
const dotVariants = [
  { variant: 'destructive', label: '危险' },
  { variant: 'primary', label: '主色' },
  { variant: 'success', label: '成功' },
  { variant: 'abnormal', label: '异常' },
  { variant: 'warning', label: '警告' },
  { variant: 'alarm', label: '告警' },
  { variant: 'online', label: '在线' },
  { variant: 'offline', label: '离线' },
  { variant: 'purple', label: '紫色' },
  { variant: 'rose', label: '玫红' },
  { variant: 'green', label: '绿色' },
  { variant: 'blue', label: '蓝色' },
] as const
</script>

<template>
  <div class="p-8 space-y-8">
    <h1 class="text-2xl font-bold text-text-deep">Badge 徽章</h1>

    <!-- 基础用法 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-text-deep">基础用法</h2>
      <div class="flex flex-wrap gap-3 items-center">
        <Badge>默认</Badge>
        <Badge variant="primary-light">主色浅</Badge>
        <Badge variant="primary-heavy">主色深</Badge>
        <Badge variant="success-light">成功</Badge>
        <Badge variant="abnormal-light">警告</Badge>
      </div>
    </section>

    <!-- 所有变体 - 默认圆角 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-text-deep">所有变体（默认圆角）</h2>
      <div class="flex flex-wrap gap-3 items-center">
        <Badge 
          v-for="item in badgeVariants" 
          :key="item.variant" 
          :variant="item.variant"
        >
          {{ item.label }}
        </Badge>
      </div>
    </section>

    <!-- 所有变体 - 圆角 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-text-deep">所有变体（圆角）</h2>
      <div class="flex flex-wrap gap-3 items-center">
        <Badge 
          v-for="item in badgeVariants" 
          :key="item.variant" 
          :variant="item.variant"
          corner="rounded"
        >
          {{ item.label }}
        </Badge>
      </div>
    </section>

    <!-- 数字徽章 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-text-deep">数字徽章</h2>
      <div class="flex flex-wrap gap-3 items-center">
        <Badge>1</Badge>
        <Badge variant="primary-light">9</Badge>
        <Badge variant="primary-heavy">99</Badge>
        <Badge variant="success-light" corner="rounded">99+</Badge>
        <Badge variant="abnormal-light" corner="rounded">NEW</Badge>
        <Badge variant="abnormal-heavy" corner="rounded">HOT</Badge>
      </div>
    </section>

    <!-- 徽章点 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-text-deep">徽章点 BadgeDot</h2>
      <div class="flex flex-wrap gap-4 items-center">
        <div 
          v-for="item in dotVariants" 
          :key="item.variant" 
          class="flex items-center gap-1.5"
        >
          <BadgeDot :variant="item.variant" />
          <span class="text-sm text-secondary">{{ item.label }}</span>
        </div>
      </div>
    </section>

    <!-- 带图标的徽章点 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-text-deep">状态指示器</h2>
      <div class="flex flex-wrap gap-6 items-center">
        <div class="flex items-center gap-2">
          <BadgeDot variant="success" />
          <span class="text-sm">运行中</span>
        </div>
        <div class="flex items-center gap-2">
          <BadgeDot variant="warning" />
          <span class="text-sm">待处理</span>
        </div>
        <div class="flex items-center gap-2">
          <BadgeDot variant="destructive" />
          <span class="text-sm">已停止</span>
        </div>
        <div class="flex items-center gap-2">
          <BadgeDot variant="offline" />
          <span class="text-sm">离线</span>
        </div>
      </div>
    </section>

    <!-- 实际应用场景 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-text-deep">应用场景</h2>
      <div class="flex flex-wrap gap-6 items-start">
        <!-- 消息通知 -->
        <div class="relative inline-flex items-center gap-2 px-4 py-2 bg-fill rounded-lg">
          <span>消息</span>
          <Badge variant="primary-heavy" corner="rounded">5</Badge>
        </div>
        
        <!-- 标签 -->
        <div class="flex items-center gap-2 px-4 py-2 bg-fill rounded-lg">
          <span>订单状态：</span>
          <Badge variant="success-light">已完成</Badge>
        </div>
        
        <!-- 新功能标记 -->
        <div class="flex items-center gap-2 px-4 py-2 bg-fill rounded-lg">
          <span>数据分析</span>
          <Badge variant="abnormal-light" corner="rounded">NEW</Badge>
        </div>
      </div>
    </section>
  </div>
</template>
