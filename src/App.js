import { useState } from 'react';
import "./App.css";

export default function App() {

    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");

    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }

    const getStyle = (completed) => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none",
        }
    }

    const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id);
        console.log(newTodoData);
        setTodoData(newTodoData);
    }

    const handleChange = (e) => {
        console.log('e', e.target.value);
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        // form 안에 submit 기본 이벤트 페이지 리로드 막기
        e.preventDefault();

        let newToDo = {
            id: Date.now(),
            title: value,
            completed: false
        }

        setTodoData(prev => [...prev, newToDo]);
        setValue("");
    }

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map((data) => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        });

        setTodoData(newTodoData)
    }


        return (
            <div className="conatiner">
                <div className="todoBlock">
                    <div className="title">
                        <h1>할 일 목록</h1>
                    </div>
                    {todoData.map(data => (
                        <div style={getStyle(data.completed)} key={data.id}>
                            <input type="checkbox" defaultChecked={data.completed}
                                   onChange={() => handleCompleteChange(data.id)}/>
                            {data.title}
                            <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
                        </div>
                    ))}
                    <form style={{display: 'flex'}} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="value"
                            style={{flex: "10", padding: "5px"}}
                            placeholder="해야 할 일을 입력하세요."
                            value={value}
                            onChange={handleChange}
                        />
                        <input
                            type="submit"
                            value="입력"
                            className="btn"
                            style={{flex: '1'}}
                        />
                    </form>
                </div>
            </div>
        )

}
