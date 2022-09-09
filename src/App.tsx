import './App.css';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

function WrappedApp(){
  return <HashRouter><App/></HashRouter>
}

export default WrappedApp;
