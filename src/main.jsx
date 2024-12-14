import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { List } from './List.jsx'
import { Products } from './products'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <List products={Products} />
  </React.StrictMode>,
)

