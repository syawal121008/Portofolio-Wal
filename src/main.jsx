// 1. Clean up Google search DOM styles and scripts before rendering React
document.querySelectorAll('style').forEach(style => {
  if (style.textContent.includes('srp') || style.textContent.includes('gsr') || style.textContent.includes('ynAwRc') || style.textContent.includes('gb_')) {
    style.remove();
  }
});

document.querySelectorAll('link').forEach(link => {
  const href = link.getAttribute('href') || '';
  if (href.includes('google') || href.includes('gstatic') || link.getAttribute('blocking') === 'render') {
    link.remove();
  }
});

// 2. Clear Google HTML elements and create the React mount point
document.body.id = 'root-body';
document.body.className = '';
document.body.innerHTML = '<div id="root"></div>';

// 3. Boot React App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
