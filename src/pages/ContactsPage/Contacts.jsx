import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import Loader from '../../components/Loader';
import { Container, Title, SubTitle } from './Contacts.styled';

import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title children="Phonebook" />

      <ContactForm />
      <SubTitle children="Contacts" />
      <Filter />
      {isLoading && <Loader />}
      {error && toast.error(error)}
      <ContactList />
      <ToastContainer />
    </Container>
  );
};

export default Contacts;
