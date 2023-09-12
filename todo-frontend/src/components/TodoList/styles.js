import styled from "styled-components";

export const ListContainer = styled.ul`
  padding: 0;
  cursor: pointer;
`;

export const Row = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 1rem;
`;

export const Text = styled.span`
  ::first-letter {
    text-transform: capitalize;
  }
  color: ${(props) => (props.isCompleted ? "red" : null)};
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : null)};
`;
export const DeleteIcon = styled(Text)`
  cursor: pointer;
`;
