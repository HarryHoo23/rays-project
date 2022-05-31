import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { AppProvider } from './context/app_context';

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
