import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as { id: number; title: string; text: string; done: boolean }[],
    filtered: [] as { id: number; title: string; text: string; done: boolean }[],
    edit: null as null | { id: number; title: string; text: string },
  }),
  actions: {
    addTodo(title: string, text: string) {
      this.todos.push({ id: Date.now(), title, text, done: false })
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
