import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { AuthUserContextProvider } from './authContext/UserContext.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthUserContextProvider>
        <App />
      </AuthUserContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
