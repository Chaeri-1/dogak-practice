import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyListPage from './mylistpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyListPage/>
  </StrictMode>,
)
