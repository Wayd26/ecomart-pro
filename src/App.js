import React from 'react'
import './App.css';
import Base from './components/Base'
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastProvider, useToasts } from 'react-toast-notifications';


function App() {
  return (
    <div className="App">
      <ToastProvider>
      <Base/>
      </ToastProvider>
    </div>
  );
}

export default App;
