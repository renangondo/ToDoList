import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Form from './components/pages/Form/Form';


function App() {

  return (
    <div>
      <Header title="ToDoList"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/form" element={<Form/>} />
          <Route path='/form/:id' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
