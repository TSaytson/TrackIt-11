import { Link } from "react-router-dom"
import { useState, useContext } from "react";
import LoginContainer from "../components/LoginContainer";
import { LoginForm } from "../styles/StyledForm";
import axios from "axios";
import { AuthContext } from "../contexts/Auth";
import Swal from "sweetalert2";

export default function SignIn() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const { API_URL } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/login`, form);
      Swal.fire({
        icon: "success",
        title: `Welcome ${response.data.name}!`,
        showConfirmButton: false,
        timer: 2000,
        footer: 'You will be redirected to today page'
      })
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        text: 'Do you want to go to Sign Up page?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        confirmButtonColor: 'green',
      }).then((result) => {
        result.isConfirmed ? navigate('/SignUp') : ''
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
            value={form.email}
            name="email"
            type='email'
            onChange={handleForm}
            placeholder="email" />
          <input
            value={form.password}
            name="password"
            type='password'
            onChange={handleForm}
            placeholder="senha" />
          <button type="submit">Entrar</button>
        </LoginForm>

        <Link to='/SignUp'>Não tem uma conta? Cadastre-se</Link>
      </LoginContainer>
    </>
  )
}
