import React from 'react'

function List() {
    const [todoList, setTodo] = useState(["todo1", "todo2", "todo3"])
    return (
        <div className="container-fluid">
            <div className="row">
                <ul className="list-group">
                    {
                        todoList.map((item, index) => {
                            return <li id={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {item}
                                <span className="badge bg-danger rounded-pill">&times;</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default List