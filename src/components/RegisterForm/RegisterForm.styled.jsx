import styled from '@emotion/styled';

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 320px;
  min-height: 185px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  gap: 4px;
  font-weight: 700;

  &:hover,
  &:focus,
  &:active {
    color: #8a9ec1;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 14px;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.5);
  }
`;

export const Button = styled.button`
  padding: 4px 10px;
  align-self: flex-end;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #8a9ec1;
  }
`;
