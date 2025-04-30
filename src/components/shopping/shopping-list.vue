<template>
  <h1 class="p-4 pb-2 text-xl tracking-wide mt-5">Einkaufsliste</h1>
  <div class="m-5">
    <ShoppingFilter/>
  </div>
  <div class="m-2">
      <ShoppingAdd />
    </div>
  <ul class="list bg-neutral rounded-box shadow-md size-3/4">
    <li class="list-row" v-for="item in shoppingListShow" :key="item.id">
      <ShoppingItem
        :id="item.id"
        :name="item.name"
        :unit="item.unit"
        :done="item.done"
        :quantity="item.quantity"
         :store_id="item.store_id"
      ></ShoppingItem>
    </li>
  </ul>


</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useShoppingList } from '../../stores/shopping'
import ShoppingItem from '@/components/shopping/shopping-item.vue'
import ShoppingFilter from '@/components/shopping/shopping-filter.vue'
import ShoppingAdd from '@/components/shopping/shopping-add.vue'

const store = useShoppingList()

const shoppingListShow = computed(() => store.shoppingItems)

onMounted(() => {
  store.loadShoppingItems()
})
</script>
