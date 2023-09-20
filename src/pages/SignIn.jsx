import { Link } from "react-router-dom"
import { useState } from "react";
import LoginContainer from "../components/LoginContainer";
import { LoginForm } from "../styles/StyledForm";

export default function SignIn() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(form);
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
