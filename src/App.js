import {useState, useEffect} from "react"
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(() => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break
            default:
                setFilteredTodos(todos)
                break
        }
    }, [todos, status])

    return (
        <div className="App">
            <header>
                <h1>Ed's Todo List</h1>
            </header>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
                filteredTodos={filteredTodos}
            />
            <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
        </div>
    )
}

export default App;
