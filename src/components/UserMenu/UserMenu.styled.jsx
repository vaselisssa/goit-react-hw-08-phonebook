import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
  color: #8a9ec1;
`;

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid #8a9ec1;
  border-radius: 50%;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background-color: #8a9ec1;
  }
`;
