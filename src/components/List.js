
function List(props) {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <ul className="list-group">
                        {
                            props.todoList.map((item, index) => {
                                return <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>
                                        <div className="form-check form-switch">
                                            <input checked={item.completed} onChange={() => props.markTodo(index)} className="form-check-input" type="checkbox" />
                                        </div>
                                    </span>

                                    {item.text}
                                    <small>{item.duedate.toLocaleString()}</small>
                                    {item.completed === true && <span>&#10004;</span>}
                                    {item.completed === true && <span onClick={() => props.deleteTodo(index)} className="badge bg-danger rounded-pill">&times;</span>}



                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-md-4"></div>
            </div>


        </div>
    )
}

export default List