import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #1c2331;
  color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  margin: auto;
  max-width: 50%;
  border: solid 2px #120a19;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const Hr = styled.hr`
  width: 60%;
  border: 1px solid #fff;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  margin: auto;
  padding: 1rem;
`;
export const Input = styled.input`
  border-radius: 2px;
  margin: 0 auto;
  display: block;
  border: solid 2px #120a19;
  font-size: 1.5em;
  letter-spacing: 0.4em;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  margin: 2% auto 0;
  width: 100%;
  max-width: 100%;
  height: 5rem;
  max-height: 120px;
  border-radius: 5px;
  border: solid 2px black;
  background-color: white;
  font-family: sans-serif;
`;

export const Button = styled.button`
  background-color: #0074d9;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 2rem auto;
  display: block;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: #ffffff;
    color: #0074d9;
    transform: scale(1.05);
  }
`;
