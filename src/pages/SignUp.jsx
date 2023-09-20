import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginContainer from "../components/LoginContainer";
import axios from "axios";
import { AuthContext } from "../contexts/Auth";
import { LoginForm } from '../styles/StyledForm'
import Swal from "sweetalert2";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    image: ''
  });
  const { API_URL } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/sign-up`, form);
      Swal.fire({
        icon: "success",
        title: 'Created',
        text: `User ${response.data.name} successfully created`,
        showConfirmButton: false,
        timer: 2000,
        footer: 'You will be redirected to sign in page'
      })
      navigate('/');
    } catch (error) {
      console.log(error.response.data.message);
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        text: 'Do you want to go to Sign In page?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        confirmButtonColor: 'green',
      }).then((result) => {
        result.isConfirmed ? navigate('/') : ''
      })
    }
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <LoginContainer>
        <h1>TrackIt</h1>
        <LoginForm onSubmit={handleSubmit}>
          <input
            name="email"
            value={form.email}
            onChange={handleForm}
            type='email'
            placeholder="email" />
          <input
            name="password"
            value={form.password}
            onChange={handleForm}
            type='password'
            placeholder="senha" />
          <input
            name="name"
            value={form.name}
            onChange={handleForm}
            type='text'
            placeholder='nome' />
          <input
            name="image"
            value={form.image}
            onChange={handleForm}
            type='url'
            placeholder='foto' />
          <button type='submit'>Cadastrar</button>
        </LoginForm>
        <Link to='/'>Já tem uma conta? Faça login!</Link>
      </LoginContainer>
    </>
  )
}