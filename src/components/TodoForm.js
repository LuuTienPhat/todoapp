import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {!props.edit ? (
        <>
          <input
            type="text"
            name="text"
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            // ref={inputRef}
            className="form-input"
          ></input>
          <button className="form-btn">Add</button>
        </>
      ) : (
        <>
          <input
            type="text"
            name="text"
            placeholder="Update a todo"
            value={input}
            onChange={handleChange}
            // ref={inputRef}
            className="form-input"
          ></input>
          <button className="form-btn">Update</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
