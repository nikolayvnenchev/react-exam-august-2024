import { Link, NavLink } from 'react-router-dom'

import { useContext, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AuthContext } from '../../contexts/AuthContext'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-10">
                <div className="flex lg:flex-1">
                    <Link to="/">
                        <img
                            alt="logo"
                            src="/images/logo.png"
                            className="h-14 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `hover-text${isActive ? ' underline' : ''}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `hover-text${isActive ? ' underline' : ''}`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `hover-text${isActive ? ' underline' : ''}`}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) => `hover-text${isActive ? ' underline' : ''}`}
                    >
                        Products
                    </NavLink>
                    {isAuthenticated
                        ? (
                            <div id="user" className="hidden lg:flex lg:gap-x-12">
                                <NavLink
                                    to="/create"
                                    className={({ isActive }) => `hover-text${isActive ? ' underline' : ''}`}
                                >
                                    Create Product
                                </NavLink>
                                <NavLink
                                    to="/logout"
                                    className={({ isActive }) => `hover-text${isActive ? ' underline' : ''}`}
                                >
                                    Logout
                                </NavLink>
                            </div>
                        )
                        : (
                            <div id="guest" className="hidden lg:flex lg:gap-x-12">
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) => `hover-text${isActive ? ' underline' : ''}`}
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) => `hover-text${isActive ? ' underline' : ''}`}
                                >
                                    Register
                                </NavLink>
                            </div>
                        )
                    }
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">

                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="/images/logo.png"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6 flex flex-col">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `text-sm font-semibold leading-6 text-gray-900${isActive ? ' underline' : ''}`}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => `text-sm font-semibold leading-6 text-gray-900${isActive ? ' underline' : ''}`}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => `text-sm font-semibold leading-6 text-gray-900${isActive ? ' underline' : ''}`}
                                >
                                    Contact
                                </NavLink>
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) => `text-sm font-semibold leading-6 text-gray-900${isActive ? ' underline' : ''}`}
                                >
                                    Products
                                </NavLink>
                                {isAuthenticated
                                    ? (
                                        <>
                                            <NavLink
                                                to="/create"
                                                className={({ isActive }) => `text-sm font-semibold leading-6 text-gray-900${isActive ? ' underline' : ''}`}
                                            >
                                                Create Product
                                            </NavLink>
                                            <NavLink
                                                to="/logout"
                                                className={({ isActive }) => `text-sm font-semibold leading-6 text-gray-900${isActive ? ' underline' : ''}`}
                                            >
                                                Logout
                                            </NavLink>
                                        </>
                                    )
                                    : (
                                        <>
                                            <NavLink
                                                to="/login"
                                                className={({ isActive }) => `text-sm font-semibold leading-6 text-gray-900${isActive ? ' underline' : ''}`}
                                            >
                                                Login
                                            </NavLink>
                                            <NavLink
                                                to="/register"
                                                className={({ isActive }) => `text-sm font-semibold leading-6 text-gray-900${isActive ? ' underline' : ''}`}
                                            >
                                                Register
                                            </NavLink>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}