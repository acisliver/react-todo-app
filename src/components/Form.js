import {useState} from 'react'

export default function Form({ setTodoData }) {

    const [value, setValue] = useState("");

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
            <form className="flex pt-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="value"
                    className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                    placeholder="해야 할 일을 입력하세요."
                    value={value}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
                    value="입력"
                />
            </form>
        </div>
    )
}
