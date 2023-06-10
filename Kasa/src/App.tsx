import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Header } from './components/layouts/Header/Header'
import { Footer } from './components/layouts/Footer/Footer';
import './App.css'


export function App() {
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />

            <ScrollRestoration />
        </>
    );
}