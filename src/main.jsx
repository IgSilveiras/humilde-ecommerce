import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/style.scss"
import { Header } from "./components/header/header";
import { ItemListContainer } from './components/itemListContainer/itemListContainer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />

    <ItemListContainer />
  </React.StrictMode>,
)