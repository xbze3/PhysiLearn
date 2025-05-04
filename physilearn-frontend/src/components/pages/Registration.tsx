import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBInput,
} from 'mdb-react-ui-kit';

const Registration: React.FC = () => {
    const [username, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [role, setRole] = useState<string>('ROLE_CUSTOMER');
    const [mobile, setMobileNumber] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            if (!username || !email || !password || !confirmPassword || !mobile) {
                setError('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                throw new Error("Passwords do not match");
            }

            const response = await axios.post('http://localhost:8081/auth/registration', {
                username,
                email,
                role,
                password
            });

            console.log(response.data);
            navigate('/login');
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data || error.message);
            } else if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unexpected error occurred.");
            }
        }
    };

    const handleInputChange = (
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setter(e.target.value);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="border rounded-lg p-4" style={{ width: '600px' }}>
                <MDBContainer className="p-3">
                    <h2 className="mb-4 text-center">Sign Up Page</h2>
                    {error && <p className="text-danger">{error}</p>}

                    <MDBInput
                        wrapperClass='mb-3'
                        id='fullName'
                        placeholder="Full Name"
                        value={username}
                        type='text'
                        onChange={handleInputChange(setUserName)}
                    />

                    <MDBInput
                        wrapperClass='mb-3'
                        placeholder='Email Address'
                        id='email'
                        value={email}
                        type='email'
                        onChange={handleInputChange(setEmail)}
                    />

                    <MDBInput
                        wrapperClass='mb-3'
                        placeholder='Password'
                        id='password'
                        type='password'
                        value={password}
                        onChange={handleInputChange(setPassword)}
                    />

                    <MDBInput
                        wrapperClass='mb-3'
                        placeholder='Confirm Password'
                        id='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        onChange={handleInputChange(setConfirmPassword)}
                    />

                    <MDBInput
                        wrapperClass='mb-2'
                        placeholder='Mobile Number'
                        id='mobileNumber'
                        value={mobile}
                        type='text'
                        onChange={handleInputChange(setMobileNumber)}
                    />

                    <label className="form-label mb-1">Role:</label>
                    <select
                        className="form-select mb-4"
                        value={role}
                        onChange={handleInputChange(setRole)}
                    >
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                    </select>

                    <button
                        className="mb-4 d-block mx-auto fixed-action-btn btn-primary"
                        style={{ height: '40px', width: '100%' }}
                        onClick={handleSignup}
                    >
                        Sign Up
                    </button>

                    <div className="text-center">
                        <p>Already Registered? <a href="/">Login</a></p>
                    </div>
                </MDBContainer>
            </div>
        </div>
    );
};

export default Registration;
