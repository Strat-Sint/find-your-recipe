import Home from './pages/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Results from './pages/Results'
import Recipe from './pages/Recipe'
import NotFount from './pages/NotFount'


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/results' element={<Results />}/>
          <Route path='/recipe/:id' element={<Recipe />}/>
          <Route path='*' element={<NotFount />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
