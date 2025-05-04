import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBInput,
} from 'mdb-react-ui-kit';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Please enter both username and password.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8081/auth/login', {
                email,
                password
            });

            console.log('Login successful:', response.data);
            navigate('/dashboard');
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                console.error('Login failed:', err.response?.data || err.message);
                setError(err.response?.data || 'Login failed');
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred.');
            }
        }
    };

    const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
        (e: ChangeEvent<HTMLInputElement>) => setter(e.target.value);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="border rounded-lg p-4" style={{ width: '500px', height: 'auto' }}>
                <MDBContainer className="p-3">
                    <h2 className="mb-4 text-center">Login Page</h2>

                    <MDBInput
                        wrapperClass='mb-4'
                        placeholder='Email address'
                        id='email'
                        type='email'
                        value={email}
                        onChange={handleChange(setEmail)}
                    />
                    <MDBInput
                        wrapperClass='mb-4'
                        placeholder='Password'
                        id='password'
                        type='password'
                        value={password}
                        onChange={handleChange(setPassword)}
                    />

                    {error && <p className="text-danger">{error}</p>}

                    <button
                        className="mb-4 d-block btn-primary"
                        style={{ height: '50px', width: '100%' }}
                        onClick={handleLogin}
                    >
                        Sign in
                    </button>

                    <div className="text-center">
                        <p>Not a member? <a href="/registration">Register</a></p>
                    </div>
                </MDBContainer>
            </div>
        </div>
    );
};

export default Login;
