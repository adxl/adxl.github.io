import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './sass/main.scss'

const root = document.querySelector('#root')

if (root != null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
