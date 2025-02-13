import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Authenticator } from '@aws-amplify/ui-react';
const t = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(t).render(
    <React.StrictMode>
        <Authenticator>
            <App />
        </Authenticator>
    </React.StrictMode>
);
