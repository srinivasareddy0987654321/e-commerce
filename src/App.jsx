
import './App.css';
import About from './Components/About';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Main from './Components/Main';

import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import { Link } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <header>
      <div id='nav_files'>
        <table>
            <tr>
                <td><b><Link to="/Home" className='nav_link'>Home</Link></b></td>
                <td><b><Link to="/About" className='nav_link'>About</Link></b></td>
                <td><b><Link to="/Contact" className='nav_link'>Contact</Link></b></td>
                <td><b><Link to="/Cart" className='nav_link'>Cart</Link></b></td>



            </tr>

        </table>
        
      </div>
      </header>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Home' element={<Main/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Cart' element={<Cart/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
