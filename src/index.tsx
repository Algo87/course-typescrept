import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'App/providers/ThemeProvider';
import App from './App/App';
import './shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>

    </BrowserRouter>,
    document.getElementById('root'),
);
