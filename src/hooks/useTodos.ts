import { Ref, ref, watch } from "vue"
import axios from "@/http/axios"
import ToDoType from "@/types/ToDo"

type UseToDo = {
  toDoList: Ref<ToDoType[]>
  fetchToDos: () => Promise<void>
  nextPage: (numberPage?: number) => void
  countAll: Ref<number>
  page: Ref<number>
  allPage: Ref<number>
  loading: Ref<boolean>,
  limit: Ref<number>
}

export function useTodos(defaultLimit?: number): UseToDo {
  if (!defaultLimit) {
    defaultLimit = 10
  }
  const toDoList: Ref<ToDoType[]> = ref([])
  const loading: Ref<boolean> = ref(false)
  const page: Ref<number> = ref(1)
  const countAll: Ref<number> = ref(0)
  const allPage: Ref<number> = ref(0)
  const limit: Ref<number> = ref(defaultLimit)

  const fetchToDos = async () => {
    loading.value = true
    const response = await axios.get(
      `/todos?_limit=${limit.value}&_page=${page.value}`
    )
    const { data }: { data: ToDoType[] } = response
    countAll.value = parseInt(response.headers["x-total-count"])
    toDoList.value = data
    allPage.value = Math.floor(countAll.value / limit.value)
    loading.value = false
  }

  const nextPage = (numberPage?: number) => {
    if (numberPage) {
      if (allPage.value < numberPage) {
        return
      }
      page.value = numberPage
    } else {
      if (page.value === allPage.value) {
        return
      }
      page.value += 1
    }
  }

  watch(page, () => {
    fetchToDos()
  })

  return {
    toDoList,
    fetchToDos,
    countAll,
    page,
    nextPage,
    allPage,
    loading,
    limit
  }
}
