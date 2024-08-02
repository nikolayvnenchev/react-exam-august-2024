import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/useAuth';
import { useState } from 'react';

const initialValues = { email: '', password: '' };

export default function Login() {
    const [error, setError] = useState('');

    const login = useLogin();
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9-_.]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        return email.length >= 9 && emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        const passwordRegex = /^[a-zA-Z\d]{5,20}$/;
        return passwordRegex.test(password);
    };

    const loginHandler = async ({ email, password }) => {
        if (!isValidEmail(email)) {
            setError("Invalid email address or character. Must be at least 9 characters and valid!");
            return;
        }

        if (!isValidPassword(password)) {
            setError("Password must be at least 5 characters long and contain letters or numbers!");
            return;
        }

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError("Email or Password do not match!");
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        loginHandler
    );

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form method="POST" onSubmit={submitHandler} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    onChange={changeHandler}
                                    required
                                    autoComplete="email"
                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                    required
                                    autoComplete="current-password"
                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {error && (
                            <p>
                                <span style={{ fontSize: '14px', color: 'red' }}>{error}</span>
                            </p>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Register here!
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
