import React from "react";
import { FormContainer, Input, Button } from "./styles";

function Form({ input, setInput, addTodo }) {
  return (
    <FormContainer>
      <Input
        value={input}
        type="text"
        role="input"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit" onClick={(e) => addTodo(e)}>
        Add
      </Button>
    </FormContainer>
  );
}

export default Form;
