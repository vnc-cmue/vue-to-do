import { defineStore } from 'pinia'
import { supabase } from '@/utils/supabase'

export const useShoppingList = defineStore('shopping', {
  state: () => ({
    shoppingItems: [] as { id: number; name: string; unit: string; store_id: number; done: boolean; quantity: number; }[],
    filteredShoppingItems: [] as { id: number; name: string; unit: string; store_id: number; done: boolean; quantity: number; }[]
  }),
  actions: {
    async loadShoppingItems() {
      const { data, error } = await supabase.from('shopping_items').select('*')

      if (error) {
        console.error('Fehler beim laden der Einkaufsliste', error.message)
        return
      }
      if (data && Array.isArray(data)) {
        this.shoppingItems = data
        console.log(data);
      }
    }
  },
})
