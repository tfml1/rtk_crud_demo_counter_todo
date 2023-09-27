import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deletetodo } from "./todoSlice";
// we imported actions n useXXXX methods, now we use actions with these methods to render n update the data of global state

const TodoComponent = () => {
  const [td, setTd] = useState(""); // temp state to hold input box onchange value wghich we dispatch with addtodo in btn onclick clbk

  const dispatch = useDispatch();
  const onclickclbk = (evnt) => {
    // note, this is btn onclick event, not inpbox onchange event, that already used to assign td state, this btn onclick evnt will dispatch current value of td state to addtodo method that will update global state in slice reducer
    evnt.preventDefault(); // If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.
    dispatch(addtodo(td));
    setTd("");
  };

  // console.log(state.todo) // state can only be accessed by useSellector and only be taken as args as its a global state prop recived by the component, this here will give error, take state inside usesellector, usesellector takes a clbk inside which u can console log the state
  const todolist = useSelector((state) => {
    // console.log(state)
    /*console.log op-->>
    {todo: Object}
    todo: Object
    todos: Array(1)
    0: Object
    id: 1
    text: "test todo"
 */
    return state.todo; // now todo has todoS so in map, we directly access todos
  });
  // console.log(todolist)
  /*console.log op-->>
{todos: Array(1)}
todos: Array(1)
0: Object
id: 1
text: "test todo */

  return (
    <div>
      <br />
      todo test
      <br />
      <input value={td} onChange={(e) => setTd(e.target.value)} />
      <button onClick={onclickclbk}>add todo</button>
      {todolist.todos.map((iter) => {
        return (
          <li>
            <span
              style={{ color: "red", backgroundColor: "yellow" }}
              key={iter.id}
            >
              {" "}
              _{iter.text}_
            </span>{" "}
            <button
              onClick={() => {
                dispatch(deletetodo(iter.id));
              }}
            >
              del
            </button>
          </li>
        );
      })}
      {/* delete button now created with each new todo rendered by map array loop , dispatching current id of iter array element with deletetodo action to slice reducer which will apply filter method to delete the element */}
    </div>
  );
};
export default TodoComponent;
