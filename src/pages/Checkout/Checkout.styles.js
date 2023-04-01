import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1em;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
`;

export const Input = styled.input`
  width: 40px;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  background-color: #ddd;
  padding: 0.5em;
  margin-left: 0.5em;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;
