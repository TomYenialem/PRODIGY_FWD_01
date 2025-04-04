import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import UseContext from './Contexts/UseContext.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <HashRouter>
  <UseContext>
      <App />
    </UseContext>
  </HashRouter>

)
