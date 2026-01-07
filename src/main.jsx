import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/global.css";
import "./styles/hero.css";
import "./styles/button.css";
import "./styles/footer.css";
import "./styles/benefits.css";
import "./styles/forwho.css";
import "./styles/contentguide.css";
import "./styles/stories.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
