import { Ref, ref } from "vue"
import axios from "@/http/axios"
import ToDoType from "@/types/ToDo"

type UseToDo = {
  fetchTodo: () => Promise<void>
  loading: Ref<boolean>
  toDo: Ref<ToDoType | undefined>
}
export default function useTodo(id: number): UseToDo {
  const toDo: Ref<ToDoType | undefined> = ref()
  const loading: Ref<boolean> = ref(false)

  const fetchTodo = async () => {
    loading.value = true
    const response = await axios.get(`/todos/${id}`)
    const { data }: { data: ToDoType } = response
    toDo.value = data
    loading.value = false
  }

  return {
    fetchTodo,
    loading,
    toDo,
  }
}
