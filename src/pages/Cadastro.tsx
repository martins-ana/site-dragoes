import React from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import userIcon from '../assets/userIcon.png'
import './stylesLoginCadastro.css'
import { Link } from 'react-router-dom';

const Cadastro: React.FC = () => {
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
      <FloatingLabel controlId="floatingPassword" label="Celular">
        <Form.Control type="tel" placeholder="tel" />
      </FloatingLabel>
    <Button variant="dark">Cadastrar</Button>
    </Form>
    <p>Possui uma conta?
    <Link to="/login"> Entrar</Link>
    </p>
  </section>
  );
}

export default Cadastro;
