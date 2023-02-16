import React from 'react'
import ReactDOM from 'react-dom/client'
import SnakeGame from './components/SnakeGame'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='div-centered'>
      <SnakeGame width={15} height={15} />
    </div>
  </React.StrictMode>,
)
