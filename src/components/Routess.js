import React from 'react'
import Home  from './forROute/Home';
import About from './forROute/About';
import Contact from './forROute/Contact';
import { Route, Routes,Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const Routess = () => {
  return (

   
    
    <BrowserRouter>

      <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>

             <li>
                <Link to='/about'>About</Link>
            </li>

             <li>
                <Link to='/contact'>Contact</Link>
            </li>

            

        </ul>
      </nav>
    
          <Routes>

              <Route path='/' element={<Home></Home>}/>
               <Route path='/about' element={<About></About>}/>
                <Route path='/contact' element={<Contact></Contact>}/>

          </Routes>

    </BrowserRouter>
        
    
    
  )
}

export default Routess;