import { Link, useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react";
import LoginContainer from "../components/LoginContainer";
import { LoginForm } from "../templates/LoginForm";
import axios from "axios";
import { AuthContext } from "../contexts/Auth";
import Swal from "sweetalert2";
import { Loader } from "../templates/Loader";
import { signIn } from "../services/authApi";

export default function SignIn() {
  const navigate = useNavigate();
  const { API_URL, setUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) navigate('/today');
  })

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);

      const { name, image, token } = await signIn(form);
      setUser({ name, image, token });

      localStorage.setItem('user',
        JSON.stringify({ name, image, token }));

      Swal.fire({
        icon: "success",
        title: `Welcome ${name}!`,
        showConfirmButton: false,
        timer: 2000,
        footer: "You will be redirected to today's page"
      });
      setTimeout(() => navigate('/today'), 2000);
    } catch (error) {
      console.log(error.response)
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
        result.isConfirmed ? navigate('/sign-up') : setIsLoading(false);
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
        <LoginForm isLoading={isLoading} onSubmit={handleSubmit}>
          <input
            disabled={isLoading}
            value={form.email}
            name="email"
            type='email'
            onChange={handleForm}
            placeholder="email"
            required />
          <input
            disabled={isLoading}
            value={form.password}
            name="password"
            type='password'
            onChange={handleForm}
            placeholder="senha"
            required />
          <button type="submit" disabled={isLoading}>
            {isLoading ? <Loader></Loader> : 'Sign In'}
          </button>
        </LoginForm>

        <Link to='/sign-up' hidden={isLoading}>
          Não tem uma conta? Cadastre-se
        </Link>
      </LoginContainer>
    </>
  )
}
