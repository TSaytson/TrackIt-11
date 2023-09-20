import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import StyledForm from "../components/StyledForm";
import LoginContainer from "../components/LoginContainer";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import axios from "axios";

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
        const response = await axios.post(`${API_URL}/auth/signup`, form);
        console.log(response);
        navigate('/');

    }

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        e.preventDefault();
        console.log(e);
    }

    return (
        <>
            <LoginContainer>
                <h1>TrackIt</h1>
                <StyledForm onSubmit={handleSubmit}>
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
                </StyledForm>
                <Link to='/'>Já tem uma conta? Faça login!</Link>
            </LoginContainer>
        </>
    )
}