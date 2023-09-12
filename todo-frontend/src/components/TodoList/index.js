import React from "react";
import { ListContainer, Row, Text, DeleteIcon } from "./styles";
import axios from "../../axios";

function TodoList({ todos, fetchData }) {
  console.log(todos);
  const updateTodo = async (id) => {
    try {
      const response = await axios.put(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch (error) {
      console.error(error.message);
    }
  };
  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`/todos/${id}`, {
        id,
      });
      fetchData();
      return response.data.json;
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <ListContainer>
        {/* render all the todo in bullet points */}
        {todos?.map((todo) => (
          <Row key={todo._id}>
            <Text
              isCompleted={todo.completed}
              onClick={() => updateTodo(todo._id)}
            >
              {todo.text}
            </Text>
            <DeleteIcon onClick={() => deleteTodo(todo._id)}>X</DeleteIcon>
          </Row>
        ))}
      </ListContainer>
    </div>
  );
}

export default TodoList;
