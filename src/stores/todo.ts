import { defineStore } from 'pinia'
import { supabase } from '@/utils/supabase'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as { id: number; title: string; text: string; done: boolean, prio: boolean }[],
    filtered: [] as { id: number; title: string; text: string; done: boolean, prio: boolean }[],
    edit: null as null | { id: number; title: string; text: string; prio: boolean },
  }),
  actions: {
    async loadTodos() {
      const { data, error } = await supabase.from('todos').select('*')

      if (error) {
        console.error('Fehler beim laden der Todos', error.message)
        return
      }
      if (data && Array.isArray(data)) {
        this.todos = data
      } else {
        console.error('Keine gültigen Daten erhalten:', data)
      }
    },
    async addTodo(title: string, text: string, prio: boolean) {
      const { data, error } = await supabase
        .from('todos')
        .insert([{ title, text, done: false, prio }])
        .select()

      if (error) {
        console.error('Fehler beim Hinzufügen des Todos:', error.message)
      } else if (data && Array.isArray(data)) {
        this.todos.push(...data)
      }
    },

    async removeTodo(id: number) {
      const { error } = await supabase.from('todos').delete().eq('id', id)

      if (error) {
        console.error('Fehler beim löschen der Todos')
        return
      }
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    async toggleDoneStatus(id: number) {
      const todo = this.todos.find((todo) => todo.id === id)
      if (!todo) return

      const newDoneStatus = !todo.done
      const { error } = await supabase.from('todos').update({ done: newDoneStatus }).eq('id', id)

      if (error) {
        console.error('Fehler beim Aktualisieren der Todos')
        return
      }
      todo.done = newDoneStatus
    },
    filterTodo(done: boolean) {
      this.filtered = this.todos.filter((todo) => todo.done === done)
    },
    async updateTodo(updatedTodo: { id: number; title: string; text: string; prio: boolean }) {
      const index = this.todos.findIndex((todo) => todo.id === updatedTodo.id)
      if (index !== -1) {
        this.todos[index] = { ...this.todos[index], ...updatedTodo }
      }

      const { error } = await supabase.from('todos').update({title: updatedTodo.title, text: updatedTodo.text, prio: updatedTodo.prio}).eq('id', updatedTodo.id)
      if (error) {
        console.error('Fehler beim Bearbeiten der der todos');
        return
      }
    },
    editingToEdit(todo: { id: number; title: string; text: string; prio: boolean }) {
      this.edit = todo
    },
  },
})
