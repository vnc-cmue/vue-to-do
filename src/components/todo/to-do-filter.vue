<template>
  <!-- <form class="filter mt-5">
    <input @click="clearFilter" class="btn btn-error size-10" type="reset" value="×" />
    <input
      @click="filterTodo({ done: false })"
      class="btn btn-outline btn-warning size-8"
      type="radio"
      name="frameworks"
      aria-label="Offen"
    />
    <input
      @click="filterTodo({ done: true })"
      class="btn btn-outline btn-warning size-8"
      type="radio"
      name="frameworks"
      aria-label="Erledigt"
    />
    <input
      @click="filterTodo({ prio: true })"
      class="btn btn-outline btn-warning size-8"
      type="radio"
      name="frameworks"
      aria-label="Wichtig"
    />
  </form> -->
  <div role="tablist" class="tabs tabs-border">
    <a @click="selectTab('all')" role="tab" :class="['tab', {'tab-active': defaultTab}]"
      >Alle</a
    >
    <a
      @click="selectTab('open')"
      role="tab"
      :class="['tab', selectedTab === 'open' && 'tab-active']"
      >Offen</a
    >
    <a
      @click="selectTab('done')"
      role="tab"
      :class="['tab', selectedTab === 'done' && 'tab-active']"
      >Erledigt</a
    >
    <a
      @click="selectTab('prio')"
      role="tab"
      :class="['tab', selectedTab === 'prio' && 'tab-active']"
      >Wichtig</a
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../../stores/todo'

const store = useTodoStore()
const filterTodo = store.filterTodo
const clearFilter = store.clearFilter

const selectedTab = ref<string>('alle')
const defaultTab = ref<boolean>(true)

const selectTab = (tab: string) => {
  selectedTab.value = tab

  switch (tab) {
    case 'all':
      clearFilter()
      defaultTab.value = true
      break
    case 'open':
      filterTodo({ done: false })
      defaultTab.value = false
      break
    case 'done':
      filterTodo({ done: true })
      defaultTab.value = false
      break
    case 'prio':
      filterTodo({ prio: true })
      defaultTab.value = false
      break
  }
}
</script>
