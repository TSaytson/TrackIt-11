import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react";
import StyledForm from "../components/StyledForm";
import LoginContainer from "../components/LoginContainer";

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
        console.log(form);
    }
    return (
        <>
            <LoginContainer>
                <h1>TrackIt</h1>
                <StyledForm onSubmit={handleSubmit}>
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
                </StyledForm>
 
                <Link to='/SignUp'>Não tem uma conta? Cadastre-se</Link>
            </LoginContainer>
        </>
    )
}
