import { ref } from 'vue'

export const useTodos = () => {
  const todos = ref<{ id: number; title: string; done: boolean }[]>([])

  const add = (title: string) => {
    todos.value.push({
      id: Date.now(),
      title,
      done: false,
    })
  }

  const change = (status: boolean, id: number) => {
    const item = todos.value.findIndex((todo) => todo.id === id)
    console.log(item)
  }

  const remove = (id: number) => {
    const item = todos.value.findIndex((todo) => todo.id === id)
    todos.value.splice(item)
  }

  return {
    todos,
    addTodo: add,
    removeTodo: remove,
    changeTodo: change,
  }
}
