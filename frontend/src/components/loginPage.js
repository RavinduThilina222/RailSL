import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <>
            <div className="login-container">
                <div className="login-page">
                    <img src="/images/railsl-logo.png" alt="logo" width="100" height="100" />
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Username </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                            <button type="button" className="link-button">Forgot password?</button>
                        </div>
                        <button type="submit" className="login">Login</button>
                        <label>Don't have an account ? </label>
                        <button type="submit" className="signup">Signup</button>
                    </form>
                </div>
                <p className="copyright"> &copy; 2024 RT Solutions. All rights reserved.</p>
            </div>

            <style>
                {`
                .login-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh; /* Full viewport height */
                    background: url('https://seatreservation.railway.gov.lk/mtktwebslr/gallery/gallery-3.jpg') no-repeat center center fixed;
                    background-size: cover;
                    position: relative; /* Relative to position the footer */
                }

                .login-page {
                    background-color: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #007bff;
                    border-radius: 20px;
                    padding: 1rem;
                    width: 90%;
                    max-width: 400px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                .login-page:hover {
                    box-shadow: 0 0 15px #00aaff;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    width: 50vh;
                }

                label {
                    font-size: 0.75rem;
                    color: #0000a5;
                    margin-left: 0.5rem;
                    margin-right: 0.2rem;
                    margin-bottom: 0.2rem;
                }

                input {
                    padding: 0.5rem;
                    font-size: 0.8rem;
                    border: 1px solid #007bff;
                    border-radius: 20px;
                    margin-left: 0.5rem;
                    width: 40vh;
                }

                button {
                    padding: 0.5rem;
                    font-size: 1rem;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    cursor: pointer;
                    align: center;
                    margin-top: 0.25rem;
                    border-radius: 25px;
                }
                
                .signup {
                    background-color: #0056b3;
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
                
                .signup:hover {
                    background-color: #007bff;
                }

                button.login:hover {
                    background-color: #0056b3;
                }

                @media (max-width: 768px) {
                    .login-page {
                        margin: 2rem 1rem;
                        padding: 1rem;
                    }

                    h2 {
                        font-size: 1.5rem;
                    }

                    button {
                        font-size: 0.9rem;
                    }
                }

                @media (max-width: 480px) {
                    .login-page {
                        padding: 0.5rem;
                    }

                    label {
                        font-size: 0.8rem;
                    }

                    button {
                        padding: 0.2rem;
                    }
                }
                
                .link-button {
                    background: none;
                    border: none;
                    color: #007bff;
                    cursor: pointer;
                    text-decoration: none;
                    padding: 0;
                    font-size: 0.75rem;
                    margin-left: 13rem;
                    margin-right: 0.2rem;
                    margin-top: 0.5rem;
                }

                .link-button:hover {
                    text-decoration: underline;
                    color: #0056b3;
                }

                .copyright {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    text-align: center;
                    font-size: 0.75rem;
                    color: white;
                    padding: 0.5rem 0;
                }
                `}
            </style>
        </>
    );
};

export default LoginPage;
