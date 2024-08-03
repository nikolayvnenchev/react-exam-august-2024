import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/useAuth';
import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

const initialValues = { email: '', password: '', repass: '' };

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        setError(''); // Clear previous errors

        // Email validation: minimum 9 characters and valid email format
        const emailRegex = /^[a-zA-Z0-9-_.]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        if (!emailRegex.test(values.email) || values.email.length < 9) {
            return setError('Invalid email address or character. Must be at least 9 characters and valid!');
        }

        // Password validation: minimum 5 characters, contains letters and/or numbers
        const passwordRegex = /^[a-zA-Z\d]{5,20}$/;
        if (!passwordRegex.test(values.password)) {
            return setError('Invalid Password! Password must be between 5 and 20 characters long and contain letters or numbers!');
        }

        // Passwords match validation
        if (values.password !== values.repass) {
            return setError('Passwords do not match!');
        }

        try {
            await register(values.email, values.password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, registerHandler);

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '12px' }}>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Register form
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

                    <div>
                        <label htmlFor="repass" className="block text-sm font-medium leading-6 text-gray-900">
                            Repeat password
                        </label>
                        <div className="mt-2">
                            <input
                                id="repass"
                                name="repass"
                                type="password"
                                value={values.repass}
                                onChange={changeHandler}
                                required
                                autoComplete="repass"
                                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

                            {error && (
                                <p>
                                    <span style={{ fontSize: '14px', color: 'red' }}>{error}</span>
                                </p>
                            )}
                        </div>
                    </div>

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
                    Already registered?{' '}
                    <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Login here!
                    </Link>
                </p>
            </div>
        </div>
    );
}
