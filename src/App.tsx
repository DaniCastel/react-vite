import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import NotFoundPage from './pages/404';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  );
}

function WrappedApp(){
  return <HashRouter><App/></HashRouter>
}

export default WrappedApp;
