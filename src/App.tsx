import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import NotFoundPage from './pages/404';
import { MakeUpPage } from './pages/Makeup';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/makeup" element={<MakeUpPage/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}


export function WrappedApp(){
  return <BrowserRouter><App/></BrowserRouter>
}

