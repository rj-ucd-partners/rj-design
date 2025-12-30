<script setup lang="ts">
import { ref } from 'vue'
import ButtonStories from './components/ButtonStories.vue'
import AlertStories from './components/AlertStories.vue'
import BadgeStories from './components/BadgeStories.vue'
import BreadcrumbStories from './components/BreadcrumbStories.vue'
import CheckboxStories from './components/CheckboxStories.vue'
import CollapsibleStories from './components/CollapsibleStories.vue'
import DialogStories from './components/DialogStories.vue'
import DrawerStories from './components/DrawerStories.vue'

type PageType = 'button' | 'alert' | 'badge' | 'breadcrumb' | 'checkbox' | 'collapsible' | 'dialog' | 'drawer'

const pages: { key: PageType; label: string }[] = [
  { key: 'button', label: 'Button' },
  { key: 'alert', label: 'Alert' },
  { key: 'badge', label: 'Badge' },
  { key: 'breadcrumb', label: 'Breadcrumb' },
  { key: 'checkbox', label: 'Checkbox' },
  { key: 'collapsible', label: 'Collapsible' },
  { key: 'dialog', label: 'Dialog' },
  { key: 'drawer', label: 'Drawer' },
]

const currentPage = ref<PageType>('drawer')
</script>

<template>
  <!-- 页面切换导航 -->
  <nav class="sticky top-0 z-50 flex gap-2 p-4 bg-background/80 backdrop-blur-sm border-b border-border">
    <button
      v-for="page in pages"
      :key="page.key"
      @click="currentPage = page.key"
      class="px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
      :class="currentPage === page.key 
        ? 'bg-primary text-text' 
        : 'bg-card border border-border text-secondary hover:bg-fill-light-hover-bg'"
    >
      {{ page.label }}
    </button>
  </nav>

  <!-- 页面内容 -->
  <main>
    <ButtonStories v-if="currentPage === 'button'" />
    <AlertStories v-else-if="currentPage === 'alert'" />
    <BadgeStories v-else-if="currentPage === 'badge'" />
    <BreadcrumbStories v-else-if="currentPage === 'breadcrumb'" />
    <CheckboxStories v-else-if="currentPage === 'checkbox'" />
    <CollapsibleStories v-else-if="currentPage === 'collapsible'" />
    <DialogStories v-else-if="currentPage === 'dialog'" />
    <DrawerStories v-else-if="currentPage === 'drawer'" />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
