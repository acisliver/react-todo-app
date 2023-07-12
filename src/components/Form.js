import React from 'react'

export default function Form({ value, setValue, setTodoData }) {
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

    return (
        <div>
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
    )
}
