
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';



function App() {
  return (
    <>


    <Header/>


      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/single-restaurant-view/:id' element={<Restaurant/>}  />
        
      </Routes>


    <Footer/>


      
    </>
  );
}

export default App;
