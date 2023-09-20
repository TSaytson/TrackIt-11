import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import LoginContainer from "../components/LoginContainer";
import { LoginForm } from "../templates/LoginForm";
import axios from "axios";
import { AuthContext } from "../contexts/Auth";
import Swal from "sweetalert2";
import { Loader } from "../templates/Loader";

export default function SignIn() {
  const navigate = useNavigate();
  const { API_URL } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [clicked, setClicked] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setClicked(true);
      const response =
        await axios.post(`${API_URL}/auth/login`, form);
      Swal.fire({
        icon: "success",
        title: `Welcome ${response.data.name}!`,
        showConfirmButton: false,
        timer: 2000,
        footer: "You will be redirected to today's page"
      });
      setTimeout(() => navigate('/today'), 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        text: 'Do you want to go to Sign Up page?',
        showDenyButton: true,
        toast: true,
        position: 'top',
        confirmButtonText: 'Yes',
        confirmButtonColor: 'green',
      }).then((result) => {
        result.isConfirmed ? navigate('/sign-up') : setClicked(false);
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
        <LoginForm clicked={clicked} onSubmit={handleSubmit}>
          <input
            disabled={clicked}
            value={form.email}
            name="email"
            type='email'
            onChange={handleForm}
            placeholder="email" />
          <input
            disabled={clicked}
            value={form.password}
            name="password"
            type='password'
            onChange={handleForm}
            placeholder="senha" />
          <button type="submit" disabled={clicked}>
            {clicked ? <Loader></Loader> : 'Sign In'}
          </button>
        </LoginForm>

        <Link to='/sign-up' hidden={clicked}>
          Não tem uma conta? Cadastre-se
        </Link>
      </LoginContainer>
    </>
  )
}
