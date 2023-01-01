import React,{lazy,Suspense} from 'react'
import {BrowserRouter as Router , Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Proudct from './Proudct'
import Error from './Error'
const   About = lazy(() =>  import ('./About'));

const App = () => {
  return (
   
    <Router>
            <Link to='/' > Home</Link> {'  '}
            <Link to='/About'> About </Link> {'  '} 
            <Link to='/Products'> Products </Link> {'  '} 
            <Link to='/Product'> Procuct </Link> {'  '} 
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/Products' element={<Products/>} />
            <Route path='/Product/:pid' element={<Proudct/>} />
            <Route path='/About' element=
            { <Suspense fallback={<p>Loading ..... </p>}> <About/> </Suspense>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </Router>
   
  )
}

export default App