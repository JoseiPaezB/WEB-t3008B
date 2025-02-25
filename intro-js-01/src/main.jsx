import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyApp } from './MyApp'
import {MySecond} from './MySecond.jsx'
import { Quinto } from './Quinto.jsx'
import { Cuarto } from './Cuarto.jsx'
import Sexto from './Sexto.jsx'
import { Septimo } from './Septimo.jsx'
import { SimpleForm } from './SimpleForm.jsx'
import {AppCounter} from './AppCounter.jsx'
import { Message } from './Message'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCounter></AppCounter>
    <SimpleForm />
  </StrictMode>,
)
