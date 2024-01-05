import { TiContacts } from 'react-icons/ti';
import { HomeContainer, HomeTitle } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Contacts</HomeTitle>
      <TiContacts size={'3em'} />
    </HomeContainer>
  );
};

export default Home;
