import logo from './logo.svg';
import './App.css';
import { AddProduct } from './components/AddProduct';
import { Searchproduct } from './components/Searchproduct';
import { Deleteproduct } from './components/Deleteproduct';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { Viewproduct } from './components/Viewproduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddProduct/>}/>
      <Route path='/search' element={<Searchproduct/>}/>
      <Route path='/delete' element={<Deleteproduct/>}/>
      <Route path='/viewall' element={<Viewproduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
