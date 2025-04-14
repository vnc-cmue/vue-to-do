import { defineStore } from 'pinia'
import { supabase } from '@/utils/supabase'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as { id: number; title: string; text: string; done: boolean }[],
    filtered: [] as { id: number; title: string; text: string; done: boolean }[],
    edit: null as null | { id: number; title: string; text: string },
  }),
  actions: {
    async loadTodos() {
      const { data, error } = await supabase.from('todos').select('*')

      if (error) {
        console.error('Fehler beim laden der Todos', error.message);
        return
      } if (data && Array.isArray(data)) {
        this.todos = data
        console.log(this.todos)
      } else {
        console.error('Keine gültigen Daten erhalten:', data)
      }
    },
    async addTodo(title: string, text: string) {
      const { data, error } = await supabase
        .from('todos')
        .insert([{ title, text, done: false }])
        .select()

      if (error) {
        console.error('Fehler beim Hinzufügen des Todos:', error.message)
      } else if (data && Array.isArray(data)) {
        this.todos.push(...data)
      }
    },

    removeTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    toggleDoneStatus(id: number) {
      const todo = this.todos.find((todo) => todo.id === id)
      if (todo) todo.done = !todo.done
    },
    filterTodo(done: boolean) {
      this.filtered = this.todos.filter((todo) => todo.done === done)
    },
    updateTodo(updatedTodo: { id: number; title: string; text: string }) {
      const index = this.todos.findIndex((todo) => todo.id === updatedTodo.id)
      if (index !== -1) {
        this.todos[index] = { ...this.todos[index], ...updatedTodo }
      }
    },
    editingToEdit(todo: { id: number; title: string; text: string }) {
      this.edit = todo
    },
  },
})
