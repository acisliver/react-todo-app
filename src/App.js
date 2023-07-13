import {useState, useCallback} from 'react';
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {

    const [todoData, setTodoData] = useState([]);

    const handleClick = useCallback((id) => {
        let newTodoData = todoData.filter(data => data.id !== id);
        console.log(newTodoData);
        setTodoData(newTodoData);
    }, [todoData])

    const handleRemoveAll = () => {
        setTodoData([]);
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
                <div className="flex justify-between mb-3">
                    <h1>할 일 목록</h1>
                    <button onClick={handleRemoveAll}>Delete All</button>
                </div>
                <List todoData={todoData} setTodoData={setTodoData} handleClick={handleClick}/>
                <Form setTodoData={setTodoData}/>
            </div>
        </div>
    )

}
