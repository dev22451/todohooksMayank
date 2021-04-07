import { useState, useEffect } from 'react'

function useTodoList(initState) {
    const [todoList, setTodo] = useState(initState)

    useEffect(() => {
        document.title = "New Todo Added!" + todoList.length + 1;
        window.localStorage.setItem("todoList", todoList)
        return () => {
            window.localStorage.clear()
        }
    })

    return [todoList, setTodo]
}

export default useTodoList