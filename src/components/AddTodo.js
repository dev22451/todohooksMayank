import useAddTodoForm from '../hooks/input'

function AddTodoForm(props) {

    const { formState, updateTodoText, updateDate } = useAddTodoForm()

    const submitForm = (e) => {
        e.preventDefault()

        props.addTodo(formState.text, formState.duedate)
        props.toggleDisplayForm()
    }

    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 gx-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="todoText" className="form-label">Todo</label>
                        <input type="text" className="form-control" id="todoText" value={formState.text} onChange={updateTodoText} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Due Date</label>
                        <input type="date" className="form-control" id="date" value={formState.date} onChange={updateDate} />
                    </div>

                    <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-md-4"></div>
        </div>
    )
}

export default AddTodoForm