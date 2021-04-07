import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">Navbar</a>

          <ul className="nav">
            <li className="nav-item">
              <button className="btn btn-primary">Add Todo</button>
            </li>
          </ul>

        </div>

      </nav>

      <div className="container-fluid">
        <div className="row">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Meeting
              <span className="badge bg-danger rounded-pill">&times;</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Water</li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Exercise</li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Book Reading</li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Programming</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
