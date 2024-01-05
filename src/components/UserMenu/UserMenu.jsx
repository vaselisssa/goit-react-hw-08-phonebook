import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { Wrapper, UserName, LogoutButton } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <LogoutButton
        type="button"
        onClick={() => dispatch(logOut())}
        aria-label="Logout"
      >
        <RiLogoutCircleRLine />
      </LogoutButton>
    </Wrapper>
  );
};

export default UserMenu;
