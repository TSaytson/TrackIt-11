import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginContainer from "../components/LoginContainer";
import axios from "axios";
import { AuthContext } from "../contexts/Auth";
import { LoginForm } from '../templates/LoginForm'
import Swal from "sweetalert2";
import { Loader } from "../templates/Loader";
import { signUp } from "../services/authApi";

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    image: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await signUp(form)
      Swal.fire({
        icon: "success",
        title: 'Created',
        text: `User ${response.name} successfully created`,
        showConfirmButton: false,
        timer: 2000,
        footer: 'You will be redirected to sign in page'
      })
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.log(error.response);
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        text: 'Do you want to go to Sign In page?',
        showDenyButton: true,
        toast: true,
        position: 'top',
        confirmButtonText: 'Yes',
        confirmButtonColor: 'green',
      }).then((result) => {
        result.isConfirmed ? navigate('/') : setIsLoading(false);
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
            name="email"
            value={form.email}
            onChange={handleForm}
            type='email'
            placeholder="email"
            disabled={isLoading}
            required />
          <input
            name="password"
            value={form.password}
            onChange={handleForm}
            type='password'
            placeholder="senha"
            disabled={isLoading}
            required />
          <input
            name="name"
            value={form.name}
            onChange={handleForm}
            type='text'
            placeholder='nome'
            disabled={isLoading}
            required />
          <input
            name="image"
            value={form.image}
            onChange={handleForm}
            type='url'
            placeholder='foto'
            disabled={isLoading}
            required />
          <button type='submit' disabled={isLoading}>
            {isLoading ? <Loader></Loader> : 'Sign Up'}
          </button>
        </LoginForm>

        <Link to='/' hidden={isLoading}>
          Já tem uma conta? Faça login!
        </Link>
      </LoginContainer>
    </>
  )
}