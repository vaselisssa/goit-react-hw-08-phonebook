import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  height: 600px;
  width: 100vw;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const Label = styled.form`
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
