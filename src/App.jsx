import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';
import ProtectedRoute from './components/ProtectedRoute';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/success' element={<ProtectedRoute ele={<Success />} />}></Route>
          <Route exact path='/*' element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App