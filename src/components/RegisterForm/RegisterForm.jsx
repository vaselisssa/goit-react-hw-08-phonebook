import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Form, Label, Input, Button } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username*
        <Input type="text" name="name" required />
      </Label>
      <Label>
        Email*
        <Input type="email" name="email" required />
      </Label>
      <Label>
        Password*
        <Input type="password" name="password" required />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterForm;
