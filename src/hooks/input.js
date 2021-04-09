import { useState } from 'react'

function useAddTodoForm() {
    const [formState, updateFromState] = useState({
        "text": "",
        "duedate": false
    })

    const updateTodoText = (e) => {
        updateFromState({ ...formState, text: e.target.value })
    }

    const updateDate = (e) => {
        updateFromState({ ...formState, duedate: e.target.value })
    }

    return { formState, updateTodoText, updateDate }
}

export default useAddTodoForm