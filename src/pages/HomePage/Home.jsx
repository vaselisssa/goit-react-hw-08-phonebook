import { TiContacts } from 'react-icons/ti';
import { HomeContainer, HomeTitle } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Contacts</HomeTitle>
      <TiContacts size={'4em'} />
    </HomeContainer>
  );
};

export default Home;
