import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../Api/utils/api';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

export default function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`${baseUrl}/json/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      });
  }

  return (
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" />

        <Input label="Senha" type="password" name="password" />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
}
