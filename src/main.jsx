import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import First from './components/First.jsx'
import Bgchanger from './components/Bgchanger.jsx'
import Password from './components/Password.jsx'
import Task1 from './components/Task1.jsx'
import Task2 from './components/Task2.jsx'
import Task3 from './components/Task3.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <First></First> */}
    {/* <Bgchanger></Bgchanger> */}
    {/* <Password></Password> */}
    {/* <Task1></Task1> */}
    {/* <Task2></Task2> */}
    <Task3></Task3>
  </React.StrictMode>,
)
