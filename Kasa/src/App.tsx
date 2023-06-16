import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from './layouts/Header/Header'
import { Footer } from './layouts/Footer/Footer';
import { Loading } from './components/Loading/Loading';
import './App.css';


function App() {
    return (
        <>
            <Header />

            <main>
                <Suspense fallback={<Loading/>}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />

            <ScrollRestoration />
        </>
    );
}

export default App;