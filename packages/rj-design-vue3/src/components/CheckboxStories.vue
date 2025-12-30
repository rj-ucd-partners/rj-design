<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

// 各种状态的 checkbox
const unchecked = ref(false)
const checked = ref(true)
const indeterminate = ref<boolean | 'indeterminate'>('indeterminate')

// 示例：全选逻辑
const items = ref([
  { id: 1, label: '选项 A', checked: false },
  { id: 2, label: '选项 B', checked: true },
  { id: 3, label: '选项 C', checked: false },
])

const allChecked = ref<boolean | 'indeterminate'>(false)

// 计算全选状态
const updateAllChecked = () => {
  const checkedCount = items.value.filter(item => item.checked).length
  if (checkedCount === 0) {
    allChecked.value = false
  } else if (checkedCount === items.value.length) {
    allChecked.value = true
  } else {
    allChecked.value = 'indeterminate'
  }
}

// 切换全选
const toggleAll = (value: boolean | 'indeterminate') => {
  const newValue = value !== false
  items.value.forEach(item => item.checked = newValue)
  allChecked.value = newValue
}

// 切换单个
const toggleItem = (id: number, value: boolean | 'indeterminate') => {
  const item = items.value.find(i => i.id === id)
  if (item) {
    item.checked = value === true
    updateAllChecked()
  }
}

// 初始化
updateAllChecked()
</script>

<template>
  <div class="p-8 space-y-8">
    <h1 class="text-2xl font-bold text-text-deep">Checkbox 复选框</h1>

    <!-- 基础用法 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-text-deep">基础用法</h2>
      <div class="flex flex-wrap gap-6 items-center">
        <div class="flex items-center gap-2">
          <Checkbox id="unchecked" v-model:checked="unchecked" />
          <Label for="unchecked">未选中</Label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox id="checked" v-model:checked="checked" />
          <Label for="checked">已选中</Label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox id="indeterminate" v-model:checked="indeterminate" />
          <Label for="indeterminate">半选中</Label>
        </div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-text-deep">禁用状态</h2>
      <div class="flex flex-wrap gap-6 items-center">
        <div class="flex items-center gap-2">
          <Checkbox id="disabled-unchecked" disabled />
          <Label for="disabled-unchecked" class="text-disabled">禁用未选中</Label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox id="disabled-checked" disabled :checked="true" />
          <Label for="disabled-checked" class="text-disabled">禁用已选中</Label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox id="disabled-indeterminate" disabled checked="indeterminate" />
          <Label for="disabled-indeterminate" class="text-disabled">禁用半选中</Label>
        </div>
      </div>
    </section>

    <!-- 全选示例 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-text-deep">全选 / 半选示例</h2>
      <div class="p-4 bg-fill rounded-lg space-y-3">
        <div class="flex items-center gap-2 pb-2 border-b border-border">
          <Checkbox 
            id="select-all" 
            :checked="allChecked"
            @update:checked="toggleAll"
          />
          <Label for="select-all" class="font-medium">全选</Label>
        </div>
        <div class="pl-6 space-y-2">
          <div 
            v-for="item in items" 
            :key="item.id" 
            class="flex items-center gap-2"
          >
            <Checkbox 
              :id="`item-${item.id}`" 
              :checked="item.checked"
              @update:checked="(v) => toggleItem(item.id, v)"
            />
            <Label :for="`item-${item.id}`">{{ item.label }}</Label>
          </div>
        </div>
      </div>
    </section>

    <!-- 表单示例 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-text-deep">表单示例</h2>
      <div class="p-4 bg-fill rounded-lg space-y-4 max-w-md">
        <div class="flex items-start gap-2">
          <Checkbox id="terms" class="mt-0.5" />
          <Label for="terms" class="text-sm leading-relaxed">
            我已阅读并同意<a href="#" class="text-primary hover:underline">服务条款</a>和<a href="#" class="text-primary hover:underline">隐私政策</a>
          </Label>
        </div>
        <div class="flex items-start gap-2">
          <Checkbox id="newsletter" class="mt-0.5" />
          <Label for="newsletter" class="text-sm leading-relaxed">
            订阅新闻邮件，获取最新产品动态
          </Label>
        </div>
      </div>
    </section>
  </div>
</template>
