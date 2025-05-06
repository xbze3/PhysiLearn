import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8081/oauth2/authorization/google";
      };

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
            const token = response.data.jwt;
            localStorage.setItem("token", token);
              

            console.log('Login successful:', response.data);
            console.log(token);
            navigate('/insdashboard');
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
            <div className="border rounded p-4 bg-light" style={{ width: '500px' }}>
                <div className="container p-3">
                    <h2 className="mb-4 text-center">Login Page</h2>
    
                    <div className="mb-3">
                        <input
                            className="form-control"
                            placeholder="Email address"
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleChange(setEmail)}
                        />
                    </div>
    
                    <div className="mb-3">
                        <input
                            className="form-control"
                            placeholder="Password"
                            id="password"
                            type="password"
                            value={password}
                            onChange={handleChange(setPassword)}
                        />
                    </div>
    
                    {error && <p className="text-danger">{error}</p>}
    
                    <button
                        className="btn btn-primary mb-3 w-100"
                        style={{ height: '50px', marginTop: '10px' }}
                        onClick={handleLogin}
                    >
                        Sign in
                    </button>
    
                    <button
                        className="btn btn-danger mb-3 w-100"
                        style={{ height: '50px', marginTop: '5px' }}
                        onClick={handleGoogleLogin}
                    >
                        Google Sign-in
                    </button>
    
                    <div className="text-center">
                        <p>Not a member? <a href="/registration">Register</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default Login;
