import React from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './stylesLoginCadastro.css'
import userIcon from '../assets/userIcon.png'
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <section className='sessao_login_cadastro'>
    <img className='userIcon' src={userIcon} alt="userIcon" />
    <Form className='form_login_cadastro'>
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Senha">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    <Button variant="dark">Entre</Button>
    </Form>
    <p>Não possui uma conta?
    <Link to="/cadastro"> Cadastre-se</Link>
    </p>
  </section>
  )
  ;
}

export default Login;
