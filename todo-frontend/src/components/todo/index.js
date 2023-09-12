import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Form from "../Form";
import axios from "../../axios";
import TodoList from "../TodoList";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("/todos");
      setTodos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (input.length === 0) return null;
    await axios.post("/todos", [
      {
        ...todos,
        text: input,
        completed: false,
      },
    ]);
    fetchData();
    setInput("");
  };

  return (
    <Container>
      <h2>List of Todos</h2>
      {/* Form Component */}
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      {/* TodoList */}
      <TodoList todos={todos} fetchData={fetchData} />
      {/* Key */}
      {/* Author Component */}
    </Container>
  );
}

export default Todo;
