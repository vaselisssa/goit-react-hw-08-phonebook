import { Helmet } from 'react-helmet';
import RegisterForm from '../../components/RegisterForm';
import { RegisterPageContainer } from './Register.styled';

const Register = () => {
  return (
    <RegisterPageContainer>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </RegisterPageContainer>
  );
};

export default Register;
