import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const UserName = styled.p`
  font-weight: 700;
  color: #8a9ec1;
`;

export const LogoutButton = styled.button`
  padding: 2px 10px;
  border: 1px solid #8a9ec1;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background-color: #8a9ec1;
  }
`;
