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

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>
  <MySecond/>
  <MyApp/>
  <Cuarto/>
  <Sexto/>
  <Septimo title="Hola Mundo" subTitle="Este es el subtitulo"/>
  </StrictMode>,
)
