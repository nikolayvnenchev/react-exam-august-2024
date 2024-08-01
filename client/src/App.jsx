import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Details from './components/details/Details'
import Products from './components/products/Products'
import Logout from './components/logout/Logout'
import CreateProduct from './components/create/Create'
import { AuthContextProvider } from './contexts/AuthContext'
import EditProduct from './components/edit/Edit'
import PrivateRouteGuard from './components/routeGuards/PrivateRouteGuard'
import PublicRouteGuard from './components/routeGuards/PublicRouteGuard'
import PageNotFound from './components/not-found/NotFound'

function App() {
    return (
        <AuthContextProvider>
            <div className="bg-white">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:productId/details' element={<Details />} />
                    <Route element={<PublicRouteGuard />}>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>
                    <Route element={<PrivateRouteGuard />}>
                        <Route path='/products/:productId/edit' element={<EditProduct />} />
                        <Route path='/create' element={<CreateProduct />} />
                        <Route path='/logout' element={<Logout />} />
                    </Route>
                    <Route path='/not-found' element={<PageNotFound />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </div>
        </AuthContextProvider>
    )
}

export default App
