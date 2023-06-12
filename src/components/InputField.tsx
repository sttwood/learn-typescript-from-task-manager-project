import React, { useRef } from "react";

// Style
import '../assets/InputField.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleSubmit(e)
                inputRef.current?.blur();
            }}
        >
            <input
                ref={inputRef}
                type="input"
                placeholder="Enter your task..."
                className="input__box"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="input__submit"
            >Submit</button>
        </form>
    )
};

export default InputField;
