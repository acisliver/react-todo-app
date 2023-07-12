import { useState } from 'react';
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {

    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

        return (
            <div className="conatiner">
                <div className="todoBlock">
                    <div className="title">
                        <h1>할 일 목록</h1>
                    </div>
                    <List todoData={ todoData } setTodoData={ setTodoData } />
                    <Form value = { value } setValue={ setValue } setTodoData={ setTodoData }/>
                </div>
            </div>
        )

}
