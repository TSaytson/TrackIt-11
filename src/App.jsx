import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ResetCSS } from './ResetCss'
import AuthProvider from './contexts/Auth'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Today from './pages/Today'



function App() {

  return (
    <>
      <ResetCSS />
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />}/>
          <Route path='/today' element={<Today />}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
