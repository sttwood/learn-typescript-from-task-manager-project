export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

// type Actions =
//     |   { type: 'add'; payload: string }
//     |   { type: 'remove'; payload: number }
//     |   { type: 'done'; payload: number }

// const TodoReducer = (state: Todo[], action: Actions) => {
//     switch (action.type) {
//         case 'add':
//             return [
//                 ...state,
//                 { id: Date.now(), todo: action.payload, isDone: false }
//             ]
//         case 'remove':
//             return state.filter((todo) => todo.id !== action.payload)
//         case 'done':
//             return state.map((todo) => todo.id !== action.payload ? { ...todo, isDone: !todo.isDone } : todo)
//     }
// }

// const ReducerExample = () => {
//     const [state, dispatch] = useReducer(TodoReducer, [])

//     return (
//         <div className="todos__single--action">
//                 <span className="icon">
//                     <AiFillEdit
//                         onClick={() => {
//                             if (!edit && !todo.isDone) {
//                                 setEdit(!edit)
//                             }
//                         }}
//                     />
//                 </span>
//                 <span className="icon">
//                     <AiFillDelete onClick={() => handleDelete(todo.id)} />
//                 </span>
//                 <span className="icon">
//                     <MdDone onClick={() => handleDone(todo.id)} />
//                 </span>
//             </div>
//         )
// }