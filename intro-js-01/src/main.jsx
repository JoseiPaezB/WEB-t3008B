import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyApp } from './MyApp'
import {MySecond} from './MySecond.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>
  <MySecond/>
  <MyApp/>
  </StrictMode>,
)
