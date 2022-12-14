import { StyledForm, StyledLabel, StyledInput, StyledButton } from '../ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
export default function LoginForm() {  
    
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        switch (event.target.name) {
            case 'email':
                return setEmail(event.target.value);
            case 'password':
                return setPassword(event.target.value);
            default:
                return;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const authData = { 'email': email, "password": password };

        dispatch(login(authData));

        setEmail("");
        setPassword("");
    }

    return (
        <StyledForm onSubmit={handleSubmit} >
            <StyledLabel> Email
                <StyledInput
                    id = {nanoid()}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                    />
            </StyledLabel>
            <StyledLabel> Password
                <StyledInput
                    id = {nanoid()}
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                />
            </StyledLabel>
            <StyledButton type="submit">Log in</StyledButton>
        </StyledForm>
    )
}
